<template>
    <div class="comments">
        <div>
            <single-comment
                    v-for="(comment, index) in comments"
                    :comment="comment"
                    :classes="index"
                    :key="comment.text"
            ></single-comment>
        </div>
        <div class="reply">
            <div class="avatar">
                <img src="" alt="">
            </div>
            <div class="form-field">
                <input
                        type="text"
                        v-model.trim="reply"
                        class="reply-text"
                        placeholder="Leave a comment..."
                        maxlength="250"
                        required
                        @keyup.enter="submitComment"
                />
            </div>
            <button
                    class="button button-secondary"
                    @click.prevent="submitComment">
                <i class="fa fa-paper-plane"></i> Send
            </button>
        </div>
    </div>
</template>
<script>
    import SingleComment from '@/components/comment.vue'
    import {mapState} from 'vuex'

    export default {
        name: "CommentList",
        components: {SingleComment},
        props: {
            'id': {
                type: String,
                default: undefined
            }
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            comments: state => state.c3s.comments.comments
        }),
        watch: {
            'id'(to, from) {
                this.$store.dispatch('c3s/comments/getCommentsForID', [to, 'c3s/comments/SET_COMMENTS']).then(c => {
                    console.log(c)
                })
            }
        },
        data() {
            return {
                reply: ''
            }
        },
        mounted() {
            if (this.id) {
                this.$store.dispatch('c3s/comments/getCommentsForID', [this.id, 'c3s/comments/SET_COMMENTS']).then(c => {
                    // console.log(c)
                })
            }
        },
        methods: {
            submitComment: function () {
                let uname = this.user.username;
                if (this.user.info.anonymous) uname = 'anon';
                const c = {
                    user_id: this.user.id,
                    source_id: this.id,
                    content: {
                        text: this.reply
                    },
                    info: {
                        username: uname
                    }
                };
                this.$store.dispatch('c3s/comments/createComment', c);
                this.reply = '';
            }
        }
    }
</script>
<style lang="scss">

</style>

