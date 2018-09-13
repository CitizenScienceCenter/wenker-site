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
            <p class="cover-text">Finde deinen Dialekt <br/>in den 40 Wenker-Sätzen.</p>
            <router-link to="/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34" tag="button" class="primary">Transkribieren</router-link>
            <router-link to="/projects/507b3f89-aff1-4fa3-8f28-9c8399811539" tag="button" class="primary">Übersetzen</router-link>
          </div>
        </div>
      </div>
      <a href="https://citizenscience.ch/" class="cscc_logo"><img src="@/assets/img/cscc_logo.png" alt="Citizen Science Center Zurich"/></a>
      <a href="http://archiv.sgv-sstp.ch/resource/447395" target="_blank" class="copyright">© SGV</a>
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
                    <p>Im Rahmen eines sprachwissenschaftlichen Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die lokalen Dialekte der Schweiz übersetzt. Diese Daten wurden jedoch nie umfassend ausgewertet. Hilf uns, diesen Schatz zu heben.</p>
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
            <h2>Deine Hilfe ist gefragt:</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-action">
            <img src="@/assets/img/content/transcribe.svg" />
            <h3>Transkribieren</h3>
            <p>Die 1700 handgeschriebenen Schweizer Wenker-Bögen müssen genau abgeschrieben werden, um sie digital aufzubereiten. Dafür brauchen wir deine Unterstützung!</p>
            <router-link to="/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34" tag="button" class="primary">Transkribieren</router-link>
          </div>
          <div class="col col-action">
            <img src="@/assets/img/content/translate.svg" />
            <h3>Übersetzen</h3>
            <p>Übersetze die originalen Wenker-Sätze in deinen Dialekt, wie du ihn heute sprichst. So können wir das Schweizerdeutsch von heute mit dem der 1930er Jahre vergleichen.</p>
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
              <h2>Die Geschichte eines Dialektliebhabers</h2>
              <p>Die Wenkersätze aus der Schweizer Sprachstudie haben eine interessante Vorgeschichte. Der junge Sprachwissenschaftler Georg Wenker hat sie aus einem ganz bestimmten Grund entwickelt.</p>
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

<style scoped src='@/assets/styles/home/home.scss'>
</style>
