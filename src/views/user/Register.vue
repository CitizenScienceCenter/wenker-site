<template>
  <div>
    <h1 class="title">{{ $t('views.user.register')}}</h1>
    <form novalidate class="md-layout" @submit.prevent="register">
      <div>
          <div>
            <label for="email">{{ $t('views.user.email')}}</label>
            <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
          </div>

          <div>
            <label for="pwd">{{ $t('views.user.pwd')}}</label>
            <input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
          </div>
    
        <button type="submit" class="md-primary" :disabled="loading">{{ $t('views.user.register')}}</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Register",
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
<style lang="scss" scoped src='@/assets/styles/main.scss'>
</style>
