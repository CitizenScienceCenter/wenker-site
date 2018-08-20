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
    <md-card class="desc md-layout-item md-size-100" v-html="project.description"></md-card>

    <md-card class="prereq md-layout-item md-size-100" v-if="project.name === 'Wenker - Translation'">
      <md-field>
        <md-select v-model="userDetails.canton" name="canton" id="canton" placeholder="Region you have spent most of your life">
          <md-option :key="r.value" v-for="r in swissCantons" value="r.value">{{r.label}}</md-option>
        </md-select>
      </md-field>
      <md-field>
        <md-select v-model="userDetails.age" name="range" id="range" placeholder="Age Range">
          <md-option :key="a.value" v-for="a in ageRange" value="a.value">{{a.label}}</md-option>
        </md-select>
      </md-field>
    </md-card>

    <button class="md-fab md-primary md-fab-bottom-right" v-on:click="startProject"><md-icon>playlist_play</md-icon></button>
    </div>

</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  name: "ViewProject",
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
