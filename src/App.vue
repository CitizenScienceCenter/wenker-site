<template>
  <div>
    <!--
    <header>
      <span class="home-title md-title"><a href="/"><img src="@/assets/img/logo.png"/></a></span>
          <div class="">
            <span>{{locale}}</span>
            <ul>
              <li @click="setLocale('en')">English</li>
              <li @click="setLocale('de')">Deutsch</li>
            </ul>
          </div>
          <div v-if="user">
            <span v-if="checkAnon()">A</span>
            <span v-if="!checkAnon()"><router-link to="/user">{{user.username.charAt(0)}}</router-link></span>
            <ul>
              <li :click="switchAnon" v-if="checkAnon()">Sign up</li>
            </ul>
        </div>
    </header>
  -->

    <header>
      <h1><a href="#" class="logo"><img src="@/assets/img/logo.png" alt="Wenker Project – Citizen Science Center Zurich"/></a></h1>
      <ul class="navigation">
        <li class="active"><a href="#">Active</a></li>
        <li><a href="#">Transkribieren</a></li>
        <li><a href="#">Übersetzen</a></li>
        <li><a href="#">Das Projekt</a></li>
        <li><a href="#">Georg Wenker</a></li>
        <li><a href="#">FAQ</a></li>
        <li class="separated"><a href="#">Anmelden</a></li>
      </ul>
    </header>


    <article id="app">
      <router-view/>
    </article>

    <CCFooter class='footer'></CCFooter>

  </div>

</template>

<script>
import CCFooter from '@/components/ccfooter.vue'
import Breadcrumbs from '@/components/breadcrumb.vue'
import { mapState, mapGetters } from "vuex"
export default {
  name:"app",
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    showSnack: false
  }),
  components: {
    CCFooter,
    Breadcrumbs
  },
  watch: {
    'err' (to, from) {
      this.showSnack = to !== null ? true : false;
    },
    'user' (to, from) {
      // TODO execute validation here when user changes
    }
  },
  created() {
    console.log(this.user)
  },
  computed: {
    ...mapState({
      loading: state => state.settings.loading,
      locale: state => state.settings.locale,
      err: state => state.settings.err,
      theme: state => state.settings.theme,
      user: state => state.user.currentUser,
    }),
  },
  methods: {
    setLocale(val) {
      this.$i18n.set(val);
      this.$store.dispatch('settings/setLoc', val);
    },
    switchAnon() {
      this.$store.dispatch('user/logout').then(res => this.$router.push({name:'Register'}))
    },
    checkAnon() {
      if (this.user && this.user.username && this.user.username.indexOf('anon') !== -1) {
        return true
      } else {
        return false
      }
    }
  }
};
</script>

<style lang="scss" src="@/assets/styles/main.scss">



</style>
