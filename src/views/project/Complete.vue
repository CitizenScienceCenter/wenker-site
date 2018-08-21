<template>
  <div class="md-layout md-gutter md-alignment-top-space-between">
    <md-card class="img-card md-layout-item md-size-100">
      <md-card-media-cover md-text-scrim>
        <md-card-media md-medium class="banner">
          <img src="@/assets/img/wenker-banner.jpg">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{project.name}}</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <md-card class="stats md-primary md-layout-item md-size-30">
      <md-card-header>
        <span class="md-title">{{stats.task_count}} Tasks </span>
        <!-- <span class="md-subhead"> Tasks</span> -->
      </md-card-header>
    </md-card>
    <md-card class="stats md-primary md-layout-item md-size-30" v-if="tasks">
      <md-card-header>
        <span class="md-title">{{stats.contributor_count}} Contributors </span>
        <!-- <span class="md-subhead">Contributions</span> -->
      </md-card-header>
    </md-card>
    <md-card class="stats md-primary md-layout-item md-size-30" v-if="tasks">
      <md-card-header>
        <span class="md-title">{{ stats.submission_count }} Submissions </span>
        <!-- <span class="md-subhead">Volunteers</span> -->
      </md-card-header>
    </md-card>
    <md-card class="desc md-layout-item md-size-100">
      <h1> Thank you! You are the {{ stats.contributor_count  | ordinal }} contributor! </h1>
    </md-card>

    <md-card class="share md-layout-item md-size-40">
      <a href="https://twitter.com/home?status=Look%20at%20me!%20I%20just%20contributed%20to%20Citizen%20Science%20using%20C3S.%20So,%20yeah,%20I'm%20kind%20of%20a%20big%20deal%20now."><md-icon>share</md-icon></a>
      <md-icon>share</md-icon>
      <md-icon>camera</md-icon>
    </md-card>

    <button class="md-fab md-primary md-fab-bottom-right" to="/"><md-icon>home</md-icon></button>
    </div>

</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  name: "CompletedProject",
  props: ["projectID"],
  data() {
    return {
      userDetails: {
        age: undefined,
        canton: undefined
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
    }
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
  },
  methods: {
    deleteProject() {
      this.$store.dispatch('project/deleteProject', this.project.id)
    },
    startProject() {
      if (this.tasks.length > 0) {
        this.$router.push({'name': 'Submission', 'params': {tid: this.tasks[0].id, id: this.project.id}})
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>

</style>
