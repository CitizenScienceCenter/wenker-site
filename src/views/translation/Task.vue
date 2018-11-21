<template>

    <div>

        <app-content-section>
            <div class="content-wrapper">

                <div class="row">
                    <div class="col" v-if="tasks.length">
                        <task-question-text :question="tasks[0].content.question"></task-question-text>
                    </div>
                </div>

            </div>
        </app-content-section>

        <app-content-section class="content-section-condensed">
            <div class="content-wrapper">


                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <p class="centered">
                                Bitte übersetzen Sie den oben stehenden Satz in Ihren Dialekt.
                            </p>

                        </div>
                    </div>
                </div>

                <div class="content-subsection">
                    <div class="row row-centered">
                        <div class="col col-large-8">

                            <p class="task-response" v-if="responses.length">
                                <task-response :answers="tasks[0].content.answers" :responses="responses"
                                               :showSpecial="true"></task-response>
                            </p>

                        </div>
                    </div>
                </div>


                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <p class="centered button-group">
                                <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                                <label>Satz 1 von 40</label>
                                <button v-on:click="submitTask" class="button button-primary">Nächster Satz</button>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>

        <app-content-section color="light-greyish">
            <div class="content-wrapper">

                <div class="row">
                    <div class="col">

                        <comments-list v-if="tasks.length" :id="tasks[0].id"></comments-list>

                    </div>
                </div>

            </div>
        </app-content-section>

    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import HelpPopup from '@/components/help-popup'
    import CommentsList from '@/components/comments-list'
    import TaskQuestionText from '@/components/TaskQuestionText'
    import TaskResponse from '@/components/TaskResponse'
    import ContentSection from '@/components/shared/ContentSection.vue'

    export default {
        name: 'Task',
        components: {
            TaskQuestionText,
            TaskResponse,
            'app-content-section': ContentSection,
            CommentsList,
            HelpPopup
        },
        computed: mapState({
            specialChars: state => state.consts.specialChars,
            tasks: state => state.c3s.task.tasks,
            activity: state => state.c3s.activity.activity,
            user: state => state.c3s.user.currentUser
        }),
        watch: {
        },
        mounted() {
            if (this.activity && this.activity.id) {
                this.loadTask(this.$route.query['count']);
            } else {
                console.log('No activity set in the store!');
                //    TODO show error for no activity
                this.$router.push({name: 'TranslateStart'})
            }
        },
        data() {
            return {
                responses: [],
                task_help: '',
                nextTxt: 'Next'
            }
        },
        methods: {
            createSubmission() {
                const submission = {
                    user_id: this.user.id,
                    task_id: this.tasks[0].id,
                    content: {}
                };
                this.$store.commit('c3s/submission/SET_SUBMISSION', submission)
            },
            endTask() {

            },
            submitTask() {
                let qu = Object.assign({}, this.$route.query);
                qu['count'] = qu['count'] + 1;
                this.$router.replace({name: 'TranslateTask', query: qu})
            },
            loadTask(count) {
                const taskQuery = {
                    "select": {
                        "fields": [
                            "*"
                        ],
                        "orderBy": {
                            "id": "desc"
                        },
                        "tables": [
                            "tasks"
                        ]
                    },
                    "where": {
                        "activity_id": {
                            "op": "e",
                            "val": this.activity.id
                        }
                    },
                    "limit": 1,
                    "offset": count - 1
                };
                this.$store.dispatch('c3s/task/getTasks', taskQuery).then(t => {
                    if (t.body && t.body.length > 0) {
                        const task = t.body[0];
                        for (let i = 0; i < task.content.answers.length; i++) {
                            this.responses.push({text: ""})
                        }
                        this.createSubmission();
                    } else {
                        console.log(t)
                        console.log('No tasks found');
                        // this.$router.push({'name': 'TranslateComplete'})
                    }
                })
            }
        }
    }
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .content-section-condensed {
        padding: $spacing-5 0;
    }

    .button-group {
        label {
            text-transform: uppercase;
            margin: 0 $spacing-2;
        }
    }

</style>
