<template>
<div>

    <section class="section-content">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-form">

            <h2 class="title">Ändern</h2>
            <form @submit.prevent="reset">
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

                <button type="submit" class="primary" :disabled="loading">Ändern</button>
                <span class="error" v-if="error">{{error}}</span>
            </form>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Reset",
  data() {
      return {
        oldPassword: "",
        password: "",
        confPassword: "",
        userSaved: false,
        errors: {
            match: false,
            len: false
        }
      }
  },
  computed: mapState({
    loading: state => state.settings.loading,
    error: state => state.settings.error
  }),
  mounted() {const id = this.$route.params.token.split('.')[0]
        console.log(id)
  },
  methods: {
      reset() {
      if (this.password.length >= 8 && this.confPassword === this.password) {
        const id = this.$route.params.token.split('.')[0]
        const reset = {
          id: id,
          token: this.$route.params.token,
          pwd: this.password
        }
        this.$store.dispatch('user/resetPwd', reset).then(r => {
            if(r !== false) {
                this.$router.push('/welcome')
            }
          })
      } else {
        this.errors.match = this.password !== this.confPassword
        this.errors.len = this.password.length <= 8
      }
    }
  }
};
</script>
