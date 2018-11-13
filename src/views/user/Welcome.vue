<template>
  <div>

    <section class="section-content">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-form">

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
    </section>

  </div>
</template>
<script>
import RegisterForm from "@/components/login-form.vue";
import LoginForm from "@/components/register-form.vue";
export default {
  name: "Welcome",
  components: {
    RegisterForm, LoginForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
