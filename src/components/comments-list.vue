<i18n>
    {
    "de": {
    "heading": "Kommentare",
    "placeholder": "Hinterlassen Sie einen Kommentar",
    "button-send": "Senden"
    },
    "en": {
    "heading": "Comments",
    "placeholder": "Leave a comment",
    "button-send": "Send"
    }
    }
</i18n>



<template>

    <app-content-section color="light-greyish" class="content-section-condensed">

        <div class="content-wrapper">

            <div class="row row-centered">
                <div class="col col-large-6">

                    <div class="comments">
                        <h2 class="subheading centered">{{ $t('heading') }}</h2>
                        <div class="existing-comments">
                            <single-comment
                                    v-for="(comment, index) in comments"
                                    :comment="comment"
                                    :classes="index"
                                    :key="comment.text"
                            ></single-comment>
                        </div>
                        <div class="reply">
                            <button class="button button-icon button-user">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg>
                            </button>
                            <div class="reply-form">
                                <div class="form-field">
                                    <input
                                            type="text"
                                            v-model.trim="reply"
                                            class="reply-text"
                                            :placeholder="$t('placeholder')"
                                            maxlength="250"
                                            required
                                            @keyup.enter="submitComment"
                                    />
                                </div>
                                <div class="right-aligned">
                                    <button class="button button-secondary" @click.prevent="submitComment">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </app-content-section>
</template>

<script>
    import SingleComment from '@/components/comment.vue'
    import {mapState} from 'vuex'
    import ContentSection from '@/components/shared/ContentSection.vue'

    export default {
        name: "CommentList",
        components: {SingleComment,'app-content-section': ContentSection},
        props: {
            'id': {
                type: String,
                default: undefined
            },
            'currentSentence': {
                type: Number,
                default: 1
            }
        },
        computed: mapState({
            user: state => state.c3s.user.currentUser,
            comments: state => state.c3s.comments.comments,
            currentSentence: state => state.settings.transcriptionIndex
        }),
        watch: {
            'id'(to, from) {
                this.$store.dispatch('c3s/comments/getCommentsForID', [to, 'c3s/comments/SET_COMMENTS']).then(c => {

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
                    console.log(c)
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
                        username: uname,
                        sentence: this.currentSentence
                    }
                };
                this.$store.dispatch('c3s/comments/createComment', c);
                this.reply = '';
            }
        }
    }
</script>
<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .comments {
        .existing-comments {
            margin-bottom: $spacing-3;
        }

        .reply {
            position: relative;

            .button-user {
                position: absolute;
                top: 0;
                left: 0;
                pointer-events: none;
            }
            .reply-form {
                padding-left: $spacing-5;
                .form-field {
                    display: block;
                    margin-bottom: $spacing-2;
                }
            }
        }
    }

    @media only screen and (min-width: $viewport-tablet-portrait) {
        .comments {
            .existing-comments {
                margin-bottom: $spacing-4;
            }
            .reply {
                .reply-form {
                    padding-left: $spacing-6;
                    .form-field {
                        margin-bottom: $spacing-2;
                    }
                }
            }
        }
    }

</style>

