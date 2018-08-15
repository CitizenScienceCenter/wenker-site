 <template>
 
  <div class="content" v-if="task">
    
      
        <md-card class="task-title md-layout-item md-size-100">
          <md-card-header>
            <div class="featured-title md-title"><b>{{task.content.question.text}}</b></div>
        </md-card-header> 
        </md-card>
      <div class="md-layout-item md-layout md-gutter">
        <md-card v-if="items.length"  class="md-layout-item sub-card md-size-60"> 
           <viewer :images="items">
              <img v-for="src in items" :src="src" :key="src">
            </viewer>
          <!-- <featured-carousel class="featured-carousel" :items=items v-if="items.length > 0"></featured-carousel>                 -->
        </md-card>
        <!-- TODO conditional sizing -->
        <md-card class="sub-card md-layout-item" :class="{'md-class-40': 'items.length > 0', 'md-class-60': 'items.length === 0'}">
          <md-icon></md-icon>
          <md-card v-for="(answer, i) in task.content.answers" v-bind:key="i">
            <upload v-if="answer.type.indexOf('file') !== -1" :embedded="true" :multiple="answer.type === 'multiple_files'"></upload>
            <md-field v-if="answer.type === 'text'">
              <label for="qutxt">{{answer.placeholder || task.content.question.text}}</label>
              <md-input type="text" v-model="responses[i].text" name="qutxt" id="qutxt" />
            </md-field>
            <submission-multiple-choices :index="i" :content="responses[i]" :choices="answer.choices" :type="answer.type" v-if="answer.type === 'multiple_choice'"></submission-multiple-choices>
          </md-card>
           <md-card-actions>
            <md-button v-on:click="submitTask" class="md-list-action" title="Take Part!">
                Submit
            </md-button> 
          </md-card-actions>
          
        </md-card>

      </div>
  </div>
    
</template>

<script>
import { mapState } from "vuex";
import Upload from "@/components/upload.vue";
import FeaturedCarousel from "@/components/featured-carousel.vue";
import SubmissionMultipleChoices from "@/components/submission-multiple-choices.vue";

export default {
  name: "task-submission",
  props: ["task"],
  data() {
    return {
      items: [],
      responses: []
    }
  },
  components: { Upload, SubmissionMultipleChoices, FeaturedCarousel },
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
        for (let i = 0; i < to.content.answers.length; i++) {
          this.responses.push({text: ""})
        }
        this.createSubmission()  
      }
    },
    taskMedia(to, from) {
      to.forEach(m => {
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
        this.$store.dispatch('submission/postSubmission')
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
