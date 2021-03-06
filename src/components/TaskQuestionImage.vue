<template>
    <div class="image-browser">
        <croppa v-model="croppaSettings" canvas-color="transparent"
                @init="init"
                @new-image-drawn="newImageDrawn"
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

        <div class="move-indicator-wrapper">
            <div ref="moveindicator" class="move-indicator">
                <svg aria-hidden="true" data-prefix="fas" data-icon="arrows-alt" class="svg-inline--fa fa-arrows-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg>
            </div>
        </div>

        <div class="image-info-wrapper">
            <div class="image-info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M236.3,501.7C91,291,64,269.4,64,192C64,86,150,0,256,0s192,86,192,192c0,77.4-27,99-172.3,309.7C266.2,515.4,245.8,515.4,236.3,501.7L236.3,501.7z M256,272c44.2,0,80-35.8,80-80s-35.8-80-80-80s-80,35.8-80,80S211.8,272,256,272z"/>
                </svg>
                <span v-if="town">{{town}}</span>
                <span v-if="canton">{{canton}}</span>
            </div>
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
            town: {
                type: String
            },
            canton: {
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
            init: function() {
                this.$refs.moveindicator.classList.remove("animation-v","animation");
            },
            newImageDrawn: function(event) {
                this.$refs.moveindicator.classList.add("animation-v","animation");
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
        bottom: $spacing-2;
        right: $spacing-2;
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

    .move-indicator-wrapper {

        width: 64px;
        height: 64px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-24px) translateY(-24px);
        pointer-events: none;

        .move-indicator {

            width: 100%;
            height: 100%;
            background: rgba($color-black, 0.25);
            border-radius: 50%;
            opacity: 0;

            svg {
                width: 32px;
                height: 32px;
                fill: rgba(255, 255, 255, 0.75);
                position: absolute;
                top: 16px;
                left: 16px;
            }

            &.animation {
                animation-duration: $transition-duration-super-long*2;
                animation-timing-function: $transition-timing-function-symmetric;
                animation-iteration-count: 1;
                animation-fill-mode: forwards;

                @keyframes ani-o {
                    0% {
                        opacity: 0;
                    }
                    33.333% {
                        opacity: 1;
                    }
                    66.667% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            }

            &.animation-v {
                animation-name: ani-o, ani-v;

                @keyframes ani-v {
                    0% {
                        transform: translateY( 0);
                    }
                    33.333% {
                        transform: translateY( -24px );
                    }
                    66.667% {
                        transform: translateY( 24px );
                    }
                    100% {
                        transform: translateY( 0);
                    }
                }
            }

        }

    }

    .image-info-wrapper {
        position: absolute;
        top: $spacing-1;
        left: $spacing-1;
        margin: calc( -#{$spacing-1} /2 );
        font-size: 0;
        .image-info {
            color: white;
            background: rgba( $color-black, 0.4);
            border-radius: 16px;
            font-size: $font-size-small;
            position: relative;
            padding: calc( ( 32px - #{$font-size-small} *1.5 ) / 2 ) 0;
            padding-right: $spacing-2;
            padding-left: 36px;
            &.image-info-small {
                font-size: $font-size-mini;
                line-height: calc( #{$font-size-small} *1.5);
                display: none;
            }
            svg {
                position: absolute;
                top: calc( ( 32px - #{$font-size-small} ) /2 );
                left: calc( ( 32px - #{$font-size-small} ) /2 + 4px );
                width: $font-size-small;
                height: $font-size-small;
                fill: rgba( white, 0.8 );
            }
            display: inline-block;
            margin: calc( #{$spacing-1} /2 );
            span {
                text-transform: capitalize;
                white-space: nowrap;
                &:after {
                    content: ', ';
                }
                &:last-child {
                    &:after {
                        display: none;
                    }
                }
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
            bottom: $spacing-2;
            right: $spacing-2;
        }
        .image-info-wrapper {
            top: $spacing-2;
            left: $spacing-2;
        }
    }
}

</style>
