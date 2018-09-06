 <template>
 
  <div class="content" v-if="task">
    
      
        <div class="task-title">
            <span class="featured-title md-title"><b>{{task.content.question.text}}</b></span>
        </div>
      <div class="">
        <!-- TODO left align -->
        <div v-if="items.length" > 
           <viewer :images="items">
              <img v-for="src in items" :src="src" :key="src">
            </viewer>
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
    
</template>

<script>
import { mapState } from "vuex";
import Upload from "@/components/upload.vue"
import SubmissionMultipleChoices from "@/components/submission-multiple-choices.vue"

export default {
  name: "task-submission",
  props: ["task"],
  data() {
    return {
      items: [],
      responses: []
    }
  },
  components: { Upload, SubmissionMultipleChoices },
  computed: mapState({
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
