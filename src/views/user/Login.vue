<i18n>
  {
    "de": {

      "page-title": "Anmelden",

      "heading-login": "Anmelden",
      "heading-register": "Registrieren"
    },
    "en": {
     "page-title": "Login",

      "heading-login": "Login",
      "heading-register": "Register"
    }
  }
</i18n>

<template>
  <div>
    <app-content-section>
      <div class="content-wrapper">

        <div class="row row-centered">
          <div class="col col-large-6">

            <div class="content-subsection">
              <h2 class="heading">{{ $t('heading-login') }}</h2>
              <login-form></login-form>
            </div>

            <div class="content-subsection">
              <h2 class="subheading">{{ $t('heading-register') }}</h2>
              <register-form></register-form>
            </div>

          </div>
        </div>

      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>
  import LoginForm from '@/components/login-form.vue'
  import RegisterForm from '@/components/register-form.vue'
  import ContentSection from '@/components/shared/ContentSection.vue'
  import Footer from '@/components/shared/Footer.vue'

  export default {
  name: "Login",
  metaInfo: function() {
      return {
          title: this.$t('page-title'),
          meta: [
              {
                  property: 'og:title',
                  content: this.$t('page-title'),
                  template: '%s | '+this.$t('site-title')
              }
          ]
      }
  },
  components :{
    LoginForm,
      RegisterForm,
      'app-content-section': ContentSection,
      'app-footer': Footer
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
