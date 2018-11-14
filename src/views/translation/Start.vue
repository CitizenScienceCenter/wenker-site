<template>

        <app-content-section>
            <div class="content-wrapper">

                <div class="row">
                    <div class="col">
                        <!--<project-info :stats="stats" v-if="project" :project_name="project.name"></project-info>-->
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <p>Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können
                            wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col">

                        <div class="form-section">

                            <h3>Ihre Angaben</h3>
                            <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->

                            <activity-details-form :project="project" :regions="[]"></activity-details-form>

                            <button class="button button-primary" v-on:click="startProject">Starten</button>
                            <div v-if="project.name === 'Transkribieren'">
                                <button class="startProject secondary region-btn" v-on:click="startProjectRegion">Start
                                    für Ihre Region
                                </button>
                            </div>

                        </div>

                        <div class="form-section">
                            <h4>Sie haben sich schon registiert?</h4>
                            <router-link to="/register" tag="button" class="button button-secondary">Anmelden</router-link>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <comments-list :current_user="user" :comments="comments"></comments-list>
                    </div>
                </div>

            </div>
        </app-content-section>

</template>

<script>
  import { mapState } from 'vuex'
  import CommentsList from '@/components/comments-list.vue'
  import ActivityDetailsForm from '@/components/ActivityDetailsForm'
  import ContentSection from '@/components/shared/ContentSection.vue'

  export default {
    name: 'Start',
    data () {
      return {
        regions: [],
        project: {},
        stats: {},
        user: {},
        comments: []
      }
    },
    watch: {
      project (to, from) {
      },
      tasks (to, from) {
      },
      '$route.params.id' (to, from) {
      }
    },
    components: {
      ActivityDetailsForm,
      CommentsList,
        'app-content-section': ContentSection
    },
    computed: mapState({}),
    mounted () {
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
      startProject () {
        this.router.push({ name: 'TranscribeTask' })
      },
      startProjectRegion () {
      }
    }
  }
</script>

<style scoped>
</style>
