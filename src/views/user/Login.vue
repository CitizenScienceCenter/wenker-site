<template>

  <div>

    <section class="section-content">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-form">

            <h2 class="title">Anmelden</h2>
            <login-form></login-form>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
  import LoginForm from '@/components/login-form.vue'

  export default {
  name: "Login",
  components :{
    LoginForm
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
