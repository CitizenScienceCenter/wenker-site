<template>
    <div class="task-box">

        <div class="form" v-if="responses.length">
            <select v-model="activeAnswerIndex">
                <option v-for="(r, index) in answers" :value="index" :key="index">{{index+1}}</option>
            </select>
            <input v-for="(r, index) in answers" :placeholder="index" type="text"></input>
        </div>
        <div class="buttons">
            <button :disabled="!activeAnswerIndex > 0" @click="updateActiveIndex(-1)">Prev</button>
            <button :disabled="activeAnswerIndex === answers.length - 1" @click="updateActiveIndex(1)">Next</button>
        </div>


    </div>
</template>

<script>
    export default {
      name: 'TaskResponse',
      props: {
        // answers: {
        //   type: Array,
        //   default: () => {
        //     return []
        //   }
        // },
        // responses: {
        //   type: Array,
        //   default: () => {
        //     return []
        //   }
        // }
      },
      data () {
        return {
          activeAnswerIndex: 0,
          responses: [1,2],
          answers: [1,2]
        }
      },
      methods: {
        updateActiveIndex (val) {
          this.activeAnswerIndex += val
        }
      }
    }
</script>

<style scoped>

</style>
