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
                inputTxt: document.getElementById('qutxt')
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
            setChar(char) {
                this.responses[this.activeAnswerIndex].text += char;
            }
        }
    }
</script>

<style lang="scss">

</style>
