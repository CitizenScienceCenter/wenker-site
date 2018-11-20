<template>

    <app-content-section>
        <div class="content-wrapper">

            <div class="row">
                <div class="col">

                    <task-question-image :question="task.content.question" :img="task.info.path"></task-question-image>

                    <task-response :responses="task.content.answers"></task-response>

                    <div class="special-characters">
                        <label>Sonderzeichen</label>
                        <button v-on:click="insertChar(char)" :key="char" v-for="char in specialChars">{{char}}</button>
                        <!--TODO handle insertion of character to cursor position in CURRENT text box-->
                    </div>

                    <div class="row">
                        <div class="col col-task-actions">
                            <button v-on:click="endTask" class="button button-secondary">Beenden</button>
                            <button v-on:click="submitTask" class="button button-primary">{{nextTxt}}</button>
                        </div>
                    </div>

                    <comments-list :current_user="user" :comments="comments"></comments-list>

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
    import CommentsList from '@/components/comment'
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
            activity: state => state.c3s.activity.activity
        }),
        watch: {
            '$route.query.count'(to, from) {
                // TODO dispatch task retrieval
            }
        },
        data() {
            return {
                comments: [],
                task_help: '',
                nextTxt: 'Next',
                task: {
                    info: {
                        path: 'https://cdn.pixabay.com/photo/2018/10/01/20/38/meteora-3717220_1280.jpg'
                    },
                    content: {
                        answers: [],
                        question: {
                            text: 'Question text',
                            type: 'single_file'
                        }
                    }
                }
            }
        },
        mounted() {
            this.loadTask(this.$route.query['count'])
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
                    "offset": count -1
                };
                if(this.$route.query.hasOwnProperty('region')) {
                    taskQuery['where']['info.region']
                }
                this.$store.dispatch('c3s/task/getTasks', taskQuery).then(t => {
                    console.log(t.body[0])
                    if(t.body.length > 0) {
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
                                    "val": t.body[0]['id']
                                }
                            },
                            "limit": 10
                        };
                        // TODO test error on no response
                        this.$store.dispatch('c3s/task/getTaskMedia', mediaQuery).then(m => {
                            console.log(m.body)
                        })
                    } else {
                    //    TODO redirect to error page or explain no tasks found
                        console.log('No tasks found')
                    }
                //    TODO do something with this task!
                })
            },
            endTask() {

            },
            submitTask() {
                this.$router.push({name: 'TranscribeTask', query: {'count': this.$route.query['count'] + 1}})
            },
            insertChar() {

            }
        }

    }
</script>

<style scoped>

</style>
