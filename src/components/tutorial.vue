<template>
  <md-dialog :md-active.sync="options.open" :md-backdrop="options.backdrop">
    <article v-cloak>
      <md-card v-if="current">
        <md-card-header>
            <md-card-header-text>
            <div class="md-title">{{current.header}}</div>
            <div class="md-subhead">{{current.subheader}}</div>
            </md-card-header-text>
            <md-card-media md-big v-if="current.img">
            <img :src="current.img">
            </md-card-media>
        </md-card-header>
        <md-card-content>
            {{current.content}}
            <md-progress-bar md-mode="determinate" v-if="data" :md-value="(step + 1)/data.length * 100"></md-progress-bar>
        </md-card-content>
        <md-card-actions>
            <md-button @click="options.open = false">Close</md-button>
            <md-button :disabled="step === 0" @click="step -= 1">Previous</md-button>
            <md-button :disabled="step === data.length - 1" @click="step += 1">Next</md-button>
        </md-card-actions>
      </md-card>
   </article>
  </md-dialog>
</template>
<script>
export default {
    name: 'tutorial',
    props: ['data', 'options'],
    data() {
        return {
            step: 0,
            current: null
        }
    },
    watch: {
      'step' (to, from) {
        this.current = this.data[to]
      }
    },
    mounted() {
      if(this.data.length) {
        this.current = this.data[this.step]
      }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
</style>


