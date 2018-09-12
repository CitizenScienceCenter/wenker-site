
<template>
  <div>
    <!-- TODO add progress bar here -->
    <!-- <md-progress-bar md-mode="determinate" :md-value="(activeTaskIndex / tasks.length) * 100"></md-progress-bar> -->
    <!-- <tutorial :data="tutData" :options="opts"></tutorial> -->
    <task-submission v-if="activeTask" :totalTasks="totalTasks" :task=activeTask :content=content v-on:submission="progressAfterSubmission"></task-submission>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaskSubmission from "@/components/task-submission.vue"
import Tutorial from '@/components/tutorial.vue'
export default {
  name: "Submit",
  data() {
    return {
      pid: undefined,
      userID: undefined,
      content: undefined,
      activeTaskIndex: undefined,
      totalTasks: 0,
      activeTask: undefined,
      msgText: "Let's Go",
      opts: { // TODO add to store
        esc: true,
        backdrop: true,
        open: false,
        closeLast: true // only enable the close button when it is the last one
      },
      tutData: [
        {
          header: 'Welcome!',
          subheader: 'to the Translation project',
          content: 'In this project, you will need to translate a number of different sentences from their original German meaning to Swiss German now'
        },
        {
          header: 'How?',
          subheader: "Let's go through the basics",
          content: "Take a look at the images and choose a sentence"
        }
      ]
    };
  },
  components: { TaskSubmission, Tutorial },
  computed: mapState({
    project: state => state.project.selectedProject,
    media: state => state.project.selctedMedia,
    stats: state => state.project.selectedStats,
    tasks: state => state.project.selectedTasks,
    submission: state => state.submission.submission,
    loading: state => state.settings.loading,
    user: state => state.user.currentUser,
    progress: state => state.user.taskProgress,
  }),
  watch: {
    "$route.params.tid": function(tid) {
      this.loadTask()
    },
    'tasks' (to, from) {
      this.getTaskIndex(to)
    },
    'project' (to, from) {
      if (to.info) {
        this.totalTasks = to.info.task_count
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
      this.$store.dispatch("project/getProject", [this.$route.params.id, false]).then(p => {
        if(p.info && p.info.task_selection === "linear") {
          if (this.progress >= this.totalTasks) {
            this.msgText = "Finished";
            this.activeTaskIndex = this.tasks.length;
            this.store.commit('user/SET_TASK_PROGRESS', this.totalTasks)
          } else if (this.user.taskProgress === 0) {
            this.msgText = `Let's Go`;
          }
          this.getTaskIndex(this.tasks)
        } else {
          this.$store.dispatch('task/getTask', this.$route.params.tid).then(t => {
            this.activeTask = t
          })
        }
      })
    },
    progressAfterSubmission() {
      if (this.progress + 1 >= this.totalTasks) {
        this.$router.push({'name': 'CompletedProject', 'params': {id: this.project.id}})
        console.log('finished')
      } else {
        if(this.project.info.task_selection = "random") {
          this.$store.dispatch('task/randomProjectTask', [this.project.id, this.user.info.canton]).then(task => {
            this.$router.push({'name': 'Submission', 'params': {tid: task.id, id: this.project.id}})
          })
        } else {
          this.$router.push({'name': 'Submission', 'params': {tid: this.tasks[this.activeTaskIndex + 1].id, id: this.project.id}})
        }
        // TODO handle task count to stop at x
      }
    },
    getTaskIndex(tasks) {
      for(let i = 0; i < tasks.length; i++) {
          if (tasks[i].id == this.$route.params.tid) {
              this.activeTask = tasks[i]
              this.activeTaskIndex = i
              if (this.activeTaskIndex === 0) {
                this.opts.open = true
              }
              break
          }
      }
    }
  },
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
