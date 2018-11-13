<template>

    <div>

        <task-question-image></task-question-image>

        <task-response></task-response>

        <div class="special-characters">
            <label>Sonderzeichen</label>
            <button v-on:click="insertChar(char)" :key="char" v-for="char in specialChars">{{char}}</button>
        </div>

        <div class="row">
            <div class="col col-task-actions">
                <button v-on:click="endTask" class="secondary">Beenden</button>
                <button v-on:click="submitTask" class="primary">{{nextTxt}}</button>
            </div>
        </div>

        <comments-list :current_user="user" :comments="comments"></comments-list>

        <template v-if="project.name === 'Transkribieren'" class="row">
            <info-popup :header="'Hilfen'" :info="task_help"></info-popup>
        </template>

    </div>

</template>

<script>
    import TaskQuestionImage from '@/components/TaskQuestionImage';
    import TaskResponse from '@/components/TaskResponse';

    export default {
        name: "Task",
        components: {
            TaskQuestionImage,
            TaskResponse
        }
    }
</script>

<style scoped>

</style>