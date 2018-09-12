<template>
  <!--
  <div>
    <section>
      <img src="@/assets/img/wenker-banner.jpg">
      <router-link to="/projects/transcribe">Transcribe</router-link>
      <router-link to="/projects/translate">Translate</router-link>
    </section>
    <h1 class="title">Wenker Project</h1>
  </div>
  -->
  <div>

    <section class="section-cover">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-cover-text">
            <h2 class="cover-title">Schweizer&shy;deutsch<br/>1930 / 2020</h2>
            <p class="cover-text">Finde deinen Dialekt in den 40 Wenker-Sätzen.</p>
            <router-link to="/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34" tag="button" class="primary">Transkribieren</router-link>
            <router-link to="/projects/507b3f89-aff1-4fa3-8f28-9c8399811539" tag="button" class="primary">Übersetzen</router-link>
          </div>
        </div>
      </div>
      <a href="https://citizenscience.ch/"><img class="cscc_logo" src="@/assets/img/cscc_logo.png" alt="Citizen Science Center Zurich"/></a>
    </section>

    <section class="section-content">
      <div class="content-wrapper">
        <div class="row">
          <div class="col">
            <div class="image-box">
              <div class="row">
                <div class="col col-text-box">
                  <div class="text-box">
                    <h3>Die 40 Wenker-Sätze</h3>
                    <p>Im Rahmen eines sprachwissenschaftlichen Forschungsprojekts haben Lehrer mit ihren Schülern in den 1930er Jahren an vielen Schulen der Deutschschweiz 40 hochdeutsche Sätze in den jeweiligen Dorfdialekt übersetzt.</p>
                    <router-link to="/about" tag="button" class="secondary">Mehr zum Projekt</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-content">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-title">
            <h2>Helfen Sie mit.</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-action">
            <img src="@/assets/img/content/transcribe.svg" />
            <h3>Transkribieren</h3>
            <p>1700 Bögen Schweizer Wenkersätze / die Antworten sind handgeschrieben vor 100 Jahren / nicht maschinell lesbar sind / Helfen Sie mit bei deren Digitalisierung</p>
            <router-link to="/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34" tag="button" class="primary">Transkribieren</router-link>
          </div>
          <div class="col col-action">
            <img src="@/assets/img/content/translate.svg" />
            <h3>Übersetzen</h3>
            <p>einen Einblick in die moderne Mundart /  Möglichkeit, die Wenkersätze neu zu übersetzen / schreiben Sie Ihren Dialekt einfach so, wie Sie es gewohnt sind</p>
            <router-link to="/projects/507b3f89-aff1-4fa3-8f28-9c8399811539" tag="button" class="primary">Übersetzen</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section-content section-content-dark">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-wenker-image">
            <div class="wenker-portrait">
              <img class="cscc_logo" src="@/assets/img/content/wenker_square.jpg" alt="Citizen Science Center Zurich"/>
            </div>
          </div>
          <div class="col col-wenker-text">
            <div class="wenker-text">
              <h3>Georg Wenker</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <router-link to="/wenker" tag="button" class="secondary">Mehr zu Georg Wenker</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-content">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-title">
            <h2>Prof. Elvira Glaser erklärt</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-subtitle">
            <div class='embed-container'>
              <iframe src='https://www.youtube.com/embed/oFAI4rgYkt0' frameborder='0' allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  components: {},
  mounted() {
  },
  methods: {
    loadProject(id) {
      this.$router.push({name:'ProjectView', params: id})
    }
  }
}
</script>

<style scoped src='@/assets/styles/home/dashboard.scss'>
</style>
