<template>
  <app-content-section>
    <div class="content-wrapper">

      <div class="row">
        <div class="col">

          <h2 class="title">Anmelden</h2>
          <login-form></login-form>

        </div>
      </div>

    </div>
  </app-content-section>
</template>

<script>
  import LoginForm from '@/components/login-form.vue'
  import ContentSection from '@/components/shared/ContentSection.vue'

  export default {
  name: "Login",
  components :{
    LoginForm,
      'app-content-section': ContentSection
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
