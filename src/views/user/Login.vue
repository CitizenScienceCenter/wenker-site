<template>

  <div>

    <section class="section-content">
      <div class="content-wrapper">

        <div class="row">
          <div class="col col-form">

            <h2 class="title">{{ $t("views.user.login") }}</h2>
            <login-form></login-form>

          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LoginForm from "@/components/login-form.vue";
export default {
  name: "Login",
  components :{
    LoginForm
  }
};
</script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>
