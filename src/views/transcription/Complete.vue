<i18n>
    {
    "de": {

    "page-title": "Transkribieren",

    "heading": "Vielen Dank für deine Teilnahme",
    "sentence-part-1": "Du bist der ",
    "sentence-part-2": ". Teilnehmer",
    "heading-register": "Jetzt registrieren",
    "register-text": "Erstelle dein Profil für künfitige Teilnahmen an unseren Citizen Science Projekten."
    },
    "en": {

    "page-title": "Transcription",

    "heading": "Thank you for Your Participation",
    "sentence-part-1": "You are participant no. ",
    "sentence-part-2": " ",
    "heading-register": "Register now",
    "register-text": "Create your profile for future contributions to our Citizen Science projects."
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
                            <p>
                                {{ $t('sentence-part-1') }}{{ totalSubs }}{{ $t('sentence-part-2') }}
                                <!-- TODO: if no loggedin -->
                            </p>
                        </div>

                        <div v-if="user.isAnon" class="content-subsection">
                            <h3 class="subheading">{{ $t('heading-register') }}</h3>
                            <p>
                                {{ $t('register-text') }}
                            </p>
                            <register-form></register-form>
                        </div>

                        <div class="content-subsection">
                            <button @click="startPage" class="button button-secondary">Zurück zur Startseite</button>
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
  import RegisterForm from '@/components/register-form.vue'
  import ContentSection from '@/components/shared/ContentSection.vue'
  import Footer from '@/components/shared/Footer.vue'
  import * as taskUtils from '@/assets/scripts/tasks'

  export default {
    name: 'Complete',
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
    data () {
      return {
        stats: {},
        id: 'e4b5ebc5-47a2-430b-84a9-a03b1d4dda34',
        totalSubs: -1
      }
    },
    watch: {
      project (to, from) {
        if (to === null) {
          this.$router.push('/projects')
        }
      },
      tasks (to, from) {
      }
    },
    components: {
      RegisterForm,
      'app-content-section': ContentSection,
      'app-footer': Footer
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('c3s/activity/SET_ACTIVITY', null)
      next()
    },
    computed: mapState({
      user: state => state.c3s.user.currentUser
    }),
    mounted () {
      taskUtils.getSubmissionCount(this).then(t => {
        this.totalSubs = t.body
      })
    },
    methods: {
      startPage () {
        this.$router.push({ name: 'Home' })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
