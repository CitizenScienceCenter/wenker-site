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
  "transcription-rule-5": "Alle Sonderzeichen sollten transkribiert werden! (Falls nicht möglich, siehe FAQs)."
  },
  "en": {
  "heading": "FAQ",
  "question-1": "What to do if you can't recognize a word/letter?",
  "answer-1": "If a word or a letter can't be deciphered, the following placeholder is inserted: [...]<br><a href='#transkriptionskonventionen'>see transcription conventions</a>",
  "question-2": "What to do if you can't transcribe a special character?",
  "answer-2": "Look in the existing special character table. If the desired special character doesn't exist, please contact us via <a href='mailto:info@citizenscience.ch'>info@citizenscience.ch</a>.",
  "question-3": "I come from X, I want to transcribe the sheet of Y, is that possible?",
  "answer-3": "Basically, that's possible, yes. You can transcribe as many sheets as you like. Only the own translation of the 40 sentences can only be done once.",
  "transcription-rules-heading": "Transcription Rules",
  "transcription-rule-1": "A suspected wording is written in square brackets [], for example: [T]ue das mache...",
  "transcription-rule-2": "If a word or letter can't be deciphered, the following placeholder is inserted: [...]",
  "transcription-rule-3": "If a word can't be completely deciphered, the following wildcard can be inserted: [unvollst.]",
  "transcription-rule-4": "Principle: The transcription should be as close as possible to the original!",
  "transcription-rule-5": "All special characters should be transcribed! (If not possible, see FAQs)."
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
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'FAQ',
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
