<template>
    <!-- <div v-if="activeAnswer.type === 'text'" class="form-field" > -->
    <div class="form-field" >
        <!--
        <label for="qutxt">{{activeAnswer.placeholder || "In Ihrem Dialekt"}}</label>
        <input type="text" v-on:focus="focus(i)" v-on:keyup="changeNext" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" />
        -->

        <label for="qutxt">Label</label>
        <input type="text" name="qutxt" id="qutxt" />
    </div>
</template>

<script>
    export default {
        name: "TaskResponseText"
    }
</script>

<style lang="scss">

</style>