<template>
  <div>
    <section class="section-content">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-title">


            <h2 class="title">{{ $t("views.user.register") }}</h2>
            <form @submit.prevent="register">
              <div>
                <label for="email">{{ $t("views.user.email") }}</label>
                <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
              </div>

              <div>
                <label for="pwd">{{ $t("views.user.pwd") }}</label>
                <input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
              </div>

              <button type="submit" class="md-primary" :disabled="loading">{{ $t("views.user.register") }}</button>
            </form>

          </div>
        </div>

      </div>
    </section>
  </div>
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
