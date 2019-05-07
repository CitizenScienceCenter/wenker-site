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
        <input type="text" :placeholder="placeholder" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" />

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
        methods: {
            setChar(char, index) {
                var txt = this.responses[this.activeAnswerIndex].text;
                var lastChar = txt[txt.length-1];
                // TODO check if letter is appropriate

                var charName = this.mappings[char];
                if(charName !== undefined) {
                this.responses[this.activeAnswerIndex].text += charName;
                } else {
                this.responses[this.activeAnswerIndex].text += index;
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
