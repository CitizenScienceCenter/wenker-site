<template>
    <div>

        <section class="section-content">

            <div class="content-wrapper">

                <div class="row">
                    <div class="col col-title">
                        <project-info :stats="stats" v-if="project" :project_name="project.name"></project-info>
                    </div>
                </div>

                <div class="row">
                    <div class="col col-subtitle">
                        <p>Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col col-form">

                        <div class="form-section">

                            <h3>Ihre Angaben</h3>
                            <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->

                            <activity-details-form></activity-details-form>

                            <button class="startProject primary" v-on:click="startProject">Starten</button>
                            <div v-if="project.name === 'Transkribieren'"><button class="startProject secondary region-btn" v-on:click="startProjectRegion">Start für Ihre Region</button></div>

                        </div>

                        <div class="form-section">
                            <h4>Sie haben sich schon registiert?</h4>
                            <router-link to="/register" tag="button" class="secondary">Anmelden</router-link>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        <comments-list :current_user="user" :comments="comments"></comments-list>

    </div>

</template>

<script>
    import { mapState, mapGetters } from "vuex";
    import CommentsList from "@/components/comments-list.vue";
    import ActivityDetailsForm from "@/components/ActivityDetailsForm";

    export default {
        name: "Start",
        data() {
            return {
                userDetails: {
                    age: undefined,
                    canton: undefined
                },
                errors: {
                    canton: false,
                    age: false
                },
                regions: []
            };
        },
        watch: {
            project(to, from) {},
            tasks(to, from) {},
            "userDetails.canton"(to, from) {},
            "$route.params.id"(to, from) {}
        },
        components: {
            ActivityDetailsForm,
            CommentsList
        },
        computed: mapState({

        }),
        mounted() {
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
            startProject() {
                this.router.push({ name: 'TranscribeTask' })
            },
            startProjectRegion() {
            }
        }
    }
</script>

<style scoped>
</style>
