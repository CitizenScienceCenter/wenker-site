 <template>
 
  <div class="content" v-if="task">
    

      <div class="md-layout-item md-layout md-gutter">
        
        <!-- TODO conditional sizing -->
        <md-card class="sub-card md-layout-item" :class="{'md-class-40': 'items.length > 0', 'md-class-60': 'items.length === 0'}">
          <md-icon></md-icon>
          <md-card v-for="(answer, i) in task.content.answers" v-bind:key="i">
            <upload v-if="answer.type.indexOf('file') !== -1" :embedded="true" :multiple="answer.type === 'multiple_files'"></upload>
            <md-field v-if="answer.type === 'text'">
              <label for="qutxt">{{task.content.question.text}}</label>
              <md-input type="text" v-model="content.text" @keyup="handleText" name="qutxt" id="qutxt" />
            </md-field>
            <submission-multiple-choices :choices="answer.choices" :type="answer.type" v-if="answer.type === 'multiple_choice'"></submission-multiple-choices>
          </md-card>
           <md-card-actions>
            <md-button :to="{name:'TakePart', params: {id: task.id}}" class="smd-list-action" title="Take Part!">
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
  name: "project-filter",
  data() {
    return {
      items: [],
      content: {
        text: ""
      }
    };
  },
  computed: mapState({
    loading: state => state.project.loading,
    userId: state => state.user.user,
    
  }),
  watch: {
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
</style>

