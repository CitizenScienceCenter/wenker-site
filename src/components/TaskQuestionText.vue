<template>
    <div>{{question.text}}</div>
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

<style scoped>

</style>
