<template>
    <div class="task-box">

        <div v-if="responses.length">
            <div class="response-selection">
                <div class="form-field">
                    <label>Label</label>
                    <div class="custom-select">
                        <select v-model="activeAnswerIndex">
                            <option v-for="(r, index) in answers" :value="index" :key="index">{{index+1}}</option>
                        </select>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                           <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="response-fields">
                <!-- <task-response-text  v-for="(r, index) in answers" :responses="task.content.answers" :activeAnswerIndex="0"></task-response-text> -->
                <task-response-text activeAnswerIndex="0"></task-response-text>
                <!--
                <div class="form-field" v-for="(r, index) in answers">
                    <label>{{index}}</label>
                    <input :placeholder="index" type="text"></input>
                </div>
                -->
            </div>
        </div>
        <div class="buttons">
            <button class="button button-secondary" :disabled="!activeAnswerIndex > 0" @click="updateActiveIndex(-1)">Prev</button>
            <button class="button button-secondary" :disabled="activeAnswerIndex === answers.length - 1" @click="updateActiveIndex(1)">Next</button>
        </div>


    </div>
</template>

<script>

    import TaskResponseText from '@/components/TaskResponseText'

    export default {
      name: 'TaskResponse',
        components: {
            TaskResponseText
        },
      props: {
        // answers: {
        //   type: Array,
        //   default: () => {
        //     return []
        //   }
        // },
        // responses: {
        //   type: Array,
        //   default: () => {
        //     return []
        //   }
        // }
      },
      data () {
        return {
          activeAnswerIndex: 0,
          responses: [1,2],
          answers: [1,2]
        }
      },
      methods: {
        updateActiveIndex (val) {
          this.activeAnswerIndex += val
        }
      }
    }
</script>

<style lang="scss">
    .response-selection {
        .form-field {
            display: block;
        }
    }
    .response-fields {
        .form-field {
            display: block;
        }
    }
</style>
