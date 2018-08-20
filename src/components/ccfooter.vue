<template>
   <md-bottom-bar class="md-primary">
        <md-bottom-bar-item md-label="UZH" md-icon="account_balance"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="ETH" md-icon="account_balance"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="2018" md-icon="copyright"></md-bottom-bar-item>
      </md-bottom-bar>
</template>

<script>
import _default, { mapState, mapGetters } from "vuex";
export default {
  name: "cc-footer",
  data() {
    return {};
  },
  computed: mapState({}),
  watch: {},
  mounted() {
    // TODO errors should be in a global state and cleared on load
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.cc-footer {
  max-width: 60%;
  width: 60%;
  max-height: 10%;
  padding-left: 20%;
  padding-right: 20%;
}
/* .cc-footer {
    height: 96px;
    padding: 0 16px;
    position: fixed;
    min-width: 100%;
    bottom: 0;
    z-index: 4;
    background-color: #eee;
  } */

  .md-bottom-bar-item {
    max-width: 33% !important;
    min-width: 33% !important;
  }

  .sub-image-card {
    padding: 0px !important;
    // height: 40%;
    // width: 20%;
  }

  .md-card {
    background-color: #fff;
  }

  .copyright {
    text-align: center;
  }

  .logo {
    margin-top: 5%;
    margin-left: 10%;
  }


</style>
