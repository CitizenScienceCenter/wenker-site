<template>
    <div class="image-browser-frame">
        <div v-if="img" class="image-browser">
            <croppa v-model="croppaSettings" canvas-color="transparent"
                    :prevent-white-space="true"
                    :show-remove-button="false"
                    :show-loading="true"
                    :loading-size="100"
                    :zoom-speed="5"
                    :placeholder="' '"
                    :accept="'image/*'"
                    :initial-image="img"
                    initial-position="top left"
                    auto-sizing>
            </croppa>

            <button @click="zoom(true)" class="primary zoom zoom-in"><img src=""></button>
            <button @click="zoom(false)" class="primary zoom zoom-out"><img src=""/></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskQuestionImage",
        data() {
            return {
                croppaSettings: {},
                img: '' // TODO load template image from web here
            }
        }
    }
</script>

<style scoped>

</style>