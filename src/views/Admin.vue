<i18n>
{
"de": {

  "page-title": "Admin",

"heading": "Dein Projekte",
"label-email": "Email",
"label-api-key": "API Key",
"comments-heading": "Kommentare",
"button-logout": "Ausloggen",
"button-reset": "Passwort zurücksetzen"
},
"en": {

  "page-title": "Admin",

"heading": "Your Projects",
"label-email": "Email",
"label-api-key": "API Key",
"comments-heading": "Comments",
"thanks": "Thanks for helping!",
"button-logout": "Logout",
"button-reset": "Reset Password"
}
}
</i18n>

<template>
  <div>
    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-6">
            <div class="content-subsection">
              <h2 class="heading">{{ $t('heading') }}</h2>

              <form novalidate disabled v-for="proj in projects" v-bind:key="proj['activity_id']">
                <div v-if="user" class="md-layout">
                  <div>
                    <label>{{ proj.project_name }}</label>
                    <p>{{ proj.activity_name }}</p>
                  </div>

                  <!--
                    <div>
                    <label>{{ $t('label-api-key') }}</label>
                    <p>{{ user.api_key }}</p>
                    </div>
                  -->
                </div>
              </form>
            </div>

            <!-- <div class="content-subsection">
              <div class="button-group">
                <router-link tag="button" to="/logout" class="button button-secondary">{{
                  $t('button-logout') }}
                </router-link>
                <router-link tag="button" to="/reset" class="button button-secondary">{{
                  $t('button-reset') }}
                </router-link>
              </div>
            </div>-->

            <div class="content-subsection" v-if="comments.length">
              <h3 class="subheading">{{ $t('comments-heading') }}</h3>
              <ul>
                <li v-for="com in comments" v-bind:key="com['id']">
                  <router-link
                    tag="a"
                    :to="{name:'TranscribeTask', query: { id: com['source_id']}}"
                  >{{com['username']}}, {{com['created_at']}}</router-link>
                </li>
              </ul>
              <p class="lead">{{ $t('thanks') }}</p>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ContentSection from "@/components/shared/ContentSection.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "ViewUser",
  metaInfo: function() {
    return {
      title: this.$t("page-title"),
      meta: [
        {
          property: "og:title",
          content: this.$t("page-title"),
          template: "%s | " + this.$t("site-title")
        }
      ]
    };
  },
  components: {
    "app-content-section": ContentSection,
    "app-footer": Footer
  },
  data() {
    return {
      userId: this.$route.params.id,
      projects: [],
      comments: [],
      activities: {
        transcribe: "e4b5ebc5-47a2-430b-84a9-a03b1d4dda34",
        translate: "507b3f89-aff1-4fa3-8f28-9c8399811539"
      }
    };
  },
  computed: {
    ...mapState({
      //user: state => state.user.user,
      user: state => state.c3s.user.currentUser,
      loading: state => state.settings.loading
    }),
    totalSubs: () => {
      return this.comments.length;
    }
  },
  mounted() {
    // if (this.userId !== this.user.id) {
    //   this.$store.dispatch("c3s/user/getUser", this.userId);
    // }
    const projQuery = {
      select: {
        fields: ["projects.id", "projects.name as project_name", "activities.name as activity_name"],
        tables: ["projects", "activities"],
        groupBy: ["projects.id", "projects.name", 'activities.name']
      },
      where: {
        "projects.owned_by": {
          op: "e",
          val: this.user.id,
          join: "a"
        },
        "activities.part_of" : {
          op: "e",
          val: "projects.id",
          type: "sql",  
          join: "a"        
        },
        "activities.active": {
          op: "ne",
          val: "FALSE",
          type: "sql",  
          // join: "a"        
        }
      }
    };
    this.$store
      .dispatch("c3s/activity/getActivities", [projQuery, 100])
      .then(s => {
        // console.log(s)
        if (s.ok) {
          this.projects = s.body;
        }
      });

    const subQuery = {
      select: {
        fields: [
          "comments.content",
          "comments.info->>'username' as username",
          "comments.created_at :: DATE, 'dd/mm/yyyy'",
          "comments.source_id"
        ],
        tables: ["comments"],
        orderBy: {
          "comments.created_at": "DESC"
        }
      },
      where: {
        "comments.content->>'text'": {
          op: "nl",
          val: ""
        }
      }
    };
    this.$store
      .dispatch("c3s/activity/getActivities", [subQuery, 100])
      .then(s => {
        if (s.ok) {
          console.log(s.body);
          this.comments = s.body;
        }
      });
  },
  methods: {
    calcTaskResponse(sub) {
      const resp = sub["content"]["responses"];
      let count = 0;
      if (Array.isArray(resp)) {
        for (let i = 0; i < resp.length; i++) {
          if (resp[i]["text"].length > 0) {
            count += 1;
          }
        }
        return count;
      } else {
        return count;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
</style>
