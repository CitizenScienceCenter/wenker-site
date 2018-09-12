 <template>

  <div v-if="task">

    <section class="section-content">

      <div class="content-wrapper">

        <div class="row">
          <div class="col col-title">
            <project-info :stats="stats" v-if="project" :project_name="project.name"></project-info>
          </div>
        </div>

        <div class="row">
          <div class="col col-subtitle">
            <h4>{{task.content.question.text}}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col col-text col-progress">
            <div>Task {{progress + 1}} von {{totalTasks}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col">

            <div class="task-box">

              <div class="image-browser-frame">
                <div v-if="img" class="image-browser">
                  <croppa v-model="croppaSettings" canvas-color="transparent"
                        :prevent-white-space="true"
                        :show-remove-button="false"
                        :accept="'image/*'"
                        :placeholder="'Bild wird nicht geladen'"
                        :initial-image="img"
                        auto-sizing>
                  </croppa>

                  <button @click="zoom(true)" class="primary zoom zoom-in"><img src="@/assets/img/icons/plus.svg"></button>
                  <button @click="zoom(false)" class="primary zoom zoom-out"><img src="@/assets/img/icons/minus.svg"/></button>
                </div>
              </div>
              <div class="form" v-if="responses.length">
                <div v-for="(answer, i) in task.content.answers" v-bind:key="i">
                  <upload v-if="answer.type.indexOf('file') !== -1" :embedded="true" :multiple="answer.type === 'multiple_files'"></upload>
                  <div v-if="answer.type === 'text'" class="form-field">
                    <label for="qutxt">{{answer.placeholder || task.content.question.text}}</label>
                    <input type="text" v-model="responses[i].text" name="qutxt" id="qutxt" />
                  </div>
                  <submission-multiple-choices :index="i" :content="responses[i]" :choices="answer.choices" :type="answer.type" v-if="answer.type === 'multiple_choice'"></submission-multiple-choices>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="row">
          <div class="col col-task-actions">
            <!-- <button v-on:click="submitTask" class="secondary">Vorheriger ***</button> -->
            <button v-on:click="endTask" class="secondary">Beenden</button>
            <button v-on:click="submitTask" class="primary">Nächster</button>
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
  props: ["task", "totalTasks"],
  data() {
    return {
      items: [],
      responses: [],
      img: undefined,
      croppaSettings: {}
    }
  },
  components: { Upload, SubmissionMultipleChoices, ProjectInfo },
  computed: mapState({
    project: state => state.project.selectedProject,
    stats: state => state.project.selectedStats,
    loading: state => state.project.loading,
    submission: state => state.submission.submission,
    taskMedia: state => state.media.media,
    user: state => state.user.currentUser,
    progress: state => state.user.taskProgress
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
    taskMedia (to, from) {
      if (to.length > 0) {
        const m = to[0]
        const path = m.path.replace("./static", "http://172.23.52.127:8080/static");
        this.img = path
        if (this.croppaSettings.refresh) {
          this.croppaSettings.refresh()
        }
      }
    }
  },
  mounted() {
    this.$store.dispatch("media/getMedia", this.task.id)
    this.responses = []
    for (let i = 0; i < this.task.content.answers.length; i++) {
      this.responses.push({text: ""})
    }
    this.createSubmission()
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
    },
    endTask() {
      this.$store.dispatch('submission/postSubmission').then(() => {
        this.$router.push({'name': 'CompletedProject', 'params': {id: this.project.id}})
      })
    },
    zoom(inFlag) {
      if (inFlag) {
        this.croppaSettings.zoomIn()
      } else {
        this.croppaSettings.zoomOut()
      }
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
