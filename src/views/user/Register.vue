<i18n>
  {
  "de": {

  "page-title": "Registrieren"

  },
  "en": {

  "page-title": "Register"

  }
  }
</i18n>

<template>
  <div>
    <app-content-section>
      <div class="content-wrapper">

        <div class="row row-centered">
          <div class="col col-large-6">

            <register-form></register-form>

          </div>
        </div>

      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import RegisterForm from "@/components/register-form.vue";
import ContentSection from '@/components/shared/ContentSection.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: "Register",
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
    RegisterForm,
      'app-content-section': ContentSection,
      'app-footer': Footer
  }
};
</script>
