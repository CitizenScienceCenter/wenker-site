<i18n>
{
"de": {
        "heading": "Passwort zurücksetzen",
        "label-email": "Email",
        "label-password": "Passwort",
        "button-reset": "Zurücksetzen"
    },
    "en": {
        "heading": "Reset Password",
        "label-email": "Email",
        "label-password": "Password",
        "button-reset": "Reset"
    }
}
</i18n>


<template>
    <div>
        <app-content-section>
            <div class="content-wrapper">

                <div class="row row-centered">
                  <div class="col col-large-6">

                    <h2 class="heading">{{ $t('heading') }}</h2>
                    <form @submit.prevent="reset">
                        <div class="form-field">
                        <label for="pwd">{{ $t("label-email") }}</label>
                        <input v-model="password" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
                        <span class="error" v-if="errors.len">Muss mehr als 8 Zeichen lang sein.</span>
                        </div>
                        <div class="form-field">
                        <label for="pwd">{{ $t("label-password") }}</label>
                        <input v-model="confPassword" type="password" id="password" name="password" autocomplete="password" :disabled="loading" />
                        <span class="error" v-if="errors.match">Passwörter stimmen nicht überein</span>
                        </div>

                        <button type="submit" class="button button-primary" :disabled="loading">{{ $t('button-reset') }}</button>
                        <span class="error" v-if="error">{{error}}</span>
                    </form>

                  </div>
                </div>

          </div>
        </app-content-section>

        <app-footer></app-footer>

    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ContentSection from '@/components/shared/ContentSection.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: "Reset",
    components: {
        'app-content-section': ContentSection,
        'app-footer': Footer
    },
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
