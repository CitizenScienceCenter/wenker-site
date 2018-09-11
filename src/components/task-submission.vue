 <template>

  <div v-if="task">

    <section class="section-content">

      <project-info :stats="stats" v-if="project" :project_name="project.name"></project-info>

      <div class="content-wrapper">

        <div class="row">
          <div class="col col-title">
            <h3>{{task.content.question.text}}</h3>
            asfasdf
          </div>
        </div>

        <div class="row">
          <div class="col">

              <div v-if="items.length" >
                <div class="imageBox" style="width:200px;height:200px;overflow:hidden;">
                  <!-- <img v-for="src in items" :src="src" :key="src"> -->
                  <img src="@/assets/img/content/klassenzimmer.jpg" />
                </div>
              </div>
              <div>
                <div v-for="(answer, i) in task.content.answers" v-bind:key="i">
                  <upload v-if="answer.type.indexOf('file') !== -1" :embedded="true" :multiple="answer.type === 'multiple_files'"></upload>
                  <div v-if="answer.type === 'text'">
                    <label for="qutxt">{{answer.placeholder || task.content.question.text}}</label>
                    <input type="text" v-model="responses[i].text" name="qutxt" id="qutxt" />
                  </div>
                  <submission-multiple-choices :index="i" :content="responses[i]" :choices="answer.choices" :type="answer.type" v-if="answer.type === 'multiple_choice'"></submission-multiple-choices>
                </div>
                  <button v-on:click="submitTask" title="Take Part!">
                      Submit
                  </button>
              </div>


          </div>
        </div>

      </div>
    </section>

  </div>

</template>

<script>
import { mapState } from "vuex";
import Upload from "@/components/upload.vue"
import SubmissionMultipleChoices from "@/components/submission-multiple-choices.vue"
import ProjectInfo from "@/components/project-info.vue"

export default {
  name: "task-submission",
  props: ["task"],
  data() {
    return {
      items: [],
      responses: []
    }
  },
  components: { Upload, SubmissionMultipleChoices, ProjectInfo },
  computed: mapState({
    project: state => state.project.selectedProject,
    stats: state => state.project.selectedStats,
    loading: state => state.project.loading,
    submission: state => state.submission.submission,
    userId: state => state.user.user,
    taskMedia: state => state.media.media
  }),
  watch: {
    task(to, from) {
      if (to) {
        this.$store.dispatch("media/getMedia", this.task.id)
        this.responses = []
        for (let i = 0; i < to.content.answers.length; i++) {
          this.responses.push({text: ""})
        }
        this.createSubmission()
      }
    },
    taskMedia(to, from) {
      to.forEach(m => {
        console.log(this.task.id)
        console.log(m.source_id)
        const path = m.path.replace("./static", "http://localhost:8080/static");
        this.items.push(path);
      });
    }
  },
  methods: {
    createSubmission() {
      const submission = {
        user_id: this.$store.getters["user/id"],
        task_id: this.task.id,
        content: {}
      }
      this.$store.commit("submission/SET_SUBMISSION", submission)
    },
    submitTask() {
        this.$store.commit('submission/SET_SUBMISSION_RESPONSES', this.responses)
        this.$store.dispatch('submission/postSubmission').then(() => {
          this.$emit('submission')
          this.createSubmission()
        })
    }
  }
};
</script>
<style lang="scss" scoped>

.task-title {
  text-align: center;
}

.sub-card {
  margin-top: 5%;
}

.content {
  width: 90%;
}
</style>
