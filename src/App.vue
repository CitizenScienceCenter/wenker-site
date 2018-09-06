<template>
  <div>
    <header>
      <span class="home-title md-title"><a href="/"><img src="@/assets/img/logo.png"/></a></span>
      <!-- TODO logo here -->
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
    <md-progress-bar md-mode="indeterminate" v-if="loading" />

    <article>
      <router-view/>
      <!-- <md-divider></md-divider> -->
      <!-- <md-snackbar class="err-bar" :md-active.sync="showSnack" v-if="err">
        {{err.message}}
      </md-snackbar> -->
    </article>
    <!-- <br><br> -->
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
    this.$material.theming.theme = this.theme
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

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@import "src/assets/styles/theme.scss";
body {
  overflow-x: hidden;
  min-width: 100%;
}

.home-title {
  color: white !important;
  img {
    max-width: 20%;
  }
}

.err-bar {
  background-color: red !important;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  color: $acc !important;
  background-color: $prim !important;
  .md-list {
    background-color: $prim !important;
    color: $acc !important;
  }
  .md-list-item-content {
    color: $acc !important;
  }
}

// .footer {
//   height: 20%;
//   padding: 0 16px;
//   position: fixed;
//   min-width: 100%;
//   bottom: 0;
//   z-index: 4;
//   background-color: #eee;
// }


.footer {
  // padding-top: 4%;
  min-width: 100%;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  // max-height: 3%;
}
.page-container {
  min-height: 100%;
}


// .md-list-item {
//     color: white !important;
// }
</style>
