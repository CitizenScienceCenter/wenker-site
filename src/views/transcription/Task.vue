<i18n>
    {
    "de": {
    "task-description": "Bitte übertragen Sie die im Bild ersichtlichen Sätze in das Eingabefeld."
    },
    "en": {
    "task-description": "Please transcribe the sentences from the picture above into the input field."
    }
    }
</i18n>


<template>

    <div>

        <section v-if="tasks.length">
            <task-question-image v-if="media.length > 0" :question="tasks[0].content.question"
                                 :imgPath="media[0].path"></task-question-image>
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
                        <div class="col">

                            <p class="button-group centered task-switch-bar">
                                <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                                <label>{{$route.query.count}} von {{taskCount}}</label>
                                <button v-on:click="submitTask" :disabled="loading" class="button button-primary">
                                    Nächster Bogen
                                </button>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>


        <comments-list v-if="tasks.length" :id="tasks[0].id"></comments-list>

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

  export default {
    name: 'Task',
    components: {
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
      loading: state => state.c3s.settings.loading
    }),
    watch: {
      '$route.query.count' (to, from) {
        taskUtils.loadTask(this, to, true, this.routes.start)
      }
    },
    data () {
      return {
        task_help: '',
        nextTxt: 'Next',
        responses: [],
        taskCount: 1,
        submissions: [],
        routes: {
          complete: 'TranscribeComplete',
          start: 'TranscribeStart',
          task: 'TranscribeTask'
        }
      }
    },
    mounted () {
      if (this.activity && this.activity.id) {
        taskUtils.loadTask(this, this.$route.query['count'], true, this.routes.start)
      } else {
        console.log('No activity set in the store!')
        //    TODO show error for no activity
        this.$router.push({ name: 'TranscribeStart' })
      }
    },
    // TODO add route leave guard to save submission before exiting
    methods: {
      endTask () {
        taskUtils.endTask(this, this.routes.complete)
      },
      submitTask () {
        taskUtils.submitTask(this, this.routes.complete, this.routes.task)
      }
    }

  }

</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


</style>
