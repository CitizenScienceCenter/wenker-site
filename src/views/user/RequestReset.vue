<template>
  <app-content-section>
    <div class="content-wrapper">

        <div class="row">
          <div class="col">

            <h2 class="title">Zurücksetzen</h2>
            <form @submit.prevent="request">
              <div class="form-field">
                <label for="email">{{ $t("views.user.email") }}</label>
                <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
              </div>
              <button type="submit" class="button button-primary" :disabled="loading">Zurücksetzen</button>
          </form>
          <p v-if="success" class="success">Bitte überprüfe deine E-Mails</p>

          </div>
        </div>

    </div>
  </app-content-section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ContentSection from '@/components/shared/ContentSection.vue'

export default {
  name: "RequestReset",
  components :{
      'app-content-section': ContentSection
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
