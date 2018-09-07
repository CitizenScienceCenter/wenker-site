<template>
  <register-form></register-form>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import RegisterForm from "@/components/register-form.vue";
export default {
  name: "Register",
  components :{
    RegisterForm
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src='@/assets/styles/main.scss'>
</style>
