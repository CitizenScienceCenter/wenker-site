<template>
    <div>
      <h1 class="title">{{ $t("views.user.login") }}</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">{{ $t("views.user.email") }}</label>
          <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
        </div>

        <div>
          <label for="pwd">{{ $t("views.user.pwd") }}</label>
          <md-input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
        </div>

        <button type="submit" class="md-primary" :disabled="loading">{{ $t("views.user.login") }}</button>
    </form>
  </div>
</template>

<script>
import _default,{ mapState,mapGetters } from "vuex"
export default {
  name: "Login",
  data() {
    return {
      msg: "Please login here",
      email: "",
      password: "",
      username: "",
      success: false
    };
  },
  computed: mapState({
    currentUser: state => state.user.currentUser,
    loading: state => state.user.loading,
    error: state => state.settings.error
  }),
  watch: {
    'currentUser'(to, from) {
      console.log(to)
      if (to !== null || to !== undefined) {
      }
    },
  },
  mounted() {
    // TODO errors should be in a global state and cleared on load
    // this.$store.commit('settings/SET_ERROR', null)
  },
  methods: {
    login() {
      this.$store
        .dispatch("user/login", { user: { email: this.email, pwd: this.password } })
        .then(user => {
          if (user !== false) {
            this.$router.push({name: 'Dashboard'});
          }
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>
