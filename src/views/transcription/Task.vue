<template>

    <app-content-section>
        <div class="content-wrapper">

            <div class="row">
                <div class="col" v-if="tasks.length > 0">

                    <task-question-image v-if="media.length > 0" :question="tasks[0].content.question"
                                         :imgPath="media[0].path"></task-question-image>

                    <task-response :answers="tasks[0].content.answers" :responses="responses" :showSpecial="true"></task-response>



                    <div class="row">
                        <div class="col col-task-actions">
                            <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                            <button v-on:click="submitTask" class="button button-primary">{{nextTxt}}</button>
                        </div>
                    </div>

                    <comments-list :id="tasks[0].id"></comments-list>

                    <template class="row">
                        <help-popup :header="'Hilfen'" :info="task_help"></help-popup>
                    </template>

                </div>
            </div>

        </div>
    </app-content-section>

</template>

<script>
    import {mapState} from 'vuex'
    import HelpPopup from '@/components/help-popup'
    import CommentsList from '@/components/comments-list'
    import TaskQuestionImage from '@/components/TaskQuestionImage'
    import TaskResponse from '@/components/TaskResponse'
    import ContentSection from '@/components/shared/ContentSection.vue'

    export default {
        name: 'Task',
        components: {
            TaskQuestionImage,
            TaskResponse,
            'app-content-section': ContentSection,
            HelpPopup,
            CommentsList
        },
        computed: mapState({
            specialChars: state => state.consts.specialChars,
            tasks: state => state.c3s.task.tasks,
            media: state => state.c3s.task.media,
            user: state => state.c3s.user.currentUser,
            activity: state => state.c3s.activity.activity,
            comments: state => state.c3s.task.comments
        }),
        watch: {
            '$route.query.count'(to, from) {
                this.loadTask(to)
            }
        },
        data() {
            return {
                task_help: '',
                nextTxt: 'Next',
                responses: []
            }
        },
        mounted() {
            if (this.activity && this.activity.id) {
                this.loadTask(this.$route.query['count']);
            } else {
                console.log('No activity set in the store!');
                //    TODO show error for no activity
                this.$router.push({name: 'TranscribeStart'})
            }
        },
        methods: {
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
                if (this.$route.query.hasOwnProperty('region')) {
                    const userRegion = this.$route.query['region']
                    taskQuery['where']["info ->> 'SchoolRegion'"] = {'op': 'e', 'val': userRegion, "join": "a"}
                }
                this.$store.dispatch('c3s/task/getTasks', taskQuery).then(t => {
                    if (t.body && t.body.length > 0) {
                        const task = t.body[0];
                        const mediaQuery = {
                            "select": {
                                "fields": [
                                    "*"
                                ],
                                "tables": [
                                    "media"
                                ]
                            },
                            "where": {
                                "source_id": {
                                    "op": "e",
                                    "val": task.id
                                }
                            },
                            "limit": 10
                        };
                        for (let i = 0; i < task.content.answers.length; i++) {
                            this.responses.push({text: ""})
                        }
                        this.createSubmission();
                        this.$store.dispatch('c3s/media/getMedia', [mediaQuery, undefined]).then(m => {
                            let media = m.body.slice();
                            for (let index in media) {
                                media[index].path = media[index].path.replace('./static', 'https://wenker.citizenscience.ch/files')
                            }
                            // console.log(media[0])
                            this.$store.commit('c3s/task/SET_MEDIA', media)
                        })
                    } else {
                        console.log('No tasks found');
                        this.$router.push({'name': 'TranscribeComplete'})
                    }
                })
            },
            createSubmission() {
                const submission = {
                    user_id: this.user.id,
                    task_id: this.tasks[0].id,
                    content: {}
                };
                this.$store.commit('c3s/submission/SET_SUBMISSION', submission)
            },
            endTask() {
                // TODO post submission
                this.$router.push({
                    name: 'TranscribeComplete'
                })
            },
            submitTask() {
                this.$store.commit('c3s/submission/SET_SUBMISSION_RESPONSES', this.responses);
                this.$store.dispatch('c3s/submission/createSubmission').then(s => {
                    let qu = Object.assign({}, this.$route.query);
                    qu['count'] = qu['count'] + 1;
                    this.$router.replace({name: 'TranscribeTask', query: qu})
                })
            },
            insertChar() {

            }
        }

    }
</script>

<style scoped>

</style>
