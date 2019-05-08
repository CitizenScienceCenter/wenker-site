<i18n>
    {
    "de": {
    "modify-characters-label": "Letztes Zeichen modifizieren:",
    "special-characters-label": "Sonderzeichen einfügen:",
    "sentence-count-prefix": "Nr. ",
    "placeholder-prefix": "Satz Nr. ",
    "button-next-sentence": "Nächster Satz",
    "info-transcribed-prefix": "Satz {no} wurde bereits ",
    "info-transcribed-suffix": " Mal transkribiert.",
    "info-done": "Du hast diesen Satz bereits transkribiert."
    },
    "en": {
    "modify-characters-label": "Modify last character:",
    "special-characters-label": "Enter special characters:",
    "sentence-count-prefix": "No. ",
    "placeholder-prefix": "Sentence No. ",
    "button-next-sentence": "Next Sentence",
    "info-transcribed-prefix": "Has been transcribed ",
    "info-transcribed-suffix": " times so far",
    "info-done": "You transcribed this phrase already."
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
                            <option v-for="(r, index) in answers" :value="index" :key="index">
                                {{$t('sentence-count-prefix')}}{{index+1}}
                            </option>
                        </select>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                               <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
                            </svg>
                    </div>
                </div>
            </div>

            <div class="col col-large-8 col-response">
                <div class="response-field">

                    <task-response-text ref="TaskResponseText"
                                        :placeholder="$t('placeholder-prefix') + (activeAnswerIndex+1)"
                                        :responses="responses" :activeAnswer="activeAnswer"
                                        @change="change"
                                        :activeAnswerIndex="activeAnswerIndex" type="text"></task-response-text>
                    <div v-if="userSubmitted" class="info centered"> <!-- sometimes that one -->
                        <svg aria-hidden="true" data-prefix="fas" data-icon="info-circle" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                        </svg>
                        {{ $t('info-done') }}
                    </div>
                    <div v-if="othersSubmitted > 0" class="submissions centered"> <!-- sometimes this one -->
                        {{ $t('info-transcribed-prefix', {no: activeAnswerIndex+1}) }} {{othersSubmitted}} {{ $t('info-transcribed-suffix') }}
                    </div>

                </div>
                <div class="special-characters centered" :class="{disabled: !Boolean( inputString.length ) }">
                    <label>{{ $t('modify-characters-label') }}</label>
                    <button class="button button-secondary large" v-on:click="addChar(char)" :key="char"
                            v-for="(char, index) in specialCombinationChars">&nbsp;{{char}}
                    </button>
                </div>
                <div class="special-characters centered">
                    <label>{{ $t('special-characters-label') }}</label>
                    <button class="button button-secondary" v-on:click="addChar(char)" :key="char"
                            v-for="(char, index) in specialSingleChars">{{char}}
                    </button>
                </div>
                <help-popup class="rules"></help-popup>

            </div>

            <div class="col col-large-2 col-buttons">
                <div class="response-buttons centered left-aligned-large">
                    <button class="button button-secondary" :disabled="activeAnswerIndex === answers.length - 1"
                            @click="updateActiveIndex(1)">{{ $t('button-next-sentence') }}
                    </button>
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
            },
        },
        watch: {
            activeAnswer(to, from) {
                this.activeAnswer = this.answers[to];
            },
            answers(to, from) {
                this.activeAnswerIndex = 0;
                setTimeout(() => {
                    const subQuery = {
                        "select": {
                            "fields": [
                                "*"
                            ],
                            "tables": [
                                "submissions"
                            ]
                        },
                        "where": {
                            "task_id": {
                                "op": "e",
                                "val": this.tasks[0].id
                            }
                        }
                    };
                    this.$store.dispatch('c3s/submission/getSubmissions', [subQuery, 1000]).then(s => {
                        if (s.ok) {
                            this.submissions = s.body
                            this.checkSubmissions()
                        }
                    })
                }, 200)
            },
            activeAnswerIndex(to, from) {
                this.userSubmitted = false;
                this.othersSubmitted = 0;
                this.checkSubmissions()
            }
        },
        data() {
            return {
                activeAnswer: {},
                userSubmitted: false,
                othersSubmitted: 0,
                submissions: [],
                specialCombinationChars: [
                    '̄',
                    '̱',
                    '̃',
                    '̰',
                    '̊',

                    '̥',
                    '̆',
                    '̯',
                    '̇',
                    '̣',

                    '̧',
                    '̨',
                    '͜',
                    '͡',
                    '̀',

                    '́',
                    '̈',
                    'ͣ',
                    'ͤ',
                    'ͥ',

                    'ͦ',
                    'ͧ'
                ],
                specialSingleChars: [
                    'š',
                    'Š',
                    'ſ',
                    'ə',
                ],
                inputString: ''
            }
        },
      computed: {
        activeAnswerIndex: {
            get() {
              return this.$store.state.settings.activeAnswerIndex;
            },
            set(value) {
              this.$store.commit('settings/SET_INDEX', value);
            }
        },
        ...mapState({
            specialChars: state => state.consts.specialChars,
            tasks: state => state.c3s.task.tasks,
            user: state => state.c3s.user.currentUser
        }),
      },
        mounted() {
            setTimeout(() => {
                const subQuery = {
                    "select": {
                        "fields": [
                            "*"
                        ],
                        "tables": [
                            "submissions"
                        ]
                    },
                    "where": {
                        "task_id": {
                            "op": "e",
                            "val": this.tasks[0].id
                        }
                    }
                };
                this.$store.dispatch('c3s/submission/getSubmissions', [subQuery, 1000]).then(s => {
                    if (s.ok) {
                        this.submissions = s.body
                        this.checkSubmissions()
                    }
                })
            }, 200)
          this.$store.commit('settings/SET_INDEX', 0);
        },
        components: {TaskResponseText, HelpPopup},
        methods: {
            change(string) {
                this.inputString = string;
            },
            updateActiveIndex(val) {
                this.activeAnswerIndex += val;
            },
            /*
            insertChar(index, char) {
                this.$refs.TaskResponseText.setChar(index, char);
            },
            */
            addChar( char ) {
                this.$refs.TaskResponseText.addChar( char );
            },
            checkSubmissions() {
                //subs-user for current user and subs-some for submissions not from current user
                this.userSubmitted = false;
                this.othersSubmitted = 0;
                if (this.submissions.length > 0) {
                    for (let i in this.submissions) {
                        const sub = this.submissions[i];
                        if ('responses' in sub['content']) {
                            const responses = sub['content']['responses'];
                            if (responses.length >= this.activeAnswerIndex && responses[this.activeAnswerIndex].text.length > 0) {
                                if (sub['user_id'] === this.user.id) {
                                    this.userSubmitted = true
                                } else {
                                    this.othersSubmitted += 1
                                }
                            }
                        }
                    }
                }
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

        .info {
            padding-top: $spacing-2;
            font-size: $font-size-small;
            color: $color-secondary;

            svg {
                fill: $color-secondary;
                display: inline-block;
                width: $font-size-small;
                height: $font-size-small;
                margin-right: $spacing-1;
                transform: translateY(2px);
            }
        }
        .submissions {
            padding-top: $spacing-2;
            font-size: $font-size-small;
            color: $color-black;
        }
    }

    .response-buttons {

    }

    .special-characters {

        label {
            margin-right: $spacing-2;
            font-weight: 400;
            color: $color-primary-shade-40;
            font-size: $font-size-small;
            font-style: italic;
        }
        .button.button-secondary {
            padding: 0 $spacing-1;
            font-size: $font-size-normal;
            font-family: sans-serif;
            text-transform: lowercase;
            border: 1px transparent solid;

            &:hover {
                border: 1px $color-primary-shade-20 solid;
            }

            &.large {
                font-size: $font-size-medium;
            }
        }


        &.disabled {
            opacity: 0.25;
            pointer-events: none;
        }
    }

    .rules {
        margin-top: $spacing-3;
    }

    @media only screen and (min-width: $viewport-large) {

    }

</style>
