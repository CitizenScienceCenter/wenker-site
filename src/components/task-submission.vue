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
            <div>{{task_type}} {{progress + 1}} von {{totalTasks}}</div>
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
                        :show-loading="true"
                        :loading-size="100"
                        :zoom-speed="5"
                        :placeholder="' '"
                        :accept="'image/*'"
                        :initial-image="img"
                        initial-position="top left"
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
                    <!-- <label for="qutxt">{{answer.placeholder || task.content.question.text}}</label> -->
                    <label for="qutxt">{{answer.placeholder || "In Ihrem Dialekt"}}</label>
                    <input type="text" v-on:focus="focus(i)" v-on:keyup="changeNext" v-model="responses[i].text" name="qutxt" id="qutxt" />
                  </div>
                  <submission-multiple-choices :index="i" :content="responses[i]" :choices="answer.choices" :type="answer.type" v-if="answer.type === 'multiple_choice'"></submission-multiple-choices>
                </div>
              </div>
              <div class="special-characters">
                <label>Sonderzeichen</label>
                <button v-on:click="insertChar(char)" :key="char" v-for="char in specialChars">{{char}}</button>
              </div>

            </div>

          </div>
        </div>

        <div class="row">
          <div class="col col-task-actions">
            <!-- <button v-on:click="submitTask" class="secondary">Vorheriger ***</button> -->
            <button v-on:click="endTask" class="secondary">Beenden</button>
            <button v-on:click="submitTask" class="primary">{{nextTxt}}</button>
          </div>
        </div>

        <div v-if="project.name === 'Transkribieren'" class="row">
          <div class="col col-text col-transcription-rules">
            <h4>Transkriptionskonventionen</h4>
            <ul>
              <li>Ein vermuteter Wortlaut wird in eckigen Klammern [] geschrieben, z. B. [T]ue das mache...</li>
              <li>Wenn ein Wort oder ein Buchstabe nicht entziffert werden kann, wird folgender Platzhalter eingefügt: [...]</li>
              <li>Falls ein Wort nicht vollständig entziffert werden kann, kann folgender Platzhalter eingefügt werden: [unvollst.]</li>
              <li>Grundsatz: Die Transkription soll möglichst nahe am Original sein!</li>
              <li>Alle Sonderzeichen sollten transkribiert werden! (Falls nicht möglich, siehe FAQs).</li>
              <li>Kommentare können Sie in dem Kommentarfeld hinterlassen.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

  </div>

</template>

<script>
import { mapState, mapGetters } from "vuex";
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
      nextTxt: "Überspringen",
      croppaSettings: {},
      focussed: undefined,
      task_type: 'Bogen'
    }
  },
  components: { Upload, SubmissionMultipleChoices, ProjectInfo },
  computed: {
    ...mapState({
      project: state => state.project.selectedProject,
      stats: state => state.project.selectedStats,
      loading: state => state.project.loading,
      submission: state => state.submission.submission,
      taskMedia: state => state.media.media,
      user: state => state.user.currentUser,
      progress: state => state.user.taskProgress,
      specialChars: state => state.consts.specialChars
    }),
    ...mapGetters({
    })
  },
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
        const path = m.path.replace("./static",  'http://' + process.env.HOST + "/static");
        this.img = path
        console.log(path)
        if (this.croppaSettings.refresh) {
          this.croppaSettings.refresh()
        }
      }
    },
  },
  mounted() {
    this.$store.dispatch("media/getMedia", this.task.id)
    if (this.project.name === 'Übersetzen') {
      this.task_type = 'Satz'
    }
    this.responses = []
    for (let i = 0; i < this.task.content.answers.length; i++) {
      this.responses.push({text: ""})
    }
    this.createSubmission()
  },
  methods: {
    createSubmission() {
      const submission = {
        user_id: this.user.id,
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
    },
    changeNext() {
      // TODO could check if all responses are empty
      for (let i = 0; i < this.responses.length; i++) {
        const t = this.responses[i]['text']
        if (t.length !== 0) {
          this.nextTxt = "Nächster"
          return
        }
      }
      this.nextTxt = "Überspringen"
    },
    insertChar(char) {
      this.responses[this.focussed].text += char
    },
    focus (i) {
      this.focussed = i
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
