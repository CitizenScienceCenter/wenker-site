<template>
    <div class="task-box">

        <div class="form" v-if="responses.length">
            <select v-model="activeAnswerIndex">
                <option v-for="(r, index) in answers" :value="index" :key="index">{{index+1}}</option>
            </select>
            <task-response-text :responses="responses" :activeAnswer="activeAnswer" :activeAnswerIndex="activeAnswerIndex" type="text"></task-response-text>
        </div>
        <div class="buttons">
            <button :disabled="!activeAnswerIndex > 0" @click="updateActiveIndex(-1)">Prev</button>
            <button :disabled="activeAnswerIndex === answers.length - 1" @click="updateActiveIndex(1)">Next</button>
        </div>


    </div>
</template>

<script>
    import TaskResponseText from '@/components/TaskResponseText.vue'

    export default {
        name: 'TaskResponse',
        props: {
            answers: {
              type: Array,
              default: () => {
                return []
              }
            },
            responses: {
              type: Array,
              default: () => {
                return []
              }
            }
        },
        watch: {
            activeAnswer (to, from) {
                this.activeAnswer = this.task.content.answers[to]
            }
        },
        data() {
            return {
                activeAnswerIndex: 0,
                activeAnswer: {}
            }
        },
        components: {TaskResponseText},
        methods: {
            updateActiveIndex(val) {
                this.activeAnswerIndex += val
            }
        }
    }
</script>

<style scoped>

</style>
