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
      <div class="row">
        <div class="col col-cover-text">
          <h2 class="cover-title">Schweizer&shy;deutsch<br/>1930 / 2020</h2>
          <p class="cover-text">Helfen Sie mit, den Schatz der Schweizer Wenkersätze zu digitalisieren und neu zu übersetzen.</p>
          <button class="primary">Transkribieren</button>
          <button class="primary">Übersetzen</button>
        </div>
      </div>
    </section>

    <section class="section-content">
      <div class="row">
        <div class="col">
          <div class="image-box">
            <div class="row">
              <div class="col col-text-box">
                <div class="text-box">
                  <h3>Die 40 Wenker-Sätze</h3>
                  <p>Im Rahmen eines sprachwissenschaftlichen Forschungsprojekts haben Lehrer mit ihren Schülern in den 1930er Jahren an vielen Schulen der Deutschschweiz 40 hochdeutsche Sätze in den jeweiligen Dorfdialekt übersetzt.</p>
                  <button class="secondary">Mehr zum Projekt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-content section-actions">
      <div class="row">
        <div class="col col-title">
          <h2>Helfen Sie mit.</h2>
        </div>
      </div>
      <div class="row">
        <div class="col col-action">
          <h3>Transkribieren</h3>
          <p>1700 Bögen Schweizer Wenkersätze / die Antworten sind handgeschrieben vor 100 Jahren / nicht maschinell lesbar sind / Helfen Sie mit bei deren Digitalisierung</p>
          <button class="primary">Transkribieren</button>
        </div>
        <div class="col col-action">
          <h3>Übersetzen</h3>
          <p>einen Einblick in die moderne Mundart /  Möglichkeit, die Wenkersätze neu zu übersetzen / schreiben Sie Ihren Dialekt einfach so, wie Sie es gewohnt sind</p>
          <button class="primary">Übersetzen</button>
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
