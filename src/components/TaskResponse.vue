<template>
    <div class="task-box">

        <div class="form" v-if="responses.length">
            <select v-model="activeAnswerIndex">
                <option v-for="(r, index) in task.content.answers" :value="index" :key="index">{{index+1}}</option>
            </select>

        </div>
        <div class="buttons">
            <button :disabled="!activeAnswerIndex > 0" @click="updateActiveIndex(-1)">Prev</button>
            <button :disabled="activeAnswerIndex === this.task.content.answers.length - 1" @click="updateActiveIndex(1)">Next</button>
        </div>


    </div>
</template>

<script>
    export default {
        name: "TaskResponse"
    }
</script>

<style scoped>

</style>