<template>
    <div class="image-browser-frame">
        <div class="image-browser">
            <croppa v-model="croppaSettings" canvas-color="transparent"
                    :prevent-white-space="true"
                    :show-remove-button="false"
                    :show-loading="true"
                    :loading-size="100"
                    :zoom-speed="5"
                    :placeholder="'Loading'"
                    :accept="'image/*'"
                    :initial-image="imgPath"
                    initial-position="top left"
                    auto-sizing>
                <img slot="initial" :src="imgPath" />
            </croppa>

            <button @click="zoom(true)" class="primary zoom zoom-in"><img src=""></button>
            <button @click="zoom(false)" class="primary zoom zoom-out"><img src=""/></button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TaskQuestionImage',
    props: {
      // question: {
      //   type: Object,
      //   default: () => {
      //     return {}
      //   }
      // },
      imgPath: {
        type: String,
        default: ""
      }
    },
    data () {
      return {
        croppaSettings: null,
      }
    },
    mounted () {
      console.log(this.img)

    }
  }
</script>

<style scoped>

</style>
