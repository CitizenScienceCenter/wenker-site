<template>
  <div>
    <div class="">
      <project-info :stats="stats" :project_name="project.name" :img="media[0]"></project-info>
      <!-- TODO add progress bar here -->
      <!-- <div md-mode="determinate" :md-value="(activeTaskIndex / tasks.length) * 100"></div> -->
      <task-submission :task=activeTask :content=content></task-submission>
    </div>
    <div v-html="project.description"></div>
    <button v-on:click="takePart" v-if="tasks.length > 0">{{msgText}}</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaskSubmission from "@/components/task-submission.vue";
import ProjectInfo from "@/components/project-info.vue";
export default {
  name: "Participate",
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
  components: { TaskSubmission, ProjectInfo },
  computed: mapState({
    project: state => state.project.selectedProject,
    media: state => state.project.selctedMedia,
    stats: state => state.project.selectedStats,
    tasks: state => state.task.tasks,
    submission: state => state.submission.submission,
    loading: state => state.settings.loading
  }),
  watch: {
    "$route.params.tid": function(tid) {
      //this.handleTask();
    }
  },
  mounted() {
    console.log(this.$route)
    this.activeTaskIndex = 0;
    //this.handleTask();
  },
  updated() {
    if (this.activeTaskIndex >= this.tasks.length -1) {
      this.msgText = "Finished";
      this.activeTaskIndex = this.tasks.length;
    } else if (this.activeTaskIndex === 0) {
      this.msgText = `Let's Go`;
    }
    //  else {
    //   this.msgText = `Next Task`;
    // }
  },
  methods: {
    handleTask(index) {
      console.log(this.$route)
      const id = this.$route.params.id;
      const tid = this.$route.params.tid;
      this.$store.dispatch("project/getProject", [id, true]);
      this.activeTask = this.tasks.find(task => {
        return task.id === tid;
      });
      this.activeTaskIndex = this.tasks.findIndex(task => {
        return task.id === tid;
      })
      if (this.activeTask) {
        this.createSubmission();
      }
      console.log(this.activeTaskIndex)
    },
    takePart() {
      const id = this.$route.params.id;
      const tid = this.tasks[0].id;
      if (this.$route.params.tid === undefined) {
        this.$router.push({
          name: "Submission",
          params: { id: id, tid: tid }
        });
      } else if (this.activeTaskIndex + 1 < this.tasks.length) {
        console.log(this.activeTaskIndex, this.tasks)
        const tid = this.tasks[this.activeTaskIndex + 1].id;
        // TODO handle validation here or in store actions
        this.$store.dispatch("submission/postSubmission", this.submission);
        this.$router.push(`/projects/${id}/participate/${tid}`);
      } else {
        // TODO load finished page
        this.$store.dispatch("submission/postSubmission", this.submission);
        this.$store.commit("upload/SET_ID", null);
        this.$router.push(`/projects/${id}`);
      }
    },
    createSubmission() {
      // if (this.activeTaskIndex !== this.tasks.length) {
      //   console.log(this.submisson.content)
      if(this.activeTask) {
        const submission = {
          user_id: this.$store.getters["user/id"],
          task_id: this.activeTask.id,
          content: {}
        }
        this.$store.commit("submission/SET_SUBMISSION", submission)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 10%;
}
.stats {
  background-color: red;
  color: white;
}
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
