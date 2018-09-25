<template>
  <div>
    <h1 class="title">User Details</h1>
    <section class="section-content">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-form">
              <form novalidate disabled v-if="user">
                <div class="form-field">
                  <label for="username">Username</label>
                  <input v-model="user.username" type="email" name="username" id="username" disabled />
                </div>

                <div class="form-field">
                  <label for="email">Email</label>
                  <input v-model="user.email" type="email" name="email" id="email" autocomplete="email" disabled />
                </div>

                <div class="form-field">
                  <label for="api">API Key</label>
                  <input v-model="user.api_key" type="text" name="api" id="api" disabled/>
                </div>

                <div class="form-field">
                  <label for="subs">Submissions</label>
                  <input v-model="subs.length" type="text" name="subs" id="subs" disabled/>
                </div>
            </form>
            <br>
            <router-link to="/logout"><button class="secondary">Abmelden</button></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ViewUser",
  data() {
    return {
      userId: this.$route.params.id,
      subs: []
    };
  },
  computed: mapState({
    user: state => state.user.currentUser,
    loading: state => state.settings.loading
  }),
  mounted() {
    console.log(this.user);
    if (this.userId !== undefined && this.userId !== this.user.id) {
      this.$store.dispatch("user/getUser", this.userId);
    }
    this.$store.dispatch("user/getSubs", this.user.id).then(subs => {
      this.subs = subs
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='@/assets/styles/main.scss'>
</style>
