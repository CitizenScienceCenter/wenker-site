<template>

    <div>

        <app-content-section>
            <div class="content-wrapper">

                <div class="row">
                    <div class="col">
                        <task-question-text :question="task.content.question"></task-question-text>
                    </div>
                </div>

            </div>
        </app-content-section>

        <app-content-section class="content-section-condensed">
            <div class="content-wrapper">


                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <p class="centered">
                                Bitte übersetzen Sie den oben stehenden Satz in Ihren Dialekt.
                            </p>

                        </div>
                    </div>
                </div>

                <div class="content-subsection">
                    <div class="row row-centered">
                        <div class="col col-large-8">

                            <p class="task-response">
                                <task-response :answers="tasks[0].content.answers" :responses="responses" :showSpecial="true"></task-response>
                            </p>

                        </div>
                    </div>
                </div>


                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <p class="centered button-group">
                                <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                                <label>Satz 1 von 40</label>
                                <button v-on:click="submitTask" class="button button-primary">Nächster Satz</button>
                            </p>

                        </div>
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

        <help-popup :header="'Hilfen'" :info="task_help"></help-popup>

    </div>

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
          let qu = Object.assign({}, this.$route.query);
          qu['count'] = qu['count'] + 1;
          this.$router.replace({name: 'TranscribeTask', query: qu})
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


    .button-group {
        label {
            text-transform: uppercase;
            margin: 0 $spacing-2;
        }
    }

</style>
