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
            <h2>Georg Wenker</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-text">
            <figure>
              <img src="@/assets/img/content/wenker.jpg" />
              <figcaption>Georg Wenker <a href="http://www.diwa.info/Geschichte/Kartierungsverfahren.aspx" target="_blank">© DIWA</a></figcaption>
            </figure>
            <h3>Die Geschichte eines Dialektliebhabers</h3>
            <p>
              Die Wenkersätze wurden in den 1930er Jahren zur Dokumentation des Schweizerdeutschen eingesetzt und haben eine interessante Vorgeschichte. Der junge Sprachwissenschaftler Georg Wenker unternahm im Jahr 1876 in Verbindung mit seiner Dissertation eigene empirische Untersuchungen der Mundart der Umgebung seiner Heimatstadt Düsseldorf. Dafür sammelte er anhand von Fragebogen Mundartproben jedes einzelnen Ortes. Er kreierte dazu die sogenannten 42 rheinischen Sätze in Schriftsprache, die er durch die Lehrer des jeweiligen Regierungsbezirkes zusammen mit ihren Schülern in die dort vorherrschende Mundart übertragen liess. Seine Ergebnisse wollte er in Dialektkarten und später in einem Sprachatlas abbilden.
            </p>
            <figure>
              <img src="@/assets/img/content/dialektkarte.jpg" />
              <figcaption>Beispiel für eine Dialektkarte, Quelle: <a href="https://www.uni-marburg.de/de/fb09/dsa/einrichtung/personen/juergen-erich-schmidt/publikationen-1/aufsaetze-und-rezensionen" target="_blank">Jürgen Erich Schmidt (2012)</a></figcaption>
            </figure>
            <p>
              Im Laufe der Jahre entwickelte Wenker die so genannten 40 Wenker-Sätze und dehnte sein Untersuchungsgebiet allmählich auf das gesamte Deutsche Reich aus. Was mit einem Dissertationsvorhaben begann, wurde zur Langzeitstudie: Aus den ursprünglich berechneten 13 Jahren Arbeit sollten schliesslich mehr als 50 werden. Doch dank der 20-jährigen Freistellung von seinem Dienst in der Marburger Universitätsbibliothek konnte sich Wenker voll und ganz auf die Fertigstellung des <a href="https://de.wikipedia.org/wiki/Deutscher_Sprachatlas" target="_blank">Sprachatlas des Deutschen Reichs</a> konzentrieren.
            </p>
            <figure>
              <img src="@/assets/img/content/wrede.jpg" />
              <figcaption>Ferdinand Wrede <a href="http://www.diwa.info/Geschichte/Kartierungsverfahren.aspx" target="_blank">© DIWA</a></figcaption>
            </figure>
            <p>
              Im Jahr 1912 übernahm Wenkers ehemaliger Hilfsarbeiter Ferdinand Wrede die Leitung des Sprachatlas. Unter seiner Führung wurden zwischen 1926 und 1933 Nacherhebungen für deutschsprachige Gebiete auch ausserhalb des Deutschen Reiches durchgeführt, so auch in der Schweiz. Die Schweizer Wenkerbogen wurden zwar wie alle anderen in einem aufwändigen Prozess digitalisiert und auf dem Server des Langzeitforschungsprojektes <a href="https://www.regionalsprache.de/" target="_blank">REDE</a> der Universität Marburg publiziert. Inhaltlich aufbereitet und ausgewertet wurden sie jedoch nie. Das möchten wir in unserem <router-link to="/home">Citizen Science Projekt</router-link> mit deiner Hilfe ändern.
            </p>
            <h4>Weiterführende Links</h4>
            <ul>
              <li>
                <a href="http://www.diwa.info/Geschichte/Kartierungsverfahren.aspx" target="_blank">Beschreibung des Kartierungsverfahrens des Deutschen Sprachatlas</a>
              </li>
              <li>
                <a href="/static/Auszug_Raggenbass_E.pdf" target="_blank">Auszug aus der Masterarbeit von Carmen Raggenbass zu den Wenkermaterialien aus dem Appenzell (Deutsches Seminar der Universität Zürich 2018)</a>
              </li>
            </ul>
            <h4>Die Wenkersätze</h4>
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
              <li>	Sein Bruder will sich zwei schöne neue Häuser in eurem Garten bauen.</li>
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
    </section>

  </div>
</template>

<script>
export default {
  name: 'Wenker',
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
