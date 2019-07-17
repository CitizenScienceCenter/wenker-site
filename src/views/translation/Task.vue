  <i18n>
    {
    "de": {

      "page-title": "Übersetzen",

    "task-description": "Bitte übersetzen Sie den oben stehenden Satz in Ihren Dialekt.",
    "placeholder": "In Ihrem Dialekt",
    "button-end": "Beenden",
    "progress-prefix": "Satz ",
    "progress-suffix": " von 40",
    "button-next": "Nächster Satz"
    },
    "en": {

      "page-title": "Translation",

    "task-description": "Please translate the sentence above in your dialect.",
    "placeholder": "In your dialect",
    "button-end": "End Task",
    "progress-prefix": "Sentence ",
    "progress-suffix": " of 40",
    "button-next": "Next Sentence"
    }
    }
</i18n>


<template>

    <div>

        <app-content-section>
            <div class="content-wrapper">

                <div class="row">
                    <div class="col" v-if="tasks.length">
                        <task-question-text :question="tasks[0].content.question"></task-question-text>
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
                                {{ $t('task-description') }}
                            </p>

                        </div>
                    </div>
                </div>

                <div class="content-subsection">
                    <div class="row row-centered">
                        <div class="col col-large-8">

                            <p class="task-response" v-if="responses.length">
                                <task-response-text ref="TaskResponseText" :responses="responses"
                                                    :activeAnswer="activeAnswer" :activeAnswerIndex="0"
                                                    type="text"
                                                    :placeholder="$t('placeholder')"></task-response-text>
                            </p>

                        </div>
                    </div>
                </div>


                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <div class="centered task-switch-bar margin-bottom">
                                <label>{{ $t('progress-prefix') }}{{$route.query.count}}{{ $t('progress-suffix')}}</label>
                                <button v-on:click="submitTask" class="button button-primary">{{ $t('button-next') }}
                                </button>
                            </div>
                            <div class="centered">
                                <button v-on:click="endTask" class="button button-secondary">{{ $t('button-end') }}</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>

        <comments-list v-if="tasks.length" :id="tasks[0].id" :noSentenceNr="true"></comments-list>

        <app-footer></app-footer>

    </div>

</template>

<script>
  import { mapState } from 'vuex'
  import HelpPopup from '@/components/help-popup'
  import CommentsList from '@/components/comments-list'
  import TaskQuestionText from '@/components/TaskQuestionText'
  import TaskResponseText from '@/components/TaskResponseText'
  import ContentSection from '@/components/shared/ContentSection.vue'
  import Footer from '@/components/shared/Footer.vue'
  import * as taskUtils from '@/assets/scripts/tasks'

  export default {
    name: 'Task',
    metaInfo: function() {
      return {
          title: this.$t('page-title'),
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('page-title'),
                  template: '%s | '+this.$t('site-title')
              }
          ]
      }
    },
    components: {
      TaskQuestionText,
      TaskResponseText,
      'app-content-section': ContentSection,
      CommentsList,
      HelpPopup,
      'app-footer': Footer
    },
    computed: mapState({
      specialChars: state => state.consts.specialChars,
      tasks: state => state.c3s.task.tasks,
      activity: state => state.c3s.activity.activity,
      user: state => state.c3s.user.currentUser
    }),
    watch: {
      '$route.query.count' (to, from) {
        // this.loadTask(to)
        taskUtils.loadTask(this, to, true, this.routes.complete, false)
      }
    },
    mounted () {
      if (this.activity && this.activity.id) {
        taskUtils.loadTask(this, this.$route.query['count'], true, this.routes.complete, false)
      } else {
        console.log('No activity set in the store!')
        //    TODO show error for no activity
        this.$router.push({ name: 'TranslateStart' })
      }
    },
    data () {
      return {
        responses: [],
        task_help: '',
        nextTxt: 'Next',
        activeAnswer: {},
        routes: {
          complete: 'TranslateComplete',
          start: 'TranslateStart',
          task: 'TranslateTask'
        }
      }
    },
    methods: {
      endTask () {
        taskUtils.endTask(this, this.routes.complete)
      },
      submitTask () {
        taskUtils.submitTask(this, this.routes.complete, this.routes.task)
      },
    }
  }
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


    .task-switch-bar {
        label {
            font-weight: 400;
            color: $color-black;
            margin: 0 $spacing-2;
        }
    }

</style>
