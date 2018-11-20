<template>
    <p class="centered lead"><b>{{question.text}}</b></p>
</template>

<script>
    export default {
      name: 'TaskQuestionText',
      props: {
        question: {
          type: Object,
          default: () => {
            return {
              text: 'No Question Text Specified',
              type: 'text'
            }
          }
        }
      }
    }
</script>

<style>

</style>
