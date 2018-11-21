<i18n>
  {
    "de": {
      "heading": "Ihr Profil",
      "label-email": "Email",
      "label-api-key": "API Key"
    },
    "en": {
      "heading": "Your Profile",
      "label-email": "Email",
      "label-api-key": "API Key"
    }
  }
</i18n>

<template>
  <app-content-section>
    <div class="content-wrapper">

      <div class="row row-centered">
        <div class="col col-large-6">

          <div class="content-subsection">
            <h2 class="heading">{{ $t('heading') }}</h2>

            <form novalidate disabled>
              <div v-if="user" class="md-layout">
                <div>
                  <label for="user.email">{{ $t('label-email') }}</label>
                  <!-- <input v-model="user.email" type="email" name="email" id="email" autocomplete="email" disabled/> -->
                  <p>{{ user.email }}</p>
                </div>

                <div>
                  <label for="user.api_key">{{ $t('label-api-key') }}</label>
                  <!-- <input v-model="user.api_key" type="text" name="api" id="api"/> -->
                  <p>{{ user.api_key }}</p>
                </div>
              </div>
            </form>
          </div>
          <div class="content-subsection">
            <router-link tag="button" to="/logout" class="button button-secondary">Logout</router-link>
          </div>

        </div>
      </div>

    </div>
  </app-content-section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import ContentSection from '@/components/shared/ContentSection.vue'

export default {
  name: "ViewUser",
    components: {
        'app-content-section': ContentSection
    },
  data() {
    return {
      userId: this.$route.params.id || this.$store.getters["user/id"]
    };
  },
  computed: mapState({
    //user: state => state.user.user,
      user: state => state.c3s.user.currentUser,
    loading: state => state.settings.loading
  }),
  mounted() {
    if (this.userId !== this.user.id) {
      this.$store.dispatch("user/getUser", this.userId);
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
