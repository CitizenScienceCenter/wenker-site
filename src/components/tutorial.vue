<template>
  <!-- Set the options for opening and using a cover here -->
  <dialog :open="options.open">
    <article >
      <section v-if="current">
        <div>
            <div>
              <div class="title">{{current.header}}</div>
              <div class="sub-title">{{current.subheader}}</div>
            </div>
            <div v-if="current.img">
              <img :src="current.img">
            </div>
        </div>
        <p>
            {{current.content}}
            <!-- <md-progress-bar md-mode="determinate" v-if="data" :md-value="(step + 1)/data.length * 100"></md-progress-bar> -->
        </p>
        <div>
            <button @click="options.open = false">Close</button>
            <button :disabled="step === 0" @click="step -= 1">Previous</button>
            <button :disabled="step === data.length - 1" @click="step += 1">Next</button>
        </div>
      </section>
   </article>
  </dialog>
</template>
<script>
/**
 * A tutorial popover using the dialog component from
 * Should have an `options` object and a `data` array as props
 * 
 * @author encima
 */
export default {
    name: 'tutorial',
    props: {
      /**
       * Data should be an array of objects containing a `header`, `subheader`, `img`, and `content`
       * NOTE: the `img` is optional
       */
      'data': {type: Array},
      /**
       * Options should contain booleans to `open` the tutorial, `backdrop` behind the dialog and
       * allow it to be closed on pressing the esc key(`closeOnEsc`)
       */
      'options': {type: Object}
    },
    data() {
        return {
            /**
             * The current screen that is being shown
             */
            step: 0,
            /**
             * The data for the current screen
             */
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


