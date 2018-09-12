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

    <section class="section-content">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-title">
            <h2>Fragen und Antworten</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-text">
            <h3>Was tun, wenn man ein Wort/Buchstabe nicht erkennt?</h3>
            <p>
              Wenn ein Wort oder ein Buchstabe nicht entziffert werden kann, wird folgender Platzhalter eingefügt: [...] --> siehe Transkriptionskonventionen
            </p>
            <h3>Was tun, wenn man ein Sonderzeichen nicht transkribieren kann?</h3>
            <p>
              Schauen Sie in der vorhandenen Sonderzeichentabelle nach. Falls das gewünschte Sonderzeichen nicht vorhanden ist, schreiben Sie eine Mail an info@citizenscience.ch.
            </p>
            <h3>Ich komme von X, ich möchte den Bogen von Y transkribieren, ist das möglich?</h3>
            <p>
              Grundsätzlich ist das möglich, ja. Sie können so viele Bögen transkribieren, wie Sie möchten. Nur die eigene Übersetzung der 40 Sätze kann nur einmal erfolgen.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
    }
  },
  components: {},
  mounted() {
  }
}
</script>

<style></style>
