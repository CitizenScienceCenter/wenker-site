<template>
  <div v-if="comment" :class="{'comment': classes % 2 === 0, 'comment-right': classes % 2 !== 0}">
    <div class="avatar">
      <img src="" alt="">
    </div>
    <div class="text">
      <a class="username" href="#">
        @{{comment.user}}
      </a>
      <span>{{comment.text}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SingleComment',
    props: {
      comment: {
        type: Object,
        default: null
      },
      classes: {
        type: Number,
        default: 0
      }
    }
  }
</script>
<style lang="scss" scoped>
  .text {
    text-align: center;
    padding-bottom: 2%;
    color: whitesmoke;
  }

  .comment {
    position: relative;
    background: #5E5037;
    border-radius: 0.4em;
    width: 40%;
  }

  .comment:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 36px solid transparent;
    border-top-color: #5E5037;
    border-bottom: 0;
    border-left: 0;
    margin-left: -18px;
    margin-bottom: -36px;
  }

  .comment-right {
    position: relative;
    background: #5E5037;
    border-radius: 0.4em;
    width: 40%;
    margin-left: 60%;
  }

  .comment-right:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 36px solid transparent;
    border-top-color: #5E5037;
    border-bottom: 0;
    border-right: 0;
    margin-left: -18px;
    margin-bottom: -36px;
  }
</style>

