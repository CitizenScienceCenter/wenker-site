<template>
    <div class="form-field">
        <label for="qutxt">{{activeAnswer.placeholder || "In Ihrem Dialekt"}}</label>
        <input type="text" :placeholder="activeAnswer.placeholder" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" />
    </div>
</template>

<script>
    export default {
        name: "TaskResponseText",
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
        }
    }
</script>

<style scoped>

</style>
