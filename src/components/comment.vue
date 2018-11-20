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
<style lang="scss">
</style>

