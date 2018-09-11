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
          <div class="col col-text">
            <p>1700 Bögen Schweizer Wenkersätze / die Antworten sind handgeschrieben vor 100 Jahren / nicht maschinell lesbar sind / Helfen Sie mit bei deren Digitalisierung</p>
          </div>
        </div>

        <div class="row">
          <div class="col col-form">

            <div class="form-section">

              <h3>Ihre Angaben</h3>
              <!-- <div class="desc" v-if="project && project.description" v-html="project.description"></div> -->

              <div class="prereq">
                <div v-bind:class="{'invalid': !userDetails.canton}" class="form-field">
                    <label>Region Ihres Dialekts</label>
                    <div class="select-wrapper">
                      <select v-model="userDetails.canton" name="canton" id="canton" placeholder="Region you have spent most of your life">
                          <option :key="r.value" v-for="r in swissCantons" :value="r.value">{{r.label}}</option>
                      </select>
                    </div>
                    <span class="error" v-if="!userDetails.canton">Your region is required</span>
                </div>
                <div v-bind:class="{'invalid': !userDetails.age}" class="form-field">
                  <label>Alter</label>
                  <div class="select-wrapper">
                    <select v-model="userDetails.age" name="range" id="range" placeholder="Age Range">
                        <option :key="a.value" v-for="a in ageRange" :value="a.value">{{a.label}}</option>
                    </select>
                  </div>
                  <span class="error" v-if="!userDetails.age">Your age range is required</span>
                </div>
              </div>

              <button class="startProject primary" v-on:click="startProject">Starten</button>

            </div>

            <div class="form-section">
              <h4>Sie haben sich schon registiert?</h4>
              <router-link to="/login" tag="button" class="secondary">Anmelden</router-link>
            </div>

          </div>
        </div>
      </div>

    </section>

  </div>

</template>

<script>
import { mapState, mapGetters } from "vuex"
import Tutorial from '@/components/tutorial.vue'
import ProjectInfo from "@/components/project-info.vue";
export default {
  name: "ViewProject",
  props: ["projectID"],
  data() {
    return {
      userDetails: {
        age: undefined,
        canton: undefined
      },
    }
  },
  watch: {
    'project'(to, from) {
      if (to === null) {
        this.$router.push('/projects')
      }
    },
    'tasks' (to, from) {
    },
    'userDetails.age' (to, from) {
      console.log(to)
    },
    '$route.params.id' (to, from) {
      this.$store.dispatch('project/getProject', [to || this.projectID, true]).then(res => {
       console.log(res.body)
      })
      if (this.user && this.user.info && this.user.info.age) {
        this.userDetails = this.user.info
      }
    }
  },
  components: {
    Tutorial, ProjectInfo
  },
  computed: mapState({
    project: state => state.project.selectedProject,
    loading: state => state.settings.loading,
    user: state => state.user.currentUser,
    tasks: state => state.project.selectedTasks,
    stats: state => state.project.selectedStats,
    swissCantons: state => state.consts.swissCantons,
    ageRange: state => state.consts.ageRange,
    route: state => state.route
  }),
  mounted() {
    this.$store.dispatch('project/getProject', [this.$route.params.id || this.projectID, true])
    if (this.user && this.user.info && this.user.info.age) {
      this.userDetails = this.user.info
    }
  },
  methods: {
    deleteProject() {
      //this.$store.dispatch('project/deleteProject', this.project.id)
    },
    startProject() {
 /*     console.log(this.project.info.task_selection)
      if (this.project.info && this.project.info.task_count > 1 && this.project.info.task_selection === "random") {
        this.$store.dispatch('task/randomProjectTask', [this.project.id, this.userDetails.canton]).then(task => {
          this.$router.push({'name': 'Submission', 'params': {tid: task.id, id: this.project.id}})
        })
      } else if (this.tasks.length > 0) {
        //TODO only update if not saved in user*/
        console.log(this.tasks)
         this.$store.dispatch('user/updateUser', [this.user.id, {info: this.userDetails}]).then(res => {
           console.log(res)
           this.$router.push({'name': 'Submission', 'params': {tid: this.tasks[0].id, id: this.project.id}})
         })
      //}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>
</style>
