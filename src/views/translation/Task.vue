<template>

    <app-content-section>
        <div class="content-wrapper">

            <div class="row">
                <div class="col">

                    <task-question-text :question="task.content.question"></task-question-text>

                    <task-response :responses="task.content.answers"></task-response>

                    <div class="row">
                        <div class="col col-task-actions">
                            <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                            <button v-on:click="submitTask" class="button button-primary">{{nextTxt}}</button>
                        </div>
                    </div>

<<<<<<< HEAD
                    <comments-list :current_user="user" :comments="comments"></comments-list>
=======
        <help-popup :header="'Hilfen'" :info="task_help"></help-popup>
>>>>>>> b5d6b3362b0ed182a6d1568c57ec6b193b0aa403

                    <template v-if="project.name === 'Transkribieren'" class="row">
                        <info-popup :header="'Hilfen'" :info="task_help"></info-popup>
                    </template>

                </div>
            </div>

        </div>
    </app-content-section>

</template>

<script>
  import { mapState } from 'vuex'
  import HelpPopup from '@/components/help-popup'
  import CommentsList from '@/components/comment'
  import TaskQuestionText from '@/components/TaskQuestionText'
  import TaskResponse from '@/components/TaskResponse'
  import ContentSection from '@/components/shared/ContentSection.vue'


  export default {
<<<<<<< HEAD
        name: "Task",
        components: {
            TaskQuestionText,
            TaskResponse,
            'app-content-section': ContentSection
        },
=======
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
>>>>>>> b5d6b3362b0ed182a6d1568c57ec6b193b0aa403
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
