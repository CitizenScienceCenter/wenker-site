<template>

    <app-content-section>
        <div class="content-wrapper">

            <div class="row">
                <div class="col">

                    <task-question-text :question="task.content.question"></task-question-text>

                    <task-response-text :responses="task.content.answers" :activeAnswerIndex="0"></task-response-text>

                    <div class="row">
                        <div class="col col-task-actions">
                            <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                            <button v-on:click="submitTask" class="button button-primary">{{nextTxt}}</button>
                        </div>
                    </div>

                    <comments-list :current_user="user" :comments="comments"></comments-list>
                    <help-popup :header="'Hilfen'" :info="task_help"></help-popup>

                </div>
            </div>

        </div>
    </app-content-section>

</template>

<script>
  import { mapState } from 'vuex'
  import HelpPopup from '@/components/help-popup'
  import CommentsList from '@/components/comments-list'
  import TaskQuestionText from '@/components/TaskQuestionText'
  import TaskResponseText from '@/components/TaskResponseText'
  import ContentSection from '@/components/shared/ContentSection.vue'

  export default {
    name: 'Task',
    components: {
      TaskQuestionText,
        TaskResponseText,
      'app-content-section': ContentSection,
      CommentsList,
      HelpPopup
    },
    computed: mapState({
      specialChars: state => state.consts.specialChars
    }),
    mounted() {
      console.log(this.comments)
    },
    data () {
      return {
        user: {},
        task_help: '',
        nextTxt: 'Next',
        comments: [{
            user: 'jfkdf',
            text: 'fhjkdfkjd'
        }],
        task: {
          info: {
            path: 'https://cdn.pixabay.com/photo/2018/10/01/20/38/meteora-3717220_1280.jpg'
          },
          content: {
            answers: [],
            question: {
              text: 'Question text',
              type: 'single_file'
            }
          }
        }
      }
    },
    methods: {
      endTask () {

      },
      submitTask () {

      }
    }
  }
</script>

<style scoped>

</style>
