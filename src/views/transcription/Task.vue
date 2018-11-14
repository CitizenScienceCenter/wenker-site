<template>

    <app-content-section>
        <div class="content-wrapper">

            <div class="row">
                <div class="col">

                    <task-question-image :question="task.content.question" :img="task.info.path"></task-question-image>

                    <task-response :responses="task.content.answers"></task-response>

                    <div class="special-characters">
                        <label>Sonderzeichen</label>
                        <button v-on:click="insertChar(char)" :key="char" v-for="char in specialChars">{{char}}</button>
                        <!--TODO handle insertion of character to cursor position in CURRENT text box-->
                    </div>

                    <div class="row">
                        <div class="col col-task-actions">
                            <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                            <button v-on:click="submitTask" class="button button-primary">{{nextTxt}}</button>
                        </div>
                    </div>

                    <comments-list :current_user="user" :comments="comments"></comments-list>

                    <template class="row">
                        <help-popup :header="'Hilfen'" :info="task_help"></help-popup>
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
  import TaskQuestionImage from '@/components/TaskQuestionImage'
  import TaskResponse from '@/components/TaskResponse'
  import ContentSection from '@/components/shared/ContentSection.vue'

  export default {
    name: 'Task',
    components: {
      TaskQuestionImage,
      TaskResponse,
      'app-content-section': ContentSection,
      HelpPopup,
      CommentsList
    },
    computed: mapState({
      specialChars: state => state.consts.specialChars

    }),
    data () {
      return {
        user: {},
        comments: [],
        task_help: '',
        nextTxt: 'Next',
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

      },
      insertChar () {

      }
    }

  }
</script>

<style scoped>

</style>
