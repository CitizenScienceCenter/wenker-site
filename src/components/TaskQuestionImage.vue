<template>
    <div class="image-browser">
        <croppa v-model="croppaSettings" canvas-color="transparent"
                :prevent-white-space="true"
                :show-remove-button="false"
                :show-loading="true"
                :loading-size="100"
                :zoom-speed="5"
                :placeholder="'Loading'"
                :placeholder-font-size="20"
                :disableScrollToZoom="true"
                :accept="'image/*'"
                initial-position="top left"
                auto-sizing>
            <img slot="initial" :src="imgPath" />
        </croppa>

        <div class="buttons">
            <button @click="zoom(false)" class="button button-secondary button-icon button-icon-only">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M448,208H304V64c0-17.7-14.3-32-32-32h-32c-17.7,0-32,14.3-32,32v144H64c-17.7,0-32,14.3-32,32v32c0,17.7,14.3,32,32,32h144
                    v144c0,17.7,14.3,32,32,32h32c17.7,0,32-14.3,32-32V304h144c17.7,0,32-14.3,32-32v-32C480,222.3,465.7,208,448,208z"/>
                </svg>
            </button>
            <button @click="zoom(true)" class="button button-secondary button-icon button-icon-only">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M448,208H64c-17.7,0-32,14.3-32,32v32c0,17.7,14.3,32,32,32h384c17.7,0,32-14.3,32-32v-32C480,222.3,465.7,208,448,208z"/>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskQuestionImage",
        props: {
            imgPath: {
                type: String
            },
            trucken: {
                type: String
            }
        },
        data() {
            return {
                croppaSettings: {}
            }
        },
        watch: {
            imgPath(to, from) {
                this.croppaSettings.refresh();
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
            },
            push() {
                this.croppaSettings.croppa.moveDownwards(10);
            }
        }
    }
</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';

.image-browser {
    position: relative;
    max-width: 1680px;
    margin: auto;

    .croppa-container {
        width: 100%;
        height: 160px;

        cursor: move;
    }

    .buttons {
        position: absolute;
        top: $spacing-2;
        left: $spacing-2;
        width: 60px;

        .button {
            border-radius: 50%;

            display: block;
            background-color: white;
            &:last-child {
                margin-top: $spacing-1;
            }
        }
    }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
    .image-browser {
        .croppa-container {
            height: 320px;
        }
        .buttons {
            top: $spacing-2;
            left: $spacing-2;
        }
    }
}

</style>
