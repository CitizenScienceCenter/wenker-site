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

                    <comments-list :current_user="user" :comments="comments"></comments-list>

                    <template v-if="project.name === 'Transkribieren'" class="row">
                        <info-popup :header="'Hilfen'" :info="task_help"></info-popup>
                    </template>

                </div>
            </div>

        </div>
    </app-content-section>

</template>

<script>
  import TaskQuestionText from '@/components/TaskQuestionText'
  import TaskResponse from '@/components/TaskResponse'
  import ContentSection from '@/components/shared/ContentSection.vue'


  export default {
        name: "Task",
        components: {
            TaskQuestionText,
            TaskResponse,
            'app-content-section': ContentSection
        },
    data () {
      return {
        user: {},
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
    }
    }
</script>

<style scoped>

</style>
