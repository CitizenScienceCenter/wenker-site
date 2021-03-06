<i18n>
    {
    "de": {

    "page-title": "Transkribieren",

    "heading": "Transkribieren",
    "heading-activity-description": "Aufgabe",
    "activity-description": "Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!",
    "form-heading": "Wählen Sie einen Bogen aus",
    "button-start": "Starten",
    "label-sheet": "Bogen",
    "label-sheets": "Bögen",
    "label-all": "Alle",
    "button-reset": "Zurücksetzen",
    "login-heading": "Sie haben sich schon registiert?",
    "login-text": "Registrierte Benutzer haben folgende Vorteile:",
    "login-bullet-1": "Sie können Ihre Arbeit auf einem anderen Computer fortsetzen.",
    "login-bullet-2": "Sie erhalten Zugriff auf die Bögen, die Sie bereits transkribiert haben (unter Ihrem Profil).",
    "button-login": "Anmelden"
    },
    "en": {

    "page-title": "Transcription",

    "heading": "Transcription",
    "heading-activity-description": "Task",
    "activity-description": "The 1700 hand-written swiss Wenker sheets must be accurately copied in order to process them digitally. For that we need your support!",
    "form-heading": "Sheet Selection",
    "button-start": "Start",
    "label-sheet": "Sheet",
    "label-sheets": "Sheets",
    "label-all": "All",
    "button-reset": "Reset",
    "login-heading": "Already registered?",
    "login-text": "Registered users have the following benefits:",
    "login-bullet-1": "Continue your work on a different computer.",
    "login-bullet-2": "Access a history of sheets you have already transcribed (under your Profile).",
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

                            <sheet-selection-form ref="details" :activity="id" :errors="errors" class="margin-bottom"></sheet-selection-form>

                            <div class="button-group centered left-aligned-large">
                                <button v-if="details.count > 0 && canton" class="button button-primary" @click="startProjectRegion" tabindex="3">
                                    <template v-if="details.count > 1 ">{{ $t('button-start') }} ({{details.count}} {{ $t('label-sheets') }})</template>
                                    <template v-else>{{ $t('button-start') }} ({{details.count}} {{ $t('label-sheet') }})</template>
                                </button>
<!--                                <button v-else class="button button-primary" v-on:click="startProject" tabindex="3">{{ $t('button-start') }} ({{ $t('label-all') }} {{ $t('label-sheets') }})</button>-->

                                <button v-if="details.count > 0 && canton" class="button button-secondary" @click="resetSelection" tabindex="4">{{ $t('button-reset') }}</button>
                                <br>
                                <button class="button button-primary" v-on:click="startProject" tabindex="3">{{ $t('button-start') }} ({{ $t('label-all') }} {{ $t('label-sheets') }})</button>
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
                        </ul>
                        <div class="button-group centered left-aligned-large">
                            <router-link to="/login" tag="button" class="button button-secondary">{{
                                $t('button-login') }}
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>

        <comments-list :id=id :noSentenceNr="true"></comments-list>

        <section-feedback color="greyish" email="help@citizenscience.ch" subject="Projekt Wenker"></section-feedback>

        <app-footer></app-footer>

    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import CommentsList from '@/components/comments-list.vue'
    import SheetSelectionForm from '@/components/SheetSelectionForm'
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import SectionFeedback from "../../components/shared/SectionFeedback";

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
                regions: [],
                project: {},
                stats: {},
                id: "e4b5ebc5-47a2-430b-84a9-a03b1d4dda34",
                details: {
                    canton: undefined,
                    count: 0
                },
                comments: [],
                errors: {
                    canton: false,
                    age: false
                }
            }
        },
        watch: {
            'canton'(to, from) {
                console.log(to);
            }
        },
        components: {
            SectionFeedback,
            SheetSelectionForm,
            CommentsList,
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity,
            canton: state => state.settings.transcription.canton,
        }),
        mounted() {

            this.$store.commit('c3s/activity/SET_ACTIVITY', null);
            console.log(this.canton)
            this.setWatchers();
            this.$store
                .dispatch("c3s/activity/getActivity", [
                    this.id,
                    false
                ]).then(() => {

                // console.log(a)
            })
        },
        created() {
            this.setWatchers();
        },
        methods: {
            setWatchers() {
                this.$nextTick(() => {
                    this.$watch(() => {return this.$refs.details.taskCount}, (v) => {
                        console.log(v)
                        this.details.count = v;
                    });
                    this.$watch(() => {
                        return '$refs.details.details.canton'
                    }, (val)=> {
                        this.details.canton = val;
                    });
                });
            },
            resetSelection() {
                this.$store.commit('settings/SET_CANTON', undefined);
                this.$store.commit('settings/SET_TOWN', undefined);
                this.$refs.details.details.canton = undefined;
                this.$refs.details.details.town = undefined;
            },
            startProject() {
                this.$router.push({name: 'TranscribeTask', query: {'count': 1}})
            },
            startProjectRegion() {
                const quObj = {'region': this.$refs.details.details.canton, 'count': 1};
                if (this.$refs.details.details.town) {
                    quObj['town'] = this.$refs.details.details.town;
                }
                this.$router.push({name: 'TranscribeTask', query: quObj});
            }
        }
    }
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


</style>
