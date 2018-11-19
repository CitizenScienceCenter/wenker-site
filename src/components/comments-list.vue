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
        <hr>
        <div class="reply">
            <div class="avatar">
                <img src="" alt="">
            </div>
            <input
                    type="text"
                    v-model.trim="reply"
                    class="reply-text"
                    placeholder="Leave a comment..."
                    maxlength="250"
                    required
                    @keyup.enter="submitComment"
            />
            <button
                    class="reply--button"
                    @click.prevent="submitComment">
                <i class="fa fa-paper-plane"></i> Send
            </button>
        </div>
    </div>
</template>
<script>
  import SingleComment from '@/components/comment.vue'

  export default {
    name: 'CommentList',
    components: { SingleComment },
    props: ['comments', 'current_user'],
    data () {
      return {
        reply: ''
      }
    },
    mounted () {
      console.log(this.comments)
    },
    methods: {
      submitComment: function () {
        this.comments.push({
          user: 'test',
          avatar: '',
          text: this.reply
        })
        this.reply = ''
      }
    }
  }
</script>
<style lang="scss">

</style>

