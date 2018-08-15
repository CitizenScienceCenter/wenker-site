
<template>
  <div class="md-layout md-gutter md-alignment-center-space-around">
    <md-progress-bar md-mode="determinate" :md-value="(activeTaskIndex / tasks.length) * 100"></md-progress-bar>
    <task-submission :task=activeTask :content=content></task-submission>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaskSubmission from "@/components/task-submission.vue";
export default {
  name: "Submit",
  data() {
    return {
      pid: undefined,
      userID: undefined,
      content: undefined,
      activeTaskIndex: undefined,
      activeTask: undefined,
      msgText: "Let's Go"
    };
  },
  components: { TaskSubmission },
  computed: mapState({
    project: state => state.project.selectedProject,
    media: state => state.project.selctedMedia,
    stats: state => state.project.selectedStats,
    tasks: state => state.project.selectedTasks,
    submission: state => state.submission.submission,
    loading: state => state.settings.loading
  }),
  watch: {
    "$route.params.tid": function(tid) {
    },
    'tasks' (to, from) {
        for(let i = 0; i < to.length; i++) {
            if (to[i].id == this.$route.params.tid) {
                this.activeTask = to[i]
                this.activeTaskIndex = i
                break
            }
        }
    }
  },
  mounted() {
    this.$store.dispatch("project/getProject", this.$route.params.id, true)
  },
  updated() {
    if (this.activeTaskIndex >= this.tasks.length -1) {
      this.msgText = "Finished";
      this.activeTaskIndex = this.tasks.length;
    } else if (this.activeTaskIndex === 0) {
      this.msgText = `Let's Go`;
    }
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.title-card {
  text-align: center;
}
.btn-wrapper {
  text-align: center;
  .md-button {
    position: relative;
    left: 50%;
  }
}
</style>
