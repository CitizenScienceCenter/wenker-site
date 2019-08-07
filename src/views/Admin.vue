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
"button-reset": "Passwort zurücksetzen"
},
"en": {

  "page-title": "Profile",

"heading": "Your Profile",
"label-email": "Email",
"label-api-key": "API Key",
"submission-heading": "Transcripbed Sheets",
"submission-transcription-prefix": "You have transcribed ",
"submission-transcription-between": " sentences from ",
"submission-transcription-suffix": " sheets.",
"submission-translation-prefix": "You have translated ",
"submission-translation-suffix": " sentences.",
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
                <router-link tag="button" to="/logout" class="button button-secondary">{{
                  $t('button-logout') }}
                </router-link>
                <router-link tag="button" to="/reset" class="button button-secondary">{{
                  $t('button-reset') }}
                </router-link>
              </div>
            </div>

            <div class="content-subsection" v-if="comments.length">
              <h3 class="subheading">{{ $t('submission-heading') }}</h3>
              <ul>
                <li v-for="com in comments" v-bind:key="com['id']">
                    <router-link tag="a" :to="{name:'TranscribeTask', query: { id: com['source_id']}}">
                      {{com['username']}}, {{com['created_at']}}
                    </router-link>
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
      comments: [],
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
      return this.comments.length
    }
  },
  mounted () {
    if (this.userId !== this.user.id) {
      this.$store.dispatch("c3s/user/getUser", this.userId);
    }
    const subQuery = {
      'select': {
        'fields': [
          'comments.content',
          'comments.info->>\'username\' as username',
          'comments.created_at :: DATE, \'dd/mm/yyyy\'',
          'comments.source_id'
        ],
        'tables': [
          'comments'
        ],
        'orderBy': {
          'comments.created_at': 'DESC'
        }
      },
      'where': {
        'comments.content->>\'text\'': {
          'op': 'nl',
          'val': '',
        }
      }
    }
    this.$store.dispatch('c3s/activity/getActivities', [subQuery, 100]).then(s => {
      // console.log(s)
      if (s.ok) {
        console.log(s.body)
        this.comments = s.body
      }
    })
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


</style>
