<i18n>
    {
    "de": {
    "translation-placeholder-text": "In Ihrem Dialekt"
    },
    "en": {
    "translation-placeholder-text": "In your dialect"
    }
    }
</i18n>

<template>

    <div>

        <!-- <input type="text" :placeholder="activeAnswer.placeholder" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" /> -->
        <input type="text" @input="change" :placeholder="placeholder" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" autocomplete="off" />

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "TaskResponseText",
        computed: mapState({
          activeAnswerIndex: state => state.settings.activeAnswerIndex
        }),
        data() {
            return {
                inputTxt: document.getElementById('qutxt'),
                mappings: [
                  '\u0304',
                  '\u0331',
                  '\u0303',
                  '\u0330',
                  '\u030A',

                  '\u0325',
                  '\u0306',
                  '\u032F',
                  '\u0307',
                  '\u0323',

                  '\u0327',
                  '\u0328',
                  '\u035C',
                  '\u0361',
                  '\u0300',

                  '\u0301',
                  '\u0308',
                  '\u0363',
                  '\u0364',
                  '\u0365',

                  '\u0366',
                  '\u0367'
                ]
            }
        },
        props: {
            activeAnswer: {
                type: Object
            },
            responses: {
                type: Array
            },
            placeholder: {
                type: String,
                default: "Placeholder"
            }
        },
        watch: {
            activeAnswerIndex() {
                this.$emit('change', this.responses[this.activeAnswerIndex].text);
            }
        },
        methods: {
            change() {
                this.$emit('change', this.responses[this.activeAnswerIndex].text);
            },
            /*
            setChar(index, char) {

                var txt = this.responses[this.activeAnswerIndex].text;
                var lastChar = txt[txt.length-1];

                // TODO check if letter is appropriate

                var charName = this.mappings[index];

                if(charName !== undefined) {
                    console.log('add combined: a' + charName);
                    this.responses[this.activeAnswerIndex].text += charName;
                }
                else {
                    console.log('add:' + char);
                    this.responses[this.activeAnswerIndex].text += char;
                }
            },
            */
            addChar( char ) {
                this.responses[this.activeAnswerIndex].text += char;
                this.$emit('change', this.responses[this.activeAnswerIndex].text);
            }
        }
    }
</script>

<style lang="scss">

</style>
