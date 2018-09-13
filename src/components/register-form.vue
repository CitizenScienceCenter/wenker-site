<template>

  <form @submit.prevent="register">
    <div class="form-field">
      <label for="email">{{ $t("views.user.email") }}</label>
      <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
    </div>

    <div class="form-field">
      <label for="pwd">{{ $t("views.user.pwd") }}</label>
      <input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
    </div>
    <div class="form-field">
      <label for="pwd">{{ $t("views.user.pwd") }}</label>
      <input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
    </div>

    <button type="submit" class="primary" :disabled="loading">{{ $t("views.user.register") }}</button>
  </form>

</template>

<script>
import { mapState, mapGetters } from "vuex"
import RegisterForm from "@/components/register-form.vue"
export default {
  name: "RegisterForm",
  data() {
    return {
      msg: "Sign up for an account",
      email: "",
      password: "",
      userSaved: false
    };
  },
  computed: mapState({
    loading: state => state.settings.loading
  }),
  methods: {
    register() {
      const user = {
        email: this.email,
        pwd: this.password
      }
      this.$store.dispatch('user/register', user).then(r => {
          this.$router.push('/login')
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
