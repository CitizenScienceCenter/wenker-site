<template>

    <div>

        <section>
            <task-question-image :question="task.content.question" :imgPath="task.info.path"></task-question-image>
        </section>

        <app-content-section class="content-section-condensed">
            <div class="content-wrapper">

                <div class="row">
                    <div class="col">

                        <p class="centered">
                            Bitte übertragen Sie die im Bild ersichtlichen Sätze in das Eingabefeld.
                        </p>

                        <task-response></task-response>

                        <p class="centered button-group">
                            <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                            <label>Bogen 1 von 1</label>
                            <button v-on:click="submitTask" class="button button-primary">Nächster Bogen</button>
                        </p>

                        <template class="row">
                            <help-popup :header="'Hilfen'" :info="task_help"></help-popup>
                        </template>

                    </div>
                </div>

            </div>
        </app-content-section>

        <app-content-section color="light-greyish">
            <div class="content-wrapper">

                <div class="row">
                    <div class="col">

                        <comments-list :current_user="user" :comments="comments"></comments-list>

                    </div>
                </div>

            </div>
        </app-content-section>

    </div>

</template>

<script>
  import { mapState } from 'vuex'
  import HelpPopup from '@/components/help-popup'
  import CommentsList from '@/components/comments-list'
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
    data () {
      return {
        user: {},
        comments: [],
        task_help: '',
        nextTxt: 'Next',
        task: {
          info: {
            path: '../img/wenkerbogen.jpg'
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

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .content-section-condensed {
        padding: $spacing-5 0;
    }

    .special-characters {
        label {
            margin-right: $spacing-2;
        }
        .button.button-secondary {
            height: 32px;
            padding: $spacing-1;
            border-color: white;
            font-family: sans-serif;
        }
    }

    .button-group {
        label {
            text-transform: uppercase;
            margin: 0 $spacing-2;
        }
    }

</style>
