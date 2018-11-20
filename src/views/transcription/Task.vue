<template>

    <app-content-section>
        <div class="content-wrapper">

            <div class="row">
                <div class="col">

                    <task-question-image v-if="media.length > 0" :question="task.content.question" :imgPath="media[0].path"></task-question-image>

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
            if (this.activity && this.activity.id) {
                this.loadTask(this.$route.query['count']);
            } else {
                console.log('No activity set in the store!')
                //    TODO show error for no activity
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
                        const tID = t.body[0]['id'];
                        // this.$store.dispatch('c3s/comments/getCommentsForID', [tID, 'c3s/task/SET_COMMENTS']);
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
                                    "val": tID
                                }
                            },
                            "limit": 10
                        };
                        this.$store.dispatch('c3s/media/getMedia', [mediaQuery, undefined]).then(m => {
                            let media = m.body.slice();
                            for (let index in media) {
                                media[index].path = media[index].path.replace('./static', 'https://wenker.citizenscience.ch/files')
                            }
                            this.$store.commit('c3s/task/SET_MEDIA', media)
                        })
                    } else {
                        //    TODO redirect to error page or explain no tasks found
                        console.log('No tasks found')
                    }
                })
        },
        endTask() {

        },
        submitTask() {
            let qu = Object.assign({}, this.$route.query);
            qu['count'] = qu['count'] + 1;
            this.$router.replace({name: 'TranscribeTask', query: qu})
        },
        insertChar() {

        }
    }

    }
</script>

<style scoped>

</style>
