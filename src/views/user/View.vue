<template>
  <div>
    <h1 class="title">User Details</h1>
    <form novalidate disabled>
      <div v-if="user" class="md-layout">
        <div>
          <label for="user.email">Email</label>
          <input v-model="user.email" type="email" name="email" id="email" autocomplete="email" disabled/>
        </div>

        <div>
          <label for="user.email">API Key</label>
          <input v-model="user.api_key" type="text" name="api" id="api"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ViewUser",
  data() {
    return {
      userId: this.$route.params.id || this.$store.getters["user/id"]
    };
  },
  computed: mapState({
    user: state => state.user.user,
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
