
<i18n>
    {
    "de": {

    "page-title": "Übersetzen",

    "heading": "Übersetzen",
    "heading-activity-description": "Aufgabe",
    "activity-description": "Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.",
    "form-heading": "Ihre Angaben",
    "button-start": "Starten",
    "login-heading": "Sie haben sich schon registiert?",
    "login-text": "Registrierte Benutzer haben folgende Vorteile:",
    "login-bullet-1": "Sie können Ihre Arbeit auf einem anderen Computer fortsetzen.",
    "login-bullet-2": "Sie erhalten Zugriff auf die Bögen, die Sie bereits transkribiert haben (unter Ihrem Profil).",
    "login-bullet-3": "Sie können Ihre persönlichen Daten (Region, Altersbereich) speichern, damit Sie sie nicht jedes Mal erneut eingeben müssen.",
    "button-login": "Anmelden"
    },
    "en": {

    "page-title": "Translation",

    "heading": "Translate",
    "heading-activity-description": "Task",
    "activity-description": "Translate the original Wenker sentences into your own dialect. So we can compare today's Swiss German with the one spoken in the 1930ies.",
    "form-heading": "Your Info",
    "button-start": "Start",
    "login-heading": "Already registered?",
    "login-text": "Registered users have the following benefits:",
    "login-bullet-1": "Continue your work on a different computer.",
    "login-bullet-2": "Access a history of sheets you have already transcribed (under your Profile).",
    "login-bullet-3": "Save your region and age range so you do not have to enter it each time",
    "button-login": "Login"
    }
    }
</i18n>


<template>

    <div>

        <app-content-section class="content-section-condensed">
            <div class="content-wrapper">


                <div class="row row-centered">
                    <div class="col">
                        <h2 class="heading centered">{{ $t('heading') }}</h2>
                    </div>
                </div>

                <div class="row row-centered margin-bottom">

                    <div class="col col-tablet-portrait-10 col-large-4 col-large-after-2 col-wrapping col-large-no-bottom-margin">
                        <h3 class="subheading centered left-aligned-large">{{ $t('heading-activity-description') }}</h3>
                        <p class="lead" v-html="$t('activity-description')"></p>
                    </div>

                    <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-no-bottom-margin">


                        <div class="content-subsection">
                            <h3 class="subheading centered left-aligned-large">{{ $t('form-heading') }}</h3>
                            <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->


                            <user-details-form ref="details" :activity="activity" class="margin-bottom"></user-details-form>

                            <div class="centered button-group left-aligned-large">
                                <button class="button button-primary" v-on:click="startProject" tabindex="3" :disabled="!$refs.details || !$refs.details.details.canton || !$refs.details.details.ageRange">{{ $t('button-start') }}</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row row-centered">
                    <div class="col col-tablet-portrait-10 col-large-6">
                        <h3 class="subheading centered left-aligned-large reduced-bottom-margin">{{ $t('login-heading') }}</h3>
                        <p class="reduced-bottom-margin" v-html="$t('login-text')"></p>
                        <ul>
                            <li v-html="$t('login-bullet-1')"></li>
                            <li v-html="$t('login-bullet-2')"></li>
                            <li v-html="$t('login-bullet-3')"></li>
                        </ul>
                        <div class="centered button-group left-aligned-large">
                            <router-link to="/login" tag="button" class="button button-secondary">{{
                                $t('button-login') }}
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>

        <comments-list :id="id"></comments-list>

        <app-footer></app-footer>

    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import CommentsList from '@/components/comments-list.vue'
    import UserDetailsForm from '@/components/UserDetailsForm'
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import * as taskUtils from '@/assets/scripts/tasks'

    export default {
        name: 'Start',
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
        data() {
            return {
                project: {},
                stats: {},
                comments: [],
                id: '507b3f89-aff1-4fa3-8f28-9c8399811539'
            }
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity
        }),
        watch: {
            project(to, from) {
            },
            tasks(to, from) {
            },
            '$route.params.id'(to, from) {
            }
        },
        components: {
            UserDetailsForm,
            CommentsList,
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        mounted() {
            this.$store.commit('c3s/activity/SET_ACTIVITY', null);
            this.$store
                .dispatch("c3s/activity/getActivity", [
                    this.id,
                    false
                ]).then(a => {
            })
        },
        methods: {
            startProject() {
                this.$router.push({name: 'TranslateTask', query: {count: 1}})
            },
            startProjectRegion() {
            }
        }
    }
</script>


<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';



</style>
