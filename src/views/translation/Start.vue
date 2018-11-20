<i18n>
{
    "de": {
        "heading": "Übersetzen",
        "activity-description": "Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.",
        "form-heading": "Ihre Angaben",
        "button-start": "Starten",
        "login-heading": "Sie haben sich schon registiert?",
        "button-login": "Anmelden"
    }
}
</i18n>



<template>

    <app-content-section>
        <div class="content-wrapper">

            <!--
            <div class="row">
                <div class="col">
                    <project-info :stats="stats" v-if="project" :project_name="project.name"></project-info>
                </div>
            </div>
            -->

            <div class="content-subsection">
                <div class="row row-centered">
                    <div class="col col-large-8">
                        <h2 class="heading centered">{{ $t('heading') }}</h2>
                        <p class="lead" v-html="$t('activity-description')"></p>
                    </div>
                </div>
            </div>
            <div class="content-subsection">
                <div class="row row-centered">
                    <div class="col col-large-4">

                        <h3 class="subheading centered">{{ $t('form-heading') }}</h3>
                        <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->


                        <activity-details-form :project="project" :allRegions="true"></activity-details-form>

                        <div class="centered button-group">
                            <button class="button button-primary" v-on:click="startProject">{{ $t('button-start') }}</button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="content-subsection">
                <div class="row row-centered">
                    <div class="col">
                        <h3 class="subheading centered">{{ $t('login-heading') }}</h3>
                    </div>
                    <div class="col centered">
                        <router-link to="/register" tag="button" class="button button-secondary">{{ $t('button-login') }}</router-link>
                    </div>
                </div>
            </div>

            <div class="content-subsection">
                <div class="row">
                    <div class="col">
                        <comments-list :current_user="user" :comments="comments"></comments-list>
                    </div>
                </div>
            </div>

        </div>
    </app-content-section>

</template>

<script>
  import { mapState } from 'vuex'
  import CommentsList from '@/components/comments-list.vue'
  import ActivityDetailsForm from '@/components/ActivityDetailsForm'
  import ContentSection from '@/components/shared/ContentSection.vue'

  export default {
    name: 'Start',
    data () {
      return {
        project: {},
        stats: {},
        comments: []
      }
    },
    computed: mapState({
        user: state => state.c3s.user.currentUser,
        activity: state => state.c3s.activity.activity
    }),
    watch: {
      project (to, from) {
      },
      tasks (to, from) {
      },
      '$route.params.id' (to, from) {
      }
    },
    components: {
      ActivityDetailsForm,
      CommentsList,
        'app-content-section': ContentSection
    },
    mounted () {
        this.$store
            .dispatch("c3s/activity/getActivity", [
                '507b3f89-aff1-4fa3-8f28-9c8399811539',
                false
            ]).then(a => {
        })
        this.$store.dispatch('c3s/comments/getCommentsForID', ['507b3f89-aff1-4fa3-8f28-9c8399811539', 'c3s/activity/SET_COMMENTS'])
      // this.$store
      //   .dispatch("project/getProject", [
      //     this.$route.params.id || this.projectID,
      //     false
      //   ])
      //   .then(p => {
      //     if (p === false) {
      //       this.$router.push({
      //         name: "Error",
      //         params: { msg: "Project not found" }
      //       });
      //     }
      //   });
      // console.log(this.stats);
      // this.regions = this.swissCantons;
      // if (this.user && this.user.info && this.user.info.age) {
      //   this.userDetails = this.user.info;
      // }
    },
    methods: {
      startProject () {
        this.router.push({ name: 'TranscribeTask' })
      },
      startProjectRegion () {
      }
    }
  }
</script>

<style scoped>
</style>
