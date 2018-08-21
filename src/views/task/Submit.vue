
<template>
  <div class="md-layout md-gutter md-alignment-center-space-around">
    <md-progress-bar md-mode="determinate" :md-value="(activeTaskIndex / tasks.length) * 100"></md-progress-bar>
    <task-submission :task=activeTask :content=content v-on:submission="progressAfterSubmission"></task-submission>
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
      this.loadTask()
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
    this.loadTask()
  },
  updated() {
  },
  methods: {
    loadTask() {
      // TODO do not need to load all tasks each request, keep them in store once retrieved
      if (this.tasks.length && this.tasks[0].project_id !== this.project.id) {
        this.$store.dispatch("project/getProject", [this.$route.params.id, true])
      }
      if (this.activeTaskIndex >= this.tasks.length -1) {
        this.msgText = "Finished";
        this.activeTaskIndex = this.tasks.length;
      } else if (this.activeTaskIndex === 0) {
        this.msgText = `Let's Go`;
      }
      for(let i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].id == this.$route.params.tid) {
              this.activeTask = this.tasks[i]
              this.activeTaskIndex = i
              break
          }
      }
    },
    progressAfterSubmission() {
      if (this.activeTaskIndex + 1 >= this.tasks.length) {
        this.$router.push({'name': 'CompletedProject', 'params': {id: this.project.id}})
        console.log('finished')
      } else {
        this.$router.push({'name': 'Submission', 'params': {tid: this.tasks[this.activeTaskIndex + 1].id, id: this.project.id}})
      }
    }
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
