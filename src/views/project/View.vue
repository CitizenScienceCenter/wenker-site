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
            <p v-if="project.name === 'Transkribieren'">Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!</p>
            <p v-if="project.name === 'Übersetzen'">Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.</p>
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
                      <span class="error" v-if="errors.canton">Ihre Region ist erforderlich</span>
                    </div>
                </div>
                <div v-bind:class="{'invalid': !userDetails.age}" class="form-field">
                  <label>Alter</label>
                  <div class="select-wrapper">
                    <select v-model="userDetails.age" name="range" id="range" placeholder="Age Range">
                        <option :key="a.value" v-for="a in ageRange" :value="a.value">{{a.label}}</option>
                    </select>
                    <span class="error" v-if="errors.age">Ihre Altersgruppe ist erforderlich</span>
                  </div>
                </div>
              </div>

              <button class="startProject primary" v-on:click="startProject">Starten</button>

            </div>

            <div class="form-section">
              <h4>Sie haben sich schon registiert?</h4>
              <router-link to="/welcome" tag="button" class="secondary">Registieren</router-link>
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
      errors: {
        canton: false,
        age: false
      }
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
    },
    '$route.params.id' (to, from) {
      console.log(to)
      this.$store.dispatch('project/getProject', [to || this.projectID, false])
      if (this.user && this.user.info && this.user.info.age) {
        this.userDetails = Object.assign({}, this.user.info)
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
    this.$store.dispatch('project/getProject', [this.$route.params.id || this.projectID, false]).then(p => {
      console.log(p.id)
    })
    if (this.user && this.user.info && this.user.info.age) {
      this.userDetails = this.user.info
    }
  },
  methods: {
    deleteProject() {
      //this.$store.dispatch('project/deleteProject', this.project.id)
    },
    startProject() {
      if(this.userDetails.age && this.userDetails.canton) {
        console.log(this.user)
        this.$store.dispatch('user/updateUser', [this.user.id, {info: this.userDetails}]).then(res => {
          console.log(this.project)
          if (this.project.info && this.project.info.task_selection === "linear") {
            this.$store.dispatch('project/getTasks', [this.project.id, 1, this.progress]).then(tasks => {
              console.log(tasks)
              this.$router.push({'name': 'Submission', 'params': {tid: this.tasks[0].id, id: this.project.id}})
            })
          } else {
            this.$store.dispatch('task/randomProjectTask', [this.project.id, this.userDetails.canton]).then(task => {
              this.$router.push({'name': 'Submission', 'params': {tid: task.id, id: this.project.id}})
            })
          }
        })
      } else {
        this.errors.age = this.userDetails.age === undefined
        this.errors.canton = this.userDetails.canton === undefined
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>
</style>
