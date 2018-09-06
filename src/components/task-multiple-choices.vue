<template>
  <div>
    <md-list-item :key="index" v-for="(c, index) in choices">
        <md-field>
            <label>Choice</label>
            <md-input class="md-list-item-text">{{c.text}}</md-input>
        </md-field>
        <md-button v-on:click="del(index)" class="md-icon-button md-list-action" title="Delete">
          <md-icon class="md-primary" >delete</md-icon>
        </md-button>
      </md-list-item>
  
    <md-card-actions md-right>
      <md-button class="md-primary" @click="addChoice" >Add Choice</md-button>
      <!-- <md-button v-on:click="save" type="submit" class="md-primary" :disabled="loading">Save</md-button> -->
    </md-card-actions>
  
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "TaskMultipleChoices",
  props: ["choices"],
  data() {
    return {};
  },
  created() {},
  methods: {
    del(index) {
      this.choices.splice(index, 1);
    },
    onSelect(selected) {
      console.log(selected);
      // TODO add selected to store. Should be in a separate UI state?
      this.selected = selected.map(s => {
        return s.id;
      });
    },
    addChoice() {
      const c = {
        key: this.choices.length - 1,
        text: "Edit Text",
        value: "edit_text"
      };
      this.choices.push(c);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/components/task-multiple-choice.scss'>
</style>
