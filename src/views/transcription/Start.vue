<template>
    <div>

        <section class="section-content">

            <div class="content-wrapper">

                <div class="row">
                    <div class="col col-title">
                        <!--<project-info :stats="stats" v-if="project" :project_name="project.name"></project-info>-->
                    </div>
                </div>

                <div class="row">
                    <div class="col col-subtitle">
                        <p>Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie
                            digital aufzubereiten. Dafür brauchen wir deine Unterstützung!</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col col-form">

                        <div class="form-section">

                            <h3>Ihre Angaben</h3>
                            <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->

                            <activity-details-form :project="project" :regions="[]"></activity-details-form>

                            <button class="startProject primary" v-on:click="startProject">Starten</button>
                            <div v-if="project.name === 'Transkribieren'">
                                <button class="startProject secondary region-btn" v-on:click="startProjectRegion">Start
                                    für Ihre Region
                                </button>
                            </div>

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
  import { mapState } from 'vuex'
  import CommentsList from '@/components/comments-list.vue'
  import ActivityDetailsForm from '@/components/ActivityDetailsForm'

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
      CommentsList
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