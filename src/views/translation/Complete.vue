<i18n>
    {
    "de": {
    "heading": "Vielen Dank für deine Teilnahme",
    "sentence-part-1": "Du bist der ",
    "sentence-part-2": ". Teinehmer",
    "heading-register": "Jetzt registrieren",
    "register-text": "Erstelle dein Profil für künfitige Teilnahmen an unseren Citizen Science Projekten."
    },
    "en": {
    "heading": "Thank you for Your Participation",
    "sentence-part-1": "You are user number ",
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
                                {{ $t('sentence-part-1') }}{{ totalSubs }}{{ $t('sentence-part-2') }} <!-- TODO: if no loggedin -->
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
    import { mapState, mapGetters } from "vuex";
    import RegisterForm from "@/components/register-form.vue"
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import ShareIcons from '@/components/ShareIcons.vue'
    import * as taskUtils from '@/assets/scripts/tasks'

    export default {
        name: "Complete",
        data() {
            return {
                stats: {

                },
                id: '507b3f89-aff1-4fa3-8f28-9c8399811539',
                totalSubs: -1
            };
        },
        watch: {
            project(to, from) {
                if (to === null) {
                    this.$router.push("/projects");
                }
            },
            tasks(to, from) {}
        },
        components: {
            RegisterForm,
            'app-content-section': ContentSection,
            'app-footer': Footer,
            ShareIcons
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity
        }),
        beforeRouteLeave (to, from, next) {
          this.$store.commit('c3s/activity/SET_ACTIVITY', null)
          next()
        },
        mounted() {
            taskUtils.getSubmissionCount(this).then(t => {
                this.totalSubs = t.body
            })
        },
        methods: {

            startPage() {
                this.$router.push({name: 'Home'})
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
