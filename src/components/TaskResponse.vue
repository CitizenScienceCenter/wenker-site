<template>
    <div class="task-box">

        <div class="form" v-if="responses.length">
            <select v-model="activeAnswerIndex">
                <option v-for="(r, index) in answers" :value="index" :key="index">{{index+1}}</option>
            </select>
            <task-response-text ref="TaskResponseText" :responses="responses" :activeAnswer="activeAnswer" :activeAnswerIndex="activeAnswerIndex" type="text"></task-response-text>
        </div>
        <div v-if="showSpecial" class="special-characters">
            <label>Sonderzeichen</label>
            <button v-on:click="insertChar(char)" :key="char" v-for="char in specialChars">{{char}}</button>
            <!--TODO handle insertion of character to cursor position in CURRENT text box-->
        </div>
        <div class="buttons">
            <button :disabled="!activeAnswerIndex > 0" @click="updateActiveIndex(-1)">Prev</button>
            <button :disabled="activeAnswerIndex === answers.length - 1" @click="updateActiveIndex(1)">Next</button>
        </div>


    </div>
</template>

<script>
    import TaskResponseText from '@/components/TaskResponseText.vue'
    import {mapState} from 'vuex'

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
            },
            showSpecial: {
                type: Boolean,
                default: false
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
        computed: mapState({
           specialChars: state => state.consts.specialChars
        }),
        components: {TaskResponseText},
        methods: {
            updateActiveIndex(val) {
                this.activeAnswerIndex += val
            },
            insertChar(char) {
                this.$refs.TaskResponseText.setChar(char);

            }
        }
    }
</script>

<style scoped>

</style>
