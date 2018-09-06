<template>
  <div>
  
    <div class="desc">
      <h1> Thank you! You are the {{ stats.contributor_count  | ordinal }} contributor! </h1>
    </div>

    <div class="share">
      <a href="https://twitter.com/home?status=Look%20at%20me!%20I%20just%20contributed%20to%20Citizen%20Science%20using%20C3S.%20So,%20yeah,%20I'm%20kind%20of%20a%20big%20deal%20now.">Tweet!</a>
    </div>

    <button class="" to="/">Home</button>
  </div>

</template>

<script>
import { mapState, mapGetters } from "vuex";
import ProjectInfo from "@/components/project-info.vue";
export default {
  name: "CompletedProject",
  props: ["projectID"],
  data() {
    return {
      userDetails: {
        age: undefined,
        canton: undefined
      }
    };
  },
  watch: {
    project(to, from) {
      if (to === null) {
        this.$router.push("/projects");
      }
    },
    tasks(to, from) {}
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
    this.$store.dispatch("project/getProject", [
      this.$route.params.id || this.projectID,
      true
    ]);
  },
  methods: {
    deleteProject() {
      this.$store.dispatch("project/deleteProject", this.project.id);
    },
    startProject() {
      if (this.tasks.length > 0) {
        this.$router.push({
          name: "Submission",
          params: { tid: this.tasks[0].id, id: this.project.id }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/project/view.scss'>
</style>
