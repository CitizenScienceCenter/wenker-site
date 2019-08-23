<i18n>
{
"de": {

  "page-title": "Profil",

"heading": "Dein Profil",
"label-email": "Email",
"label-api-key": "API Key",
"submission-heading": "Transkribierte Bögen",
"submission-transcription-prefix": "Du hast ",
"submission-transcription-between": " Sätze auf ",
"submission-transcription-suffix": " Bögen transkribiert.",
"submission-translation-prefix": "Du hast ",
"submission-translation-suffix": " Sätze übersetzt",
"thanks": "Vielen Dank für Deine Hilfe!",
"button-logout": "Ausloggen",
"button-admin": "Admin Area",
"button-reset": "Passwort zurücksetzen"
},
"en": {

  "page-title": "Profile",

"heading": "Your Profile",
"label-email": "Email",
"label-api-key": "API Key",
"submission-heading": "Transcribed Sheets",
"submission-transcription-prefix": "You have transcribed ",
"submission-transcription-between": " sentences from ",
"submission-transcription-suffix": " sheets.",
"submission-translation-prefix": "You have translated ",
"submission-translation-suffix": " sentences.",
"thanks": "Thanks for helping!",
"button-logout": "Logout",
"button-admin": "Admin Area",
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

              <form novalidate disabled>
                <div v-if="user" class="md-layout">
                  <div>
                    <label>{{ $t('label-email') }}</label>
                    <p>{{ user.email }}</p>
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

            <div class="content-subsection">
              <div class="button-group">
                <router-link v-if="admin" tag="button" to="/admin" class="button button-primary">{{
                  $t('button-admin') }}
                </router-link>
                <router-link tag="button" to="/logout" class="button button-secondary">{{
                  $t('button-logout') }}
                </router-link>
                <router-link tag="button" to="/reset" class="button button-secondary">{{
                  $t('button-reset') }}
                </router-link>
              </div>
            </div>

            <div class="content-subsection" v-if="submissions.length">
              <h3 class="subheading">{{ $t('submission-heading') }}</h3>
              <ul>
                <li v-for="sub in submissions" v-bind:key="sub['submission_id']">
                  <div v-if="sub['activity_id'] === activities.transcribe">
                    <router-link tag="a" :to="{name:'TranscribeTask', query: { id: sub['task_id']}}">
                      {{sub['info']['SchoolPlace']}}, {{sub['info']['SchoolState']}}<!-- (ID: {{sub['task_id']}}) -->
                    </router-link>
                  </div>
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
import { mapState, mapGetters } from 'vuex'
import ContentSection from '@/components/shared/ContentSection.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'ViewUser',
  metaInfo: function() {
      return {
          title: this.$t('page-title'),
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('page-title'),
                  template: '%s | '+this.$t('site-title')
              }
          ]
      }
  },
  components: {
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
  data () {
    return {
      userId: this.$route.params.id,
      submissions: [],
      admin: false,
      submissionStats: {},
      activities: {
        transcribe: 'e4b5ebc5-47a2-430b-84a9-a03b1d4dda34',
        translate: ''
      }
    }
  },
  computed: {
    ...mapState({
      //user: state => state.user.user,
      user: state => state.c3s.user.currentUser,
      loading: state => state.settings.loading
    }),
    totalSubs: () => {
      return this.submissions.length
    }
  },
  mounted () {
    if (this.userId !== this.user.id) {
      this.$store.dispatch("c3s/user/getUser", this.userId);
    }
    const subQuery = {
      'select': {
        'fields': [
          'submissions.created_at',
          'submissions.id as submission_id',
          'activities.name as activity_name',
          'submissions.user_id',
          'submissions.content',
          'submissions.task_id',
          'tasks.info',
          'activities.id as activity_id'
        ],
        'tables': [
          'submissions',
          'activities',
          'tasks'
        ],
        'orderBy': {
          'submissions.created_at': 'DESC'
        }
      },
      'where': {
        'submissions.user_id': {
          'op': 'e',
          'val': this.user.id,
          'join': 'a'
        },
        'submissions.task_id': {
          'op': 'e',
          'type': 'sql',
          'val': 'tasks.id',
          'join': 'a'
        },
        'tasks.activity_id': {
          'op': 'e',
          'type': 'sql',
          'val': 'activities.id',
          'join': 'a'
        }
      }
    }
    this.$store.dispatch('c3s/submission/getSubmissions', [subQuery, 100]).then(s => {
      if (s.ok) {
        this.submissions = s.body
        let filteredSubmissions = [];
        for (let index in this.submissions) {
          const sub = this.submissions[index]
          var count = 0;
          filteredSubmissions.map(function(submission) {
            if(submission['task_id'] === sub['task_id']) {
              count += 1;
            }
          });
          if(count === 0) {
            filteredSubmissions.push(sub);
          }
        }
        this.submissions = filteredSubmissions;
      }
    })
    this.checkOwner();
  },
  methods: {
    calcTaskResponse (sub) {
      const resp = sub['content']['responses']
      let count = 0
      if (Array.isArray(resp)) {
        for (let i = 0; i < resp.length; i++) {
          if (resp[i]['text'].length > 0) {
            count += 1
          }
        }
        return count
      } else {
        return count
      }
    },
    checkOwner() {
      const getProjects = {
        'select': {
          'fields': [
            'owned_by'
          ],
          'tables': [
            'projects'
          ],
        },
        'where': {
          'owned_by': {
            'op': 'e',
            'val': this.$store.state.c3s.user.currentUser.id,
          }
        }
      };
      this.$store.dispatch('c3s/project/getProjects', [getProjects, 100]).then(s => {
        console.log(s.body)
        if (s.body.length !== 0) {
          this.admin = true;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


</style>
