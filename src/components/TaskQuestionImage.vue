<template>
    <div class="image-browser">
        <croppa v-model="croppaSettings" canvas-color="transparent"
                :prevent-white-space="true"
                :show-remove-button="false"
                :show-loading="true"
                :loading-size="100"
                :zoom-speed="5"
                :placeholder="'Loading'"
                :accept="'image/*'"
                initial-position="top left"
                auto-sizing>
            <img slot="initial" :src="imgPath" />
        </croppa>

        <div class="buttons">
            <button @click="zoom(false)" class="button button-secondary">+</button>
            <button @click="zoom(true)" class="button button-secondary">-</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskQuestionImage",
        props: {
            imgPath: {
                type: String
            }
        },
        data() {
            return {
                croppaSettings: {}
            }
        },
        mounted() {

        },
        methods: {
            zoom(out) {
                if (out) {
                    this.croppaSettings.zoomOut()
                } else {
                    this.croppaSettings.zoomIn()
                }
            }
        }
    }
</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';

.image-browser {
    position: relative;

    .croppa-container {
        width: 100%;
        height: 320px;

        cursor: move;
    }

    .buttons {
        position: absolute;
        bottom: $spacing-3;
        right: $spacing-3;

        .button {
            background-color: white;
            &:first-child {
                margin-right: $spacing-1;
            }
        }
    }
}

</style>
