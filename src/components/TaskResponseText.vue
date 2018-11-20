<template>
    <!-- <div v-if="activeAnswer.type === 'text'" class="form-field" > -->

        <!--
        <label for="qutxt">{{activeAnswer.placeholder || "In Ihrem Dialekt"}}</label>
        <input type="text" v-on:focus="focus(i)" v-on:keyup="changeNext" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" />
        -->

    <!-- </div> -->

    <input type="text" name="qutxt" id="qutxt" placeholder="Satz Nr. 1" />

</template>

<script>
    export default {
        name: "TaskResponseText"
    }
</script>

<style lang="scss">

</style>