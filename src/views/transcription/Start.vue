<i18n>
    {
    "de": {
    "heading": "Transkribieren",
    "activity-description": "Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!",
    "form-heading": "Ihre Angaben",
    "button-start": "Starten",
    "button-start-region": "Starten mit lokalen Bögen",
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

                        <activity-details-form :project="project" :allRegions="false"
                                               :errors="errors"></activity-details-form>

                        <div class="centered button-group">
                            <button class="button button-primary" v-on:click="startProject">{{ $t('button-start') }}
                            </button>
                            <button class="button button-secondary" v-on:click="startProjectRegion">{{
                                $t('button-start-region') }}
                            </button>
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
                        <router-link to="/register" tag="button" class="button button-secondary">{{ $t('button-login')
                            }}
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="content-subsection">
                <div class="row">
                    <div class="col">
                        <comments-list :id=id></comments-list>
                    </div>
                </div>
            </div>

        </div>
    </app-content-section>

</template>

<script>
    import {mapState} from 'vuex'
    import CommentsList from '@/components/comments-list.vue'
    import ActivityDetailsForm from '@/components/ActivityDetailsForm'
    import ContentSection from '@/components/shared/ContentSection.vue'


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
            'app-content-section': ContentSection
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity
        }),
        mounted() {
            this.$store
                .dispatch("c3s/activity/getActivity", [
                    this.id,
                    false
                ]).then(a => {
            })


        },
        methods: {
            startProject() {
                if (this.userCheck()) {
                    this.$router.push({name: 'TranscribeTask', query: {'count': 1}})
                }
            },
            startProjectRegion() {
                if (this.userCheck()) {
                    this.$router.push({name: 'TranscribeTask', query: {'region': this.user.info.canton, 'count': 1}})
                }
            },
            userCheck() {
                if (this.user.hasOwnProperty('info') && this.user.info !== null) {
                    if (!(this.user.info.hasOwnProperty('ageRange'))) {
                        this.errors.age = true;
                    }
                    if (!(this.user.info.hasOwnProperty('canton'))) {
                        this.errors.canton = true;
                    }
                } else {
                    this.errors.age = true;
                    this.errors.canton = true;
                }
                if (this.errors.canton || this.errors.age) {
                    return false
                } else {
                    return true
                }
            }
        }
    }
</script>

<style lang="scss">


</style>
