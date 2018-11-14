<template>
  <app-content-section>
    <div class="content-wrapper">

      <register-form></register-form>

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
