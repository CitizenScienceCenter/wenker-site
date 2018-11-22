<i18n>
    {
    "de": {
    "special-characters-label": "Sonderzeichen einfügen",
    "sentence-count-prefix": "Nr. ",
    "placeholder-prefix": "Satz Nr. ",
    "button-next-sentence": "Nächster Satz"
    },
    "en": {
    "special-characters-label": "Enter special characters",
    "sentence-count-prefix": "No. ",
    "placeholder-prefix": "Sentence No. ",
    "button-next-sentence": "Next Sentence"
    }
    }
</i18n>

<template>
    <div>
        <div class="row">

            <div class="col col-large-2 col-selection">
                <div class="response-selection centered right-aligned-large">
                    <div class="custom-select">
                        <select v-model="activeAnswerIndex">
                            <option v-for="(r, index) in answers" :value="index" :key="index">{{$t('sentence-count-prefix')}}{{index+1}}</option>
                        </select>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                               <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                            </svg>
                    </div>
                </div>
            </div>

            <div class="col col-large-8 col-response">
                <div class="response-field">

                    <task-response-text ref="TaskResponseText" :placeholder="$t('placeholder-prefix') + (activeAnswerIndex+1)" :responses="responses" :activeAnswer="activeAnswer" :activeAnswerIndex="activeAnswerIndex" type="text"></task-response-text>

                </div>
                <div class="special-characters centered">
                    <label>{{ $t('special-characters-label') }}</label>
                    <button class="button button-secondary" v-on:click="insertChar(char)" :key="char" v-for="char in specialChars">{{char}}</button>
                    <!--TODO handle insertion of character to cursor position in CURRENT text box-->
                </div>
                <help-popup></help-popup>

            </div>

            <div class="col col-large-2 col-buttons">
                <div class="response-buttons button-group centered left-aligned-large">
                    <button class="button button-primary" :disabled="activeAnswerIndex === answers.length - 1" @click="updateActiveIndex(1)">{{ $t('button-next-sentence') }}</button>
                    <!-- <button class="button button-secondary" :disabled="!activeAnswerIndex > 0" @click="updateActiveIndex(-1)">Vorheriger</button> -->
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import TaskResponseText from '@/components/TaskResponseText.vue'
    import HelpPopup from '@/components/help-popup'
    import {mapState} from 'vuex'

    export default {
        name: 'TaskResponse',
        props: {
            answers: {
              type: Array,
              default: () => {
                return []
              }
            },
            responses: {
              type: Array,
              default: () => {
                return []
              }
            },
            showSpecial: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            activeAnswer (to, from) {
                this.activeAnswer = this.task.content.answers[to];
            }
        },
        data() {
            return {
                activeAnswerIndex: 0,
                activeAnswer: {}
            }
        },
        computed: mapState({
           specialChars: state => state.consts.specialChars
        }),
        components: {TaskResponseText,HelpPopup},
        methods: {
            updateActiveIndex(val) {
                this.activeAnswerIndex += val;
            },
            insertChar(char) {
                this.$refs.TaskResponseText.setChar(char);

            }
        }
    }
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


    .col-selection {
        margin-bottom: $spacing-3;
    }
    .col-response {
        margin-bottom: $spacing-3;
    }
    .col-buttons {
        margin-bottom: $spacing-2;
    }

    .response-selection {

        .custom-select {

            select {
                font-size: $font-size-small;
                padding-left: $spacing-2;
                border: 1px solid $color-primary-tint-50;
                border-radius: $border-radius;

                &:active {
                    border-color: $color-primary;
                }
                @media (hover: hover) {
                    &:hover {
                        border-color: $color-primary;
                    }
                }
            }
            svg {
                fill: $color-black;
            }
        }

    }
    .response-field {
        margin-bottom: $spacing-2;

    }
    .response-buttons {

    }


    .special-characters {

        margin-bottom: $spacing-1;

        label {
            margin-right: $spacing-2;
        }
        .button.button-secondary {
            height: 32px;
            padding: $spacing-1;
            border-color: white;
            font-family: sans-serif;
        }
    }




    @media only screen and (min-width: $viewport-large) {


    }

</style>
