<template>
  <div>

    <section class="section-content">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-title">

            <div class="desc">
              <h2> Thank you! You are the {{ stats.contributor_count  | ordinal }} contributor! </h2>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col col-form">

            <div class="form-section">
              <h3 class="title">{{ $t("views.user.register") }}</h3>
              <register-form></register-form>
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col col-form">

            <router-link to="/"><button class="secondary">Zurück zur Startseite</button></router-link>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ProjectInfo from "@/components/project-info.vue"
import RegisterForm from "@/components/register-form.vue"
export default {
  name: "CompletedProject",
  props: ["projectID"],
  data() {
    return {
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
  components: {
    RegisterForm
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
