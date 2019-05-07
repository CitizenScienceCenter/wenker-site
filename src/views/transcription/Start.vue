<i18n>
    {
    "de": {
    "heading": "Transkribieren",
    "heading-activity-description": "Aufgabe",
    "activity-description": "Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!",
    "form-heading": "Bogenauswahl",
    "button-start": "Starten",
    "label-sheet": "Bogen",
    "label-sheets": "Bögen",
    "login-heading": "Sie haben sich schon registiert?",
    "login-text": "Falls Sie bereits an einer Unserer Projekte teilgenommen haben und dabei einen Login erstellt haben, melden Sie sich jetzt an.",
    "button-login": "Anmelden"
    },
    "en": {
    "heading": "Transcription",
    "heading-activity-description": "Task",
    "activity-description": "The 1700 hand-written swiss Wenker sheets must be accurately copied in order to process them digitally. For that we need your support!",
    "form-heading": "Sheet Selection",
    "button-start": "Start",
    "label-sheet": "Sheet",
    "label-sheets": "Sheets",
    "login-heading": "Already registered?",
    "login-text": "If you already contributed and created an account, login in now.",
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

                <div class="row row-centered">

                    <div class="col col-tablet-portrait-10 col-large-4 col-large-after-2 col-wrapping col-large-no-bottom-margin">
                        <h3 class="subheading centered left-aligned-large">{{ $t('heading-activity-description') }}</h3>
                        <p class="lead" v-html="$t('activity-description')"></p>
                    </div>

                    <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-no-bottom-margin">

                        <div class="content-subsection">
                            <h3 class="subheading centered left-aligned-large">{{ $t('form-heading') }}</h3>
                            <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->

                            <sheet-selection-form ref="details" :activity="activity" :errors="errors" class="margin-bottom"></sheet-selection-form>

                            <div class="button-group centered left-aligned-large">
                                <button v-if="$refs.details && $refs.details.taskCount > 0" class="button button-primary" @click="startProjectRegion" tabindex="3">
                                    <template v-if="$refs.details.taskCount > 1">{{ $t('button-start') }} ({{$refs.details.taskCount}} {{ $t('label-sheets') }})</template>
                                    <template v-else>{{ $t('button-start') }} ({{$refs.details.taskCount}} {{ $t('label-sheet') }})</template>
                                </button>
                                <button v-else class="button button-primary" v-on:click="startProject" tabindex="3">{{ $t('button-start') }} (Alle {{ $t('label-sheets') }})</button>

                                <button v-if="$refs.details && $refs.details.taskCount > 0" class="button button-secondary" @click="resetSelection" tabindex="4">Zurücksetzen</button>
                            </div>
                        </div>
                        <div class="content-subsection">
                            <h3 class="subheading centered left-aligned-large">{{ $t('login-heading') }}</h3>
                            <p>{{ $t('login-text') }}</p>
                            <div class="button-group centered left-aligned-large">
                                <router-link to="/register" tag="button" class="button button-secondary">{{
                                    $t('button-login') }}
                                </router-link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </app-content-section>

        <comments-list :id=id></comments-list>

        <app-footer></app-footer>

    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import CommentsList from '@/components/comments-list.vue'
    import SheetSelectionForm from '@/components/SheetSelectionForm'
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'


    export default {
        name: 'Start',
        data() {
            return {
                regions: [],
                project: {},
                stats: {},
                id: "e4b5ebc5-47a2-430b-84a9-a03b1d4dda34",
                comments: [],
                errors: {
                    canton: false,
                    age: false
                }
            }
        },
        watch: {
            /*
            '$refs.details.taskCount'(to, from) {
                this.taskCount = to;
            }
            */
        },
        components: {
            SheetSelectionForm,
            CommentsList,
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity
        }),
        mounted() {

            this.$store.commit('c3s/activity/SET_ACTIVITY', null);
            this.$store
                .dispatch("c3s/activity/getActivity", [
                    this.id,
                    false
                ]).then(a => {
                // console.log(a)
            })
        },
        methods: {
            resetSelection() {
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
