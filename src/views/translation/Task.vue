<i18n>
    {
    "de": {
    "task-description": "Bitte übersetzen Sie den oben stehenden Satz in Ihren Dialekt.",
    "placeholder": "In Ihrem Dialekt",
    "button-end": "Beenden",
    "progress-prefix": "Satz ",
    "progress-suffix": " von 40",
    "button-next": "Nächster Satz"
    },
    "en": {
    "task-description": "Please translate the sentence above in your dialect.",
    "placeholder": "In your dialect",
    "button-end": "End Task",
    "progress-prefix": "Sentence ",
    "progress-suffix": " of 40",
    "button-next": "Next Sentence"
    }
    }
</i18n>


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
                                {{ $t('task-description') }}
                            </p>

                        </div>
                    </div>
                </div>

                <div class="content-subsection">
                    <div class="row row-centered">
                        <div class="col col-large-8">

                            <p class="task-response" v-if="responses.length">
                                <task-response-text ref="TaskResponseText" :responses="responses"
                                                    :activeAnswer="activeAnswer" :activeAnswerIndex="0"
                                                    type="text"
                                                    :placeholder="$t('placeholder')"></task-response-text>
                            </p>

                        </div>
                    </div>
                </div>


                <div class="content-subsection">
                    <div class="row">
                        <div class="col">

                            <p class="centered button-group task-switch-bar">
                                <button v-on:click="endTask" class="button button-secondary">{{ $t('button-end') }}</button>
                                <label>{{ $t('progress-prefix') }}{{$route.query.count}}{{ $t('progress-suffix') }}</label>
                                <button v-on:click="submitTask" class="button button-primary">{{ $t('button-next') }}</button>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </app-content-section>

        <comments-list v-if="tasks.length" :id="tasks[0].id"></comments-list>

    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import HelpPopup from '@/components/help-popup'
    import CommentsList from '@/components/comments-list'
    import TaskQuestionText from '@/components/TaskQuestionText'
    import TaskResponseText from '@/components/TaskResponseText'
    import ContentSection from '@/components/shared/ContentSection.vue'

    export default {
        name: 'Task',
        components: {
            TaskQuestionText,
            TaskResponseText,
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
            '$route.query.count'(to, from) {
                this.loadTask(to)
            }
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
                nextTxt: 'Next',
                activeAnswer: {}
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
                this.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', this.responses);
                this.$store.dispatch('c3s/submission/createSubmission').then(s => {
                    this.$store.commit('c3s/activity/SET_ACTIVITY', null);
                    this.$router.push({
                        name: 'TranslateComplete'
                    })
                })
            },
            submitTask() {
                this.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', this.responses);
                this.$store.dispatch('c3s/submission/createSubmission').then(s => {
                    let qu = Object.assign({}, this.$route.query);
                    if (qu['count'] === this.taskCount) {
                        this.$store.commit('c3s/activity/SET_ACTIVITY', null);
                        this.$router.push({
                            name: 'TranscribeComplete'
                        })
                    } else {
                        this.$router.replace({name: 'TranlateTask', query: qu})
                    }
                });
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
                        this.activeAnswer = this.tasks[0].content.answers[0]
                        console.log(this.tasks[0].content.question.text)
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

</style>
