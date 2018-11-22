<i18n>
  {
    "de": {
      "heading": "Die Geschichte eines Dialektliebhabers",
      "text-1": "Die Wenkersätze wurden in den 1930er Jahren zur Dokumentation des Schweizerdeutschen eingesetzt und haben eine interessante Vorgeschichte. Der junge Sprachwissenschaftler Georg Wenker unternahm im Jahr 1876 in Verbindung mit seiner Dissertation eigene empirische Untersuchungen der Mundart der Umgebung seiner Heimatstadt Düsseldorf. Dafür sammelte er anhand von Fragebogen Mundartproben jedes einzelnen Ortes. Er kreierte dazu die sogenannten 42 rheinischen Sätze in Schriftsprache, die er durch die Lehrer des jeweiligen Regierungsbezirkes zusammen mit ihren Schülern in die dort vorherrschende Mundart übertragen liess. Seine Ergebnisse wollte er in Dialektkarten und später in einem Sprachatlas abbilden.",
      "figure-2-caption": "Beispiel für eine Dialektkarte, Quelle:",
      "text-2": "Im Laufe der Jahre entwickelte Wenker die so genannten 40 Wenker-Sätze und dehnte sein Untersuchungsgebiet allmählich auf das gesamte Deutsche Reich aus. Was mit einem Dissertationsvorhaben begann, wurde zur Langzeitstudie: Aus den ursprünglich berechneten 13 Jahren Arbeit sollten schliesslich mehr als 50 werden. Doch dank der 20-jährigen Freistellung von seinem Dienst in der Marburger Universitätsbibliothek konnte sich Wenker voll und ganz auf die Fertigstellung des <a href='https://de.wikipedia.org/wiki/Deutscher_Sprachatlas' target='_blank'>Sprachatlas des Deutschen Reichs</a> konzentrieren.",
      "text-3": "Im Jahr 1912 übernahm Wenkers ehemaliger Hilfsarbeiter Ferdinand Wrede die Leitung des Sprachatlas. Unter seiner Führung wurden zwischen 1926 und 1933 Nacherhebungen für deutschsprachige Gebiete auch ausserhalb des Deutschen Reiches durchgeführt, so auch in der Schweiz. Die Schweizer Wenkerbogen wurden zwar wie alle anderen in einem aufwändigen Prozess digitalisiert und auf dem Server des Langzeitforschungsprojektes <a href='https://www.regionalsprache.de/' target='_blank'>REDE</a> der Universität Marburg publiziert. Inhaltlich aufbereitet und ausgewertet wurden sie jedoch nie. Das möchten wir in unserem <router-link to='/home'>Citizen Science Projekt</router-link> mit deiner Hilfe ändern.",
      "links-heading": "Weiterführende Links",
      "sentences-heading": "Die Wenkersätze"
    },
    "en": {
      "heading": "The story of a dialect lover",
      "text-1": "Wenker’s phrases (german “Wenkersätze”) were used in the 1930s for the documentation of Swiss German and have an interesting history: in 1876, the young linguist Georg Wenker planned some empirical studies for his dissertation about the dialect of his home region around Düsseldorf. He used questionnaires to collect dialect samples of each individual village. For this purpose he created the so-called 42 Rhenish sentences in standard German, which he had translated by the teachers of the respective government district together with their students in the prevailing dialect there. In order to make his results visible, he planned to produce detailed dialect maps and, later on, a language atlas.",
      "figure-2-caption": "Example of a dialect map, source:",
      "text-2": "After several years of work, Wenker created 40 sentences, so called “Wenkersätze”, and extended his research area to the national level. What started with the goal to do one dissertation, quickly became a long-term study: the originally calculated 13 years of work eventually became more than 50. But thanks to the 20-year-release of his library service in the University Library in Marburg, Wenker was able to focus only on the completion of the “Sprachatlas des Deutschen Reichs&quot;, the language atlas of the German Reich.",
      "text-3": "In 1912, Wenkers former assistant Ferdinand Wrede took over the leadership of the language atlas of the German Reich. Under his leadership between 1926 and 1933 additional investigations were carried out for German-speaking areas outside the German Reich, including Switzerland.<br>Like all the other Wenker sheets the ones from Switzerland were finally digitized and published on the server of the long-term research project REDE (Link: regionalsprache.de) at the University of Marburg. However they were never prepared or analysed content-wise. We want to change that today with our Citizen Science Project.",
      "links-heading": "Links",
      "sentences-heading": "The Wenker Sentences"
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
              <p>
                <figure>
                  <img src="img/wenker.jpg" />
                  <figcaption>Georg Wenker <a href="http://www.diwa.info/Geschichte/Kartierungsverfahren.aspx" target="_blank">© DIWA</a></figcaption>
                </figure>
              </p>
              <p v-html="$t('text-1')"></p>
              <p>
                <figure>
                  <img src="img/dialektkarte.jpg" />
                  <figcaption>{{ $t('figure-2-caption') }} <a href="https://www.uni-marburg.de/de/fb09/dsa/einrichtung/personen/juergen-erich-schmidt/publikationen-1/aufsaetze-und-rezensionen" target="_blank">Jürgen Erich Schmidt (2012)</a></figcaption>
                </figure>
              </p>
              <p v-html="$t('text-2')"></p>
              <p>
                <figure>
                  <img src="img/wrede.jpg" />
                  <figcaption>Ferdinand Wrede <a href="http://www.diwa.info/Geschichte/Kartierungsverfahren.aspx" target="_blank">© DIWA</a></figcaption>
                </figure>
              </p>
              <p v-html="$t('text-3')"></p>

            </div>
            <div class="content-subsection">

              <h2 class="heading">{{ $t('links-heading') }}</h2>
              <ul>
                <li>
                  <a href="http://www.diwa.info/Geschichte/Kartierungsverfahren.aspx" target="_blank">Beschreibung des Kartierungsverfahrens des Deutschen Sprachatlas</a>
                </li>
                <li>
                  <a href="pdf/Auszug_Raggenbass_E.pdf" target="_blank">Auszug aus der Masterarbeit von Carmen Raggenbass zu den Wenkermaterialien aus dem Appenzell (Deutsches Seminar der Universität Zürich 2018)</a>
                </li>
              </ul>

            </div>
            <div class="content-subsection">

              <h2 class="heading">{{ $t('sentences-heading') }}</h2>
              <h4></h4>
              <ol class="list-sentences">
                <li>Im Winter fliegen die trocknen Blätter durch die Luft herum.</li>
                <li>Es hört gleich auf zu schneien, dann wird das Wetter wieder besser.</li>
                <li>Thu Kohlen in den Ofen, daß die Milch bald an zu kochen fängt.</li>
                <li>Der gute alte Mann ist mit dem Pferde durch´s Eis gebrochen und in das kalte Wasser gefallen.</li>
                <li>Er ist vor vier oder sechs Wochen gestorben.</li>
                <li>Das Feuer war zu stark/heiß, die Kuchen sind ja unten ganz schwarz gebrannt.</li>
                <li>Er ißt die Eier immer ohne Salz und Pfeffer.</li>
                <li>Die Füße thun mir sehr weh, ich glaube, ich habe sie durchgelaufen.</li>
                <li>Ich bin bei der Frau gewesen und habe es ihr gesagt, und sie sagte, sie wollte es auch ihrer Tochter sagen.</li>
                <li>Ich will es auch nicht mehr wieder thun!</li>
                <li>Ich schlage Dich gleich mit dem Kochlöffel um die Ohren, Du Affe!</li>
                <li>Wo gehst Du hin? Sollen wir mit Dir gehn?</li>
                <li>Es sind schlechte Zeiten.</li>
                <li>Mein liebes Kind, bleib hier unten stehn, die bösen Gänse beißen Dich todt.</li>
                <li>Du hast heute am meisten gelernt und bist artig gewesen, Du darfst früher nach Hause gehn als die Andern.</li>
                <li>Du bist noch nicht groß genug, um eine Flasche Wein auszutrinken, Du mußt erst noch ein Ende/etwas wachsen und größer werden.</li>
                <li>Geh, sei so gut und sag Deiner Schwester, sie sollte die Kleider für eure Mutter fertig nähen und mit der Bürste rein machen.</li>
                <li>Hättest Du ihn gekannt! dann wäre es anders gekommen, und es thäte besser um ihn stehen.</li>
                <li>Wer hat mir meinen Korb mit Fleisch gestohlen?</li>
                <li>Er that so, als hätten sie ihn zum dreschen bestellt; sie haben es aber selbst gethan.</li>
                <li>Wem hat er die neue Geschichte erzählt?</li>
                <li>Man muß laut schreien, sonst versteht er uns nicht.</li>
                <li>Wir sind müde und haben Durst.</li>
                <li>Als wir gestern Abend zurück kamen, da lagen die Andern schon zu Bett und waren fest am schlafen.</li>
                <li>Der Schnee ist diese Nacht bei uns liegen geblieben, aber heute Morgen ist er geschmolzen.</li>
                <li>Hinter unserm Hause stehen drei schöne Apfelbäumchen mit rothen Aepfelchen.</li>
                <li>Könnt ihr nicht noch ein Augenblickchen auf uns warten, dann gehn wir mit euch.</li>
                <li>Ihr dürft nicht solche Kindereien treiben!</li>
                <li>Unsere Berge sind nicht sehr hoch, die euren sind viel höher.</li>
                <li>Wieviel Pfund Wurst und wieviel Brod wollt ihr haben?</li>
                <li>Ich verstehe euch nicht, ihr müßt ein bißchen lauter sprechen.</li>
                <li>Habt ihr kein Stückchen weiße Seife für mich auf meinem Tische gefunden?</li>
                <li>Sein Bruder will sich zwei schöne neue Häuser in eurem Garten bauen.</li>
                <li>Das Wort kam ihm von Herzen!</li>
                <li>Das war recht von ihnen!</li>
                <li>Was sitzen da für Vögelchen oben auf dem Mäuerchen?</li>
                <li>Die Bauern hatten fünf Ochsen und neun Kühe und zwölf Schäfchen vor das Dorf gebracht, die wollten sie verkaufen.</li>
                <li>Die Leute sind heute alle draußen auf dem Felde und mähen/hauen.</li>
                <li>Geh nur, der braune Hund thut Dir nichts.</li>
                <li>Ich bin mit den Leuten da hinten über die Wiese ins Korn gefahren.</li>
              </ol>

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
  name: 'Wenker',
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
