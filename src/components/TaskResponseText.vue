<template>
    <div class="form-field">
        <label for="qutxt">{{activeAnswer.placeholder || "In Ihrem Dialekt"}}</label>
        <input type="text" :placeholder="activeAnswer.placeholder" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" />
    </div>
</template>

<script>
    export default {
        name: "TaskResponseText",
        data() {
            return {
                inputTxt: document.getElementById('qutxt')
            }
        },
        props: {
            activeAnswer: {
                type: Object
            },
            activeAnswerIndex: {
                type: Number
            },
            responses: {
                type: Array
            }
        },
        methods: {
            setChar(char) {
                console.log(char)
                this.responses[this.activeAnswerIndex].text += char;
            }
        }
    }
</script>

<style scoped>

</style>
