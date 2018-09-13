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
