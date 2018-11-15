<template>
  <app-content-section>
    <div class="content-wrapper">

        <div class="row row-centered">
          <div class="col col-large-6">

            <div class="form-section">

              <h2 class="title">Anmelden</h2>
              <register-form></register-form>

            </div>
            <div class="form-section">

              <h3 class="title">Registrieren</h3>
              <login-form></login-form>

            </div>

          </div>
        </div>

    </div>
  </app-content-section>

</template>
<script>

import RegisterForm from "@/components/login-form.vue";
import LoginForm from "@/components/register-form.vue";
import ContentSection from '@/components/shared/ContentSection.vue'

export default {
  name: "Welcome",
  components: {
      RegisterForm,
      LoginForm,
      'app-content-section': ContentSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
