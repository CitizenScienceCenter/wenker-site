<template>

  <form @submit.prevent="register">
    <div class="form-field">
      <label for="email">{{ $t("views.user.email") }}</label>
      <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
      <span class="error" v-if="errors.empty">Du musst eine E-Mail angeben.</span>
    </div>

    <div class="form-field">
      <label for="pwd">{{ $t("views.user.pwd") }}</label>
      <input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
      <span class="error" v-if="errors.len">Muss mehr als 8 Zeichen lang sein.</span>
    </div>
    <div class="form-field">
      <label for="pwd">{{ $t("views.user.conf_pwd") }}</label>
      <input v-model="confPassword" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
      <span class="error" v-if="errors.match">Passwörter stimmen nicht überein</span>
    </div>

    <button type="submit" class="primary" :disabled="loading">Registrieren</button>
  </form>

</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  name: "RegisterForm",
  data() {
    return {
      msg: "Sign up for an account",
      email: "",
      password: "",
      confPassword: "",
      userSaved: false,
      errors: {
        empty: false,
        match: false,
        len: false
      }
    };
  },
  computed: mapState({
    loading: state => state.settings.loading
  }),
  methods: {
    register() {
      console.log(this.password)
      console.log(this.confPassword)
      if (this.email.length > 0 && this.password.length >= 8 && this.confPassword === this.password) {
        const user = {
          email: this.email,
          pwd: this.password
        }
        this.$store.dispatch('user/register', user).then(r => {
            this.$router.push('/home')
          })
      } else {
        this.errors.match = this.password !== this.confPassword
        this.errors.len = this.password.length <= 8
        this.errors.empty = this.email.length === 0
        console.log(this.errors.match)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
