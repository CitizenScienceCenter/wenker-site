<i18n>
  {
    "de": {
      "heading": "Passwort zurücksetzen",
      "label-email": "Email",
      "button-reset": "Zurücksetzen"
    },
    "en": {
      "heading": "Reset Password",
      "label-email": "Email",
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
              <form @submit.prevent="request">
                <div class="form-field">
                  <label for="email">{{ $t("label-email") }}</label>
                  <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
                </div>
                <button type="submit" class="button button-primary" :disabled="loading">{{ $t('button-reset') }}</button>
            </form>
            <p v-if="success" class="success">Bitte überprüfe deine E-Mails</p>

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
  name: "RequestReset",
  components :{
      'app-content-section': ContentSection,
      'app-footer': Footer
  },
  data() {
    return {
      email: undefined,
      success: false
    }
  },
  computed: mapState({
    loading: state => state.settings.loading
  }),
  mounted() {
  },
  methods: {
    request() {
      this.$store.dispatch('user/requestReset', this.email).then(res => {
        console.log(res)
        if (res) {
          this.success = true
        }
      })
    }
  }
};
</script>

<style scoped>

  .form-field {
    display: block;
  }

</style>
