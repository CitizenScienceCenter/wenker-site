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
        <input type="text" :placeholder="activeAnswer.placeholder || $t('translation-placeholder-text')" v-model="responses[activeAnswerIndex].text" name="qutxt" id="qutxt" />

    </div>
</template>

<script>
    export default {
        name: "TaskResponseText",
        data() {
            return {
                inputTxt: document.getElementById('qutxt')
            }
        },
        props: {
            activeAnswer: {
                type: Object
            },
            activeAnswerIndex: {
                type: Number
            },
            responses: {
                type: Array
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
