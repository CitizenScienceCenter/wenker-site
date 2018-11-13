<template>
  <div>
    <div class="">
      <!-- <project-info v-if="project" :stats="stats" :project_name="project.name" :img="media[0]"></project-info> -->
      <!-- TODO add progress bar here -->
      <!-- <div md-mode="determinate" :md-value="(activeTaskIndex / tasks.length) * 100"></div> -->
      <!-- <task-submission :task=activeTask :content=content></task-submission> -->
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
  name: "RegionParticipate",
  data() {
    return {
      pid: undefined,
      userID: undefined,
      content: undefined,
      activeTaskIndex: undefined,
      activeTask: undefined,
      msgText: "Let's Go",
    };
  },
  components: { TaskSubmission, ProjectInfo },
  computed: mapState({
    project: state => state.project.selectedProject,
    media: state => state.project.selctedMedia,
    stats: state => state.project.selectedStats,
    tasks: state => state.task.tasks,
    submission: state => state.submission.submission,
    loading: state => state.settings.loading,
    user: state => state.user.currentUser
  }),
  watch: {
    "$route.query.task": function(tid) {
      this.handleTask()
    }
  },
  mounted() {
    this.activeTaskIndex = this.$route.query.task || 0
    console.log(this.media)
    this.handleTask()
  },
  updated() {
    // if (this.activeTaskIndex >= this.tasks.length -1) {
    //   this.msgText = "Finished";
    //   this.activeTaskIndex = this.tasks.length;
    // } else if (this.activeTaskIndex === 0) {
    //   this.msgText = `Let's Go`;
    // }
  },
  methods: {
    handleTask(index) {
      const id = this.$route.params.id;
      const region = this.user['info']['canton']
      this.activeTask = this.$store.dispatch("task/getTaskRegion", [id, region]);
      // TODO enable when in prod
      // this.createSubmission();
    },
    takePart() {
      const id = this.$route.params.id;
      this.$store.dispatch("submission/postSubmission", this.submission);
      this.$store.commit("upload/SET_ID", null);
      
      this.$router.push({name: 'TranscribeProjectByRegion', params: {id: id}, query: {task: this.activeTaskIndex++}})

    },
    createSubmission() {
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
</style>
