<i18n>
  {
  "de": {
  "heading": "Fragen und Antworten",
  "question-1": "Was tun, wenn man ein Wort/Buchstabe nicht erkennt?",
  "answer-1": "Wenn ein Wort oder ein Buchstabe nicht entziffert werden kann, wird folgender Platzhalter eingefügt: [...]<br><a href='#transkriptionskonventionen'>siehe Transkriptionskonventionen</a>",
  "question-2": "Was tun, wenn man ein Sonderzeichen nicht transkribieren kann?",
  "answer-2": "Schauen Sie in der vorhandenen Sonderzeichentabelle nach. Falls das gewünschte Sonderzeichen nicht vorhanden ist, schreiben Sie eine Mail an <a href='mailto:info@citizenscience.ch'>info@citizenscience.ch</a>.",
  "question-3": "Ich komme von X, ich möchte den Bogen von Y transkribieren, ist das möglich?",
  "answer-3": "Grundsätzlich ist das möglich, ja. Sie können so viele Bögen transkribieren, wie Sie möchten. Nur die eigene Übersetzung der 40 Sätze kann nur einmal erfolgen.",
  "transcription-rules-heading": "Transkribierungskonventionen",
  "transcription-rule-1": "Ein vermuteter Wortlaut wird in eckigen Klammern [] geschrieben, z. B. [T]ue das mache...",
  "transcription-rule-2": "Wenn ein Wort oder ein Buchstabe nicht entziffert werden kann, wird folgender Platzhalter eingefügt: [...]",
  "transcription-rule-3": "Falls ein Wort nicht vollständig entziffert werden kann, kann folgender Platzhalter eingefügt werden: [unvollst.]",
  "transcription-rule-4": "Grundsatz: Die Transkription soll möglichst nahe am Original sein!",
  "transcription-rule-5": "Alle Sonderzeichen sollten transkribiert werden! (Falls nicht möglich, siehe FAQs).",
  "transcription-rule-6": "Kommentare können Sie in dem Kommentarfeld hinterlassen."
  },
  "en": {
  "heading": "FAQ",
  "question-1": "What to do when you don't recognize a word/character?",
  "answer-1": "Wenn ein Wort oder ein Buchstabe nicht entziffert werden kann, wird folgender Platzhalter eingefügt: [...]<br><a href='#transkriptionskonventionen'>siehe Transkriptionskonventionen</a>",
  "question-2": "What to do if a special character cannot be transcribed?",
  "answer-2": "Schauen Sie in der vorhandenen Sonderzeichentabelle nach. Falls das gewünschte Sonderzeichen nicht vorhanden ist, schreiben Sie eine Mail an <a href='mailto:info@citizenscience.ch'>info@citizenscience.ch</a>.",
  "question-3": "I'm coming from X and would like to transcribe sheets from Y. Is that possible?",
  "answer-3": "Grundsätzlich ist das möglich, ja. Sie können so viele Bögen transkribieren, wie Sie möchten. Nur die eigene Übersetzung der 40 Sätze kann nur einmal erfolgen.",
  "transcription-rules-heading": "Transcription Rules",
  "transcription-rule-1": "Ein vermuteter Wortlaut wird in eckigen Klammern [] geschrieben, z. B. [T]ue das mache...",
  "transcription-rule-2": "Wenn ein Wort oder ein Buchstabe nicht entziffert werden kann, wird folgender Platzhalter eingefügt: [...]",
  "transcription-rule-3": "Falls ein Wort nicht vollständig entziffert werden kann, kann folgender Platzhalter eingefügt werden: [unvollst.]",
  "transcription-rule-4": "Grundsatz: Die Transkription soll möglichst nahe am Original sein!",
  "transcription-rule-5": "Alle Sonderzeichen sollten transkribiert werden! (Falls nicht möglich, siehe FAQs).",
  "transcription-rule-6": "Kommentare können Sie in dem Kommentarfeld hinterlassen."
  }
  }
</i18n>


<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-6">

            <div class="content-subsection">

              <h2 class="heading">{{ $t('heading') }}</h2>

              <h3 class="subheading">{{ $t('question-1') }}</h3>
              <p v-html="$t('answer-1')"></p>

              <h3 class="subheading">{{ $t('question-2') }}</h3>
              <p v-html="$t('answer-2')"></p>

              <h3 class="subheading">{{ $t('question-3') }}</h3>
              <p v-html="$t('answer-3')"></p>

            </div>
            <div class="content-subsection">

              <h2 class="heading" id="transkriptionskonventionen">{{ $t('transcription-rules-heading') }}</h2>

              <ul>
                <li>{{ $t('transcription-rule-1') }}</li>
                <li>{{ $t('transcription-rule-2') }}</li>
                <li>{{ $t('transcription-rule-3') }}</li>
                <li>{{ $t('transcription-rule-4') }}</li>
                <li>{{ $t('transcription-rule-5') }}</li>
                <li>{{ $t('transcription-rule-6') }}</li>
              </ul>

            </div>

          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-mobile-large-10">
            <h2 class="heading centered">Sign up for our Newsletter</h2>
          </div>
        </div>
        <div class="row row-centered">
          <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-12">
            <app-newsletter-signup></app-newsletter-signup>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>

import Cover from '@/components/shared/Cover.vue'
import ContentSection from '@/components/shared/ContentSection.vue'
import PeopleList from '@/components/shared/PeopleList.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'FAQ',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-people-list': PeopleList,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
