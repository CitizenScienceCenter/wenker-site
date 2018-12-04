
<i18n>
    {
    "de": {
    "heading": "Übersetzen",
    "heading-activity-description": "Aufgabe",
    "activity-description": "Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.",
    "form-heading": "Ihre Angaben",
    "button-start": "Starten",
    "login-heading": "Sie haben sich schon registiert?",
    "button-login": "Anmelden"
    },
    "en": {
    "heading": "Translate",
    "heading-activity-description": "Task",
    "activity-description": "Translate the original Wenker sentences into your own dialect. So we can compare today's Swiss German with the one spoken in the 1930ies.",
    "form-heading": "Your Info",
    "button-start": "Start",
    "login-heading": "Already registered?",
    "button-login": "Login"
    }
    }
</i18n>


<template>

    <div>

        <app-content-section class="content-section-condensed">
            <div class="content-wrapper">

                <!--
                <div class="row">
                    <div class="col">
                        <project-info :stats="stats" v-if="project" :project_name="project.name"></project-info>
                    </div>
                </div>
                -->

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


                            <activity-details-form :activity="activity" :allRegions="true"></activity-details-form>

                            <div class="centered button-group left-aligned-large">
                                <button class="button button-primary" v-on:click="startProject">{{ $t('button-start') }}</button>
                            </div>
                        </div>

                        <div class="content-subsection">
                            <h3 class="subheading centered left-aligned-large">{{ $t('login-heading') }}</h3>
                            <div class="centered button-group left-aligned-large">
                                <router-link to="/register" tag="button" class="button button-secondary">{{
                                    $t('button-login') }}
                                </router-link>
                            </div>
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
    import ActivityDetailsForm from '@/components/ActivityDetailsForm'
    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import * as taskUtils from '@/assets/scripts/tasks'

    export default {
        name: 'Start',
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
            ActivityDetailsForm,
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
