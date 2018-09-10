<template>
  <div>

    <section class="section-content">
asdf
      <project-info :stats="stats" :project_name="project.name"></project-info>

      <div class="row">
        <div class="col">

          <!-- This loads the project description using the `v-html` tag -->
          <div class="desc" v-if="project && project.description" v-html="project.description"></div>

        </div>
      </div>


      <div class="row">
        <div class="col">

          <div class="prereq">
            <div v-bind:class="{'invalid': !userDetails.canton}">
                <select v-model="userDetails.canton" name="canton" id="canton" placeholder="Region you have spent most of your life">
                    <option :key="r.value" v-for="r in swissCantons" :value="r.value">{{r.label}}</option>
                </select>
                <span class="error" v-if="!userDetails.canton">Your region is required</span>
            </div>
            <div v-bind:class="{'invalid': !userDetails.age}">
                <select v-model="userDetails.age" name="range" id="range" placeholder="Age Range">
                    <option :key="a.value" v-for="a in ageRange" :value="a.value">{{a.label}}</option>
                </select>
                <span class="error" v-if="!userDetails.age">Your age range is required</span>
            </div>
          </div>

          <button class="startProject" v-on:click="startProject">Start Project</button>

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
    ageRange: state => state.consts.ageRange
  }),
  mounted() {
    this.$store.dispatch('project/getProject', [this.$route.params.id || this.projectID, true])
    console.log(this.user.api_key)
    console.log(JSON.stringify(this.user))
    if (this.user && this.user.info && this.user.info.age) {
      this.userDetails = this.user.info
    }
  },
  methods: {
    deleteProject() {
      this.$store.dispatch('project/deleteProject', this.project.id)
    },
    startProject() {

      if (this.tasks.length > 0) {

        this.$store.dispatch('user/updateUser', [this.user.id, {info: this.userDetails}]).then(res => {
          console.log(res)
          this.$router.push({'name': 'Submission', 'params': {tid: this.tasks[0].id, id: this.project.id}})
        })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>
</style>
