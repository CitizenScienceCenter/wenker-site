<i18n>
  {
  "de": {

  "project-title": "Projekt<br/>Wenker"

  },
  "en": {

  "project-title": "Project<br/>Wenker"

  }
  }
</i18n>

<template>
  <div id="app">
    <app-header :project-name="$t('project-title')"></app-header>
    <div class="content-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from './components/shared/Header.vue';
import {mapState} from 'vuex';

export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  metaInfo: function() {
      return {
          // if no subcomponents specify a metaInfo.title, this title will be used
          title: '',
          // all titles will be injected into this template
          titleTemplate: '%s | '+this.$t('site-title'),
          meta: [
              {
                  name: 'description',
                  content: this.$t('site-description')
              },
              {
                  property: 'og:type',
                  content: 'website'
              },
              {
                  property: 'og:url',
                  content: 'https://wenker.citizenscience.ch'+this.$route.path
              },
              {
                  property: 'og:image',
                  content: 'https://wenker.citizenscience.ch/img/wenker-promo.jpg'
              }
          ],
          link: [
              {rel: 'canonical', href: 'https://wenker.citizenscience.ch'+this.$route.path}
          ],
          htmlAttrs: {
              lang: this.language
          }
      }
  },
  computed: mapState({
      language: state => state.settings.language
  }),
  mounted: function() {
    var app = this.$el;
    window.setTimeout(function() {
      app.classList.add("show");
    }, 1);

  }
}

</script>

<style lang="scss" src="@/styles/shared/main.scss"></style>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';

#app {
  opacity: 0;
  transition: all $transition-duration-super-long $transition-timing-function;
  &.show {
    opacity: 1;
  }
}
</style>
