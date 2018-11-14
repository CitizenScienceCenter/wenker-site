<template>
    <div>
        <form @submit.prevent="login">
            <div class="form-field">
                <label for="email">{{ $t('views.user.email') }}</label>
                <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading"/>
            </div>

            <div class="form-field">
                <label for="pwd">{{ $t('views.user.pwd') }}</label>
                <input v-model="password" type="password" id="password" name="password" autocomplete="password"
                       :disabled="loading"/>
            </div>
            <span class="error" v-if="error">{{error}}</span>

            <button type="submit" class="primary" :disabled="loading">Anmelden</button>
        </form>
        <br>
        <button @click="reset" class="secondary" :disabled="loading">Vergessen?</button>
    </div>
</template>

<script>
  import _default, { mapState, mapGetters } from 'vuex'

  export default {
    name: 'LoginForm',
    data() {
      return {
        msg: 'Please login here',
        email: '',
        password: '',
        username: '',
        success: false,
        error: false
      }
    },
    computed: mapState({
      currentUser: state => state.c3s.user.currentUser,
      loading: state => state.c3s.user.loading,
      client: state => state.c3s.api
    }),
    watch: {
      'currentUser'(to, from) {
        // console.log(to)
        if (to !== null || to !== undefined) {
        }
      }
    },
    mounted() {
      // TODO errors should be in a global state and cleared on load
      // this.$store.commit('settings/SET_ERROR', null)
    },
    methods: {
      login() {
        this.$store
          .dispatch('user/login', { user: { email: this.email, pwd: this.password } })
          .then(user => {
            if (user !== false) {
              this.$router.push({ name: 'Home' })
            }
          })
      },
      reset() {
        this.$router.push({ name: 'ResetRequest' })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
