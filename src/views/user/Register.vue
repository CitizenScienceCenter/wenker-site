<template>
  <app-content-section>
    <div class="content-wrapper">

      <div class="row row-centered">
        <div class="col col-large-6">

          <register-form></register-form>

        </div>
      </div>

    </div>
  </app-content-section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import RegisterForm from "@/components/register-form.vue";
import ContentSection from '@/components/shared/ContentSection.vue'

export default {
  name: "Register",
  components :{
    RegisterForm,
      'app-content-section': ContentSection
  }
};
</script>
