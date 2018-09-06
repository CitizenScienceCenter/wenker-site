<template>
  <div>
    <div>
      <label for="choices">Select an answer:</label>
      <select v-model="selections" name="choices" id="choices" multiple @md-selected="onSelect">
        <option :key="index" v-for="(c, index) in choiceSelection" value="c.value">{{c.text}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SubmissionMultipleChoices",
  props: ["choices", "response", "index"],
  data() {
    return {
      choiceSelection: this.choices,
      selections: []
    };
  },
  computed: mapState({
    submission: state => state.submission.submission
  }),
  created() {},
  methods: {  
    onSelect() {
      this.content.selection = selections
      this.$store.commit('submission/SET_SUBMISSION_RESPONSE', this.response, this.index)
    
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/components/task-multiple-choice.scss'>
</style>

