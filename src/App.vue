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
      <h1><router-link to="/home"><span class="project-title">Projekt Wenker</span><img src="@/assets/img/uzh_eth_logo.svg" alt="Wenker Project – Citizen Science Center Zurich"/></router-link></h1>
      <ul class="navigation">
        <li><router-link to="/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34">Transkribieren</router-link></li>
        <li><router-link to="/projects/507b3f89-aff1-4fa3-8f28-9c8399811539" href="#">Übersetzen</router-link></li>
        <li><router-link to="/about">Das Projekt</router-link></li>
        <li><router-link to="/wenker">Georg Wenker</router-link></li>
        <li><router-link to="/faq">FAQ</router-link></li>
        <li class="separated">
          <router-link v-if="!user || (user && user.username && user.username.indexOf('anon')!==-1)" to="/welcome">Anmelden</router-link>
          <router-link v-if="(user && user.username && user.username.indexOf('anon')===-1)" to="/logout">Abmelden</router-link>
        </li>
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
    },
  },
  created() {
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

<style lang="scss" src="@/assets/styles/main.scss"></style>
