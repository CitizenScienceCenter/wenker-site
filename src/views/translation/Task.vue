<template>

    <div>

        <task-question-text></task-question-text>

        <task-response></task-response>

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
    import TaskQuestionText from '@/components/TaskQuestionText';
    import TaskResponse from '@/components/TaskResponse';

    export default {
        name: "Task",
        components: {
            TaskQuestionText,
            TaskResponse
        }
    }
</script>

<style scoped>

</style>