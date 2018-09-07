<template>
    <login-form></login-form>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LoginForm from "@/components/login-form.vue";
export default {
  name: "Login",
  components :{
    LoginForm
  }
};
</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>
