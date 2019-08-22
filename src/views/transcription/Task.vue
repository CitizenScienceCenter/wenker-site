<i18n>
    {
    "de": {

    "page-title": "Transkribieren",


    "task-description": "Bitte übertragen Sie die im Bild ersichtlichen Sätze in das Eingabefeld."
    },
    "en": {

    "page-title": "Transcription",

    "task-description": "Please transcribe the sentences from the picture above into the input field."
    }
    }
</i18n>


<template>

    <div>

        <section v-if="tasks.length">
            <task-question-image v-if="media.length > 0" :question="tasks[0].content.question"
                                 :imgPath="media[0].path" :town="tasks[0].info['SchoolPlace']" :canton="tasks[0].info['SchoolState']"></task-question-image>
        </section>

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

                <div class="content-subsection" v-if="responses.length">
                    <task-response :answers="tasks[0].content.answers" :responses="responses"
                                   :showSpecial="true"></task-response>
                </div>

                <div class="content-subsection">
                    <div class="row">
                        <div class="col" v-if='taskRange.length !== parseInt(taskDropdown)'>
                            <div class="centered task-switch-bar margin-bottom" >
                              <button v-on:click="submitTask" :disabled="loading" class="button button-primary">
                                Nächster Bogen
                              </button>
                            </div>
                            <div class="centered task-switch-bar margin-bottom" >
                                <div class="sheet-select">
                                    <div class="custom-select">
                                        <select class="task-select" v-model="taskDropdown">
                                            <option v-bind:key="i" v-for="i in taskRange">{{i+1}}</option>
                                        </select>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                            <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                                        </svg>
                                    </div>
                                    <label>von {{taskCount}}</label>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="col" v-if='taskRange.length === parseInt(taskDropdown)'>
                      <div class="centered task-switch-bar margin-bottom" >
                        <button v-on:click="submitTask(true)" tag="button" class="button button-primary">
                          Zurück zur Regionsauswahl
                        </button>
                      </div>


                    </div>
                    <br>
                    <div class="centered">
                        <button v-on:click="endTask" class="button button-secondary">Sitzung Beenden</button>
                    </div>
                </div>

            </div>
        </app-content-section>


        <comments-list v-if="tasks.length" :id="tasks[0].id"></comments-list>


        <section-feedback color="greyish" email="wenker@citizenscience.ch"></section-feedback>

        <app-footer></app-footer>

    </div>

</template>

<script>

  import { mapState } from 'vuex'
  import CommentsList from '@/components/comments-list'
  import TaskQuestionImage from '@/components/TaskQuestionImage'
  import TaskResponse from '@/components/TaskResponse'
  import ContentSection from '@/components/shared/ContentSection.vue'
  import Footer from '@/components/shared/Footer.vue'
  import * as taskUtils from '@/assets/scripts/tasks'
  import SectionFeedback from "../../components/shared/SectionFeedback";

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
        SectionFeedback,
      TaskQuestionImage,
      TaskResponse,
      'app-content-section': ContentSection,
      CommentsList,
      'app-footer': Footer
    },
    computed: mapState({
      specialChars: state => state.consts.specialChars,
      tasks: state => state.c3s.task.tasks,
      media: state => state.c3s.task.media,
      user: state => state.c3s.user.currentUser,
      activity: state => state.c3s.activity.activity,
      comments: state => state.c3s.task.comments,
      loading: state => state.c3s.settings.loading,
      taskRange: function() {
        return [...Array(this.taskCount).keys()];
      }
    }),
    watch: {
      '$route.query.count' (to, from) {
        if (!this.taskID) {
          this.taskDropdown = to;
          taskUtils.loadTask(this, to, true, this.routes.start)
        }
      },
      taskDropdown (to, from) {
        const queryObj = Object.assign({}, this.$route.query)
        queryObj.count = to
        this.$router.push({path: this.$route.path, query: queryObj})
        // taskUtils.loadTask(this, to, true, this.routes.start)
      },
      taskID (to, from) {
        taskUtils.loadTaskID(this, to, true, this.routes.start)
      }
    },
    data () {
      return {
        task_help: '',
        nextTxt: 'Next',
        responses: [],
        taskCount: 1,
        taskID: this.$route.query['id'],
        taskDropdown: this.$route.query['count'] || 1,
        submissions: [],
        routes: {
          complete: 'TranscribeComplete',
          start: 'TranscribeStart',
          task: 'TranscribeTask'
        }
      }
    },
    mounted () {
      if (this.taskID) {
        taskUtils.loadTaskID(this, this.taskID, true, this.routes.start)
      } else if (this.activity && this.activity.id) {
        taskUtils.loadTask(this, this.$route.query['count'], true, this.routes.start)
      } else {
        console.log('No activity set in the store!')
        //    TODO show error for no activity
        this.$router.push({ name: 'TranscribeStart' })
      }
    },
    updated () {

    },
    // TODO add route leave guard to save submission before exiting
    methods: {
      endTask () {
        taskUtils.endTask(this, this.routes.complete)
      },
      submitTask (end) {
         const route = end ? this.routes.start : this.routes.complete
        taskUtils.submitTask(this, route, this.routes.task)
      }
    }

  }

</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


    .sheet-select {

        display: inline-block;

        .custom-select {

            select {

                font-size: $font-size-small;
                padding-left: $spacing-2;
                border: 1px solid $color-primary-tint-50;
                border-radius: $border-radius;

                &:active {
                    border-color: $color-primary;
                }
                @media (hover: hover) {
                    &:hover {
                        border-color: $color-primary;
                    }
                }
            }
            svg {
                fill: $color-black;
            }
        }

        label {
            font-weight: 400;
            color: $color-black;
            margin: 0 $spacing-2;
        }

    }


</style>
