<i18n>
{
  "de": {
    "cover-heading": "Schweizer­deutsch<br/>1930 / 2020",
    "cover-subheading": "Finde deinen Dialekt in den 40 Wenker-Sätzen.",
    "cover-button-transcribe": "Transkribieren",
    "cover-button-translate": "Übersetzen",

    "section-explanation-heading": "Die 40 Wenker-Sätze",
    "section-explanation-text": "Im Rahmen eines sprachwissenschaftlichen Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die lokalen Dialekte der Schweiz übersetzt. Diese Daten wurden jedoch nie umfassend ausgewertet. Hilf uns, diesen Schatz zu heben.",
    "section-explanation-button": "Mehr zum Projekt",

    "section-contribute-heading": "Deine Hilfe ist gefragt:",
    "section-contribute-1-heading": "Transkribieren",
    "section-contribute-1-text": "Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!",
    "section-contribute-1-button": "Transkribieren",
    "section-contribute-2-heading": "Übersetzen",
    "section-contribute-2-text": "Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.",
    "section-contribute-2-button": "Übersetzen",

    "section-wenker-heading": "Die Geschichte eines Dialektliebhabers",
    "section-wenker-text": "Die Wenkersätze aus der Schweizer Sprachstudie haben eine interessante Vorgeschichte. Der junge Sprachwissenschaftler Georg Wenker hat sie aus einem ganz bestimmten Grund entwickelt.",
    "section-wenker-button": "Mehr zu Georg Wenker",

    "section-video-heading": "Prof. Elvira Glaser erklärt",

    "section-newsletter-heading": "Sign up for our Newsletter"
  },
  "en": {
    "cover-heading": "Swiss German<br/>1930 / 2020",
    "cover-subheading": "Finde deinen Dialekt in den 40 Wenker-Sätzen.",
  "cover-button-transcribe": "Transkribieren",
  "cover-button-translate": "Übersetzen",

    "section-explanation-heading": "Die 40 Wenker-Sätze",
    "section-explanation-text": "Im Rahmen eines sprachwissenschaftlichen Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die lokalen Dialekte der Schweiz übersetzt. Diese Daten wurden jedoch nie umfassend ausgewertet. Hilf uns, diesen Schatz zu heben.",
    "section-explanation-button": "Mehr zum Projekt",

    "section-contribute-heading": "Deine Hilfe ist gefragt:",
    "section-contribute-1-heading": "Transkribieren",
    "section-contribute-1-text": "Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!",
    "section-contribute-1-button": "Transkribieren",
    "section-contribute-2-heading": "Übersetzen",
    "section-contribute-2-text": "Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.",
    "section-contribute-2-button": "Übersetzen",

    "section-wenker-heading": "Die Geschichte eines Dialektliebhabers",
    "section-wenker-text": "Die Wenkersätze aus der Schweizer Sprachstudie haben eine interessante Vorgeschichte. Der junge Sprachwissenschaftler Georg Wenker hat sie aus einem ganz bestimmten Grund entwickelt.",
    "section-wenker-button": "Mehr zu Georg Wenker",

    "section-video-heading": "Prof. Elvira Glaser erklärt",

    "section-newsletter-heading": "Sign up for our Newsletter"
  }
}
</i18n>

<template>
  <div>

    <app-cover imageUrl="img/cover.jpg">
      <div class="row row-centered">
        <div class="col col-large-8">
          <h2 class="cover-heading scroll-effect" v-html="$t('cover-heading')"></h2>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-6">
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1">{{ $t('cover-subheading') }}</p>
        </div>
      </div>
      <div class="row row-centered">
        <div class="col col-large-8">
          <p class="centered scroll-effect scroll-effect-delayed-2">
            <!--
            <button class="button button-primary" v-scroll-to="'#projects'">{{ $t('cover-button-projects') }}</button>
            <button class="button button-primary" v-scroll-to="'#start-project'">{{ $t('cover-button-your-project') }}</button>
            -->
            <router-link tag="button" to="/transcribe" class="button button-primary">{{ $t('cover-button-transcribe') }}</router-link>
            <router-link tag="button" to="/translate" class="button button-primary">{{ $t('cover-button-translate') }}</router-link>
          </p>
        </div>
      </div>
    </app-cover>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle">

          <div class="col col-10 col-large-6 col-wrapping col-large-no-bottom-margin scroll-effect">
            <div>
              <div class="extra-padding-large-h">
                <img src="img/graphic-sheet.png" />
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('section-explanation-heading') }}</h2>
              <p>{{ $t('section-explanation-text') }}</p>
              <p class="centered left-aligned-large">
                <router-link tag="button" to="/activities" class="button button-secondary">{{ $t('section-explanation-button') }}</router-link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">

          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered">{{ $t('section-contribute-heading') }}</h2>
          </div>

          <div class="col col-tablet-portrait-10 col-large-4 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="img/graphic-transcribe.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-contribute-1-heading') }}</h3>
            <p>{{ $t('section-contribute-1-text') }}</p>
            <p class="centered">
              <router-link tag="button" to="/offer" class="button button-primary">{{ $t('section-contribute-1-button') }}</router-link>
            </p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-3">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="img/graphic-translate.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-contribute-2-heading') }}</h3>
            <p>{{ $t('section-contribute-2-text') }}</p>
            <p class="centered">
              <router-link tag="button" to="/offer" class="button button-primary">{{ $t('section-contribute-2-button') }}</router-link>
            </p>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="dark">
      <div class="content-wrapper">
        <div class="row row-centered row-middle row-reverse-large">

          <div class="col col-10 col-large-6 col-wrapping col-large-no-bottom-margin scroll-effect">
            <div>
              <div class="extra-padding-large-h">
                <img src="img/wenker_square.jpg" style="border-radius:50%" />
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('section-wenker-heading') }}</h2>
              <p>{{ $t('section-wenker-text') }}</p>
              <p class="centered left-aligned-large">
                <router-link tag="button" to="/activities" class="button button-secondary button-secondary-inverted">{{ $t('section-wenker-button') }}</router-link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">

          <div class="col col-10 col-large-6 scroll-effect">
            <div>
              <h2 class="heading centered">{{ $t('section-video-heading') }}</h2>

              <div class='embed-container'>
                <iframe src='https://www.youtube.com/embed/oFAI4rgYkt0' frameborder='0' allowfullscreen></iframe>
              </div>

            </div>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-mobile-large-10">
            <h2 class="heading centered">{{ $t('section-newsletter-heading') }}</h2>
          </div>
        </div>
        <div class="row row-centered">
          <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-12">
            <app-newsletter-signup></app-newsletter-signup>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-footer color="greyish"></app-footer>

  </div>
</template>

<script>

import Cover from '@/components/shared/Cover.vue'
import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'Home',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
