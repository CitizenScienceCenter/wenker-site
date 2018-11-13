<template>

    <div>

        <task-question-text :question="task.content.question"></task-question-text>

        <task-response :responses="task.content.answers"></task-response>

        <div class="row">
            <div class="col col-task-actions">
                <button v-on:click="endTask" class="secondary">Beenden</button>
                <button v-on:click="submitTask" class="primary">{{nextTxt}}</button>
            </div>
        </div>

        <comments-list :current_user="user" :comments="comments"></comments-list>

        <help-popup :header="'Hilfen'" :info="task_help"></help-popup>

    </div>

</template>

<script>
  import { mapState } from 'vuex'
  import HelpPopup from '@/components/help-popup'
  import CommentsList from '@/components/comment'
  import TaskQuestionText from '@/components/TaskQuestionText'
  import TaskResponse from '@/components/TaskResponse'

  export default {
    name: 'Task',
    components: {
      TaskQuestionText,
      TaskResponse,
      CommentsList,
      HelpPopup
    },
    computed: mapState({
      specialChars: state => state.consts.specialChars
    }),
    data () {
      return {
        user: {},
        task_help: '',
        nextTxt: 'Next',
        comments: [],
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
