<template>
  <div>

    <section class="section-content">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-form">

            <h2 class="title">Zurücksetzen</h2>
            <form @submit.prevent="request">
              <div class="form-field">
                <label for="email">{{ $t("views.user.email") }}</label>
                <input v-model="email" type="email" name="email" id="email" autocomplete="email" :disabled="loading" />
              </div>
              <button type="submit" class="primary" :disabled="loading">Zurücksetzen</button>
          </form>
          <p v-if="success" class="success">Bitte überprüfe deine E-Mails</p>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "RequestReset",
  components :{
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
