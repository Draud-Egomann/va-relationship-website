<script lang="ts" setup>
const technologies = [
  {
    name: 'Font Awesome',
    descriptions: [
      "Font Awesome wird betrieben von Fonticons, Inc., mit Sitz in 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA.Font Awesome ist eine Sammlung von skalierbaren Vektor - Icons, die Website - Entwicklern ermöglicht, verschiedene Icons und soziale Logos auf ihren Websites zu integrieren.",
      "Wir nutzen Font Awesome, um visuelle Icons auf unserer Website zu integrieren. Dies kann beispielsweise Icons für Benutzeroberflächen, soziale Medien - Links oder andere grafische Darstellungen umfassen, die das Design und die Benutzererfahrung unserer Website verbessern.",
      "Font Awesome kann Webfonts von den Servern von Fonticons, Inc. laden, wenn ein Benutzer unsere Website besucht.Dabei wird die IP - Adresse des Benutzers an Fonticons, Inc. gesendet.Dies ist notwendig, damit der Webbrowser des Benutzers die Font Awesome - Icons korrekt anzeigen kann.",
      "Fonticons, Inc. speichert die IP-Adressen der Benutzer nur kurzzeitig und ausschliesslich zum Zweck der Bereitstellung der Font Awesome - Icons.Es findet keine weitergehende Speicherung oder Analyse statt.",
    ]
  },
  {
    name: 'jsDelivr',
    descriptions: [
      "Die Nutzung von jsDelivr dient der Optimierung und Verbesserung der Performance unserer Website. Die Datenverarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer effizienten und sicheren Bereitstellung unserer Website.",
      "jsDelivr verwendet diese Daten, um die Auslieferung der Inhalte zu gewährleisten und um statistische Auswertungen über die Nutzung ihres Dienstes zu erstellen.Die Daten werden nicht mit anderen Datenquellen zusammengeführt oder zu Werbezwecken verwendet.",
      "Durch die Einbindung von jsDelivr werden beim Aufruf unserer Webseite Daten, wie Ihre IP - Adresse, Informationen über den verwendeten Browser, das Betriebssystem und die Dauer des Seitenaufrufs, an Server von jsDelivr übertragen.Dies geschieht, um die Inhalte schneller und effizienter an Ihren Browser zu liefern und die Ladezeit der Webseite zu verkürzen.",
      "Auf unserer Website nutzen wir den Dienst jsDelivr, ein Open-Source-CDN (Content Delivery Network), um bestimmte Bibliotheken und Skripte schneller und zuverlässiger zu laden.Dieser Dienst wird von ProspectOne Sp.z o.o., ul. Krolweska 65A, 30 -081 Krakow, Polen, bereitgestellt.",
    ]
  },
  {
    name: 'Google Fonts',
    descriptions: [
      "Unsere Website verwendet Google Fonts, einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.Google Fonts ermöglicht die Einbindung von Schriftarten, um die Gestaltung und Benutzererfahrung unserer Website zu verbessern.",
      "Beim Zugriff auf unsere Website lädt Ihr Browser die benötigten Schriftarten direkt von den Servern von Google.Dabei können Daten wie Ihre IP - Adresse sowie technische Informationen über den verwendeten Browser und das Betriebssystem an Google übertragen werden.",
      "Diese Daten werden ausschliesslich für die Bereitstellung der Schriftarten verwendet. Es erfolgt keine Verknüpfung mit anderen Google-Diensten oder eine weitergehende Verarbeitung zu Werbezwecken.",
      "Die Nutzung von Google Fonts erfolgt auf Grundlage unseres berechtigten Interesses an einer einheitlichen und ansprechenden Darstellung unserer Website.",
    ]
  }
]
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <h1 class="text-2xl font-bold mb-4">Datenschutzerklärung</h1>
    <p class="mb-4">Zuletzt aktualisiert am: 03.12.2024</p>

    <h2 class="text-xl font-semibold mt-6">Kontaktinformationen</h2>
    <p class="mb-4">
      Bei Fragen oder Anliegen zum Schutz Ihrer Daten durch uns erreichen Sie uns jederzeit per E-Mail unter
      <NuxtLink to="mailto:l1rsfg3jo@mozmail.com" class="text-blue-500 underline">
        l1rsfg3jo{at}mozmail{dot}com
      </NuxtLink>.
    </p>

    <h2 class="text-xl font-semibold mt-6">Allgemeine Grundsätze</h2>
    <p class="mb-4">
      Unsere Webseite kann grundsätzlich ohne Registrierung besucht werden. Bei Ihrem Besuch erheben wir Daten nur in
      dem Umfang, wie es technisch unbedingt notwendig ist, um Ihnen unsere Webseite anzeigen zu können und die
      Stabilität und Sicherheit zu gewährleisten.
    </p>

    <h2 class="text-xl font-semibold mt-6">Personenbezogene Daten</h2>
    <p class="mb-4">
      Personenbezogene Daten sind Informationen, die dazu genutzt werden können, Ihre Identität zu erfahren. Darunter
      fallen Informationen wie Ihr Name, Adresse, Postanschrift, Telefonnummer. Informationen, die nicht mit Ihrer
      Identität in Verbindung gebracht werden (wie zum Beispiel Anzahl der Nutzer der Seite), fallen nicht darunter.
    </p>

    <h2 class="text-xl font-semibold mt-6">Welche Rechte haben Sie?</h2>

    <h3 class="text-lg font-semibold mt-4">Auskunftsrecht</h3>
    <p class="mb-4">
      Sie können jederzeit eine Auskunft über die von uns über Sie gespeicherten Daten verlangen. Wir bitten Sie, Ihr
      Auskunftsgesuch zusammen mit einem Identitätsnachweis an
      <NuxtLink to="mailto:l1rsfg3jo@mozmail.com" class="text-blue-500 underline">
        l1rsfg3jo{at}mozmail{dot}com
      </NuxtLink>
      zu senden.
    </p>

    <p>
      Sie haben ausserdem das Recht, Ihre Daten in einem gängigen Dateiformat zu erhalten, wenn wir Ihre Daten
      automatisiert bearbeiten, und wenn:
    </p>

    <ul class="list-disc pl-6 mb-4">
      <li>
        <p>
          Sie Ihre Einwilligung für die Bearbeitung dieser Daten erteilt haben
        </p>
      </li>
      <li>
        <p>
          Sie Daten im Zusammenhang mit dem Abschluss oder der Abwicklung eines Vertrags bekannt gegeben haben.
        </p>
      </li>
    </ul>

    <p class="mb-4">
      Wir können die Auskunft bzw. Datenherausgabe einschränken oder verweigern, wenn dies unseren gesetzlichen
      Verpflichtungen, berechtigten eigenen oder öffentlichen Interessen oder Interessen einer Drittperson
      entgegensteht.
    </p>

    <p class="mb-4">
      Die Bearbeitung Ihres Gesuchs unterliegt der gesetzlichen Bearbeitungsfrist von 30 Tagen. Diese Frist dürfen wir
      jedoch aufgrund von hohem Anfragevolumen, aus rechtlichen oder technischen Gründen oder weil wir nähere Angaben
      von Ihnen benötigen, verlängern. Sie werden über die Fristverlängerung rechtzeitig mindestens in Textform
      informiert.
    </p>

    <h3 class="text-lg font-semibold mt-4">Löschung und Berichtigung</h3>
    <p class="mb-4">
      Sie haben jederzeit die Möglichkeit, die Löschung oder Berichtigung Ihrer Daten zu verlangen. Wir können das
      Gesuch abweisen, wenn gesetzliche Vorschriften uns zur längeren bzw. unveränderten Aufbewahrung verpflichten
      oder ein Erlaubnistatbestand Ihrem Gesuch entgegensteht.
    </p>

    <p class="mb-4">
      Bitte beachten Sie, dass die Ausübung Ihrer Rechte unter Umständen im Konflikt mit vertraglichen Abmachungen
      stehen und entsprechende Auswirkungen auf die Vertragsdurchführung haben kann (z.B. vorzeitige Vertragsauflösung
      oder Kostenfolgen).
    </p>

    <h2 class="text-xl font-semibold mt-6">Cookies und ähnliche Technologien</h2>

    <div v-for="technology in technologies">
      <h3 class="text-lg font-semibold mt-4">{{ technology.name }}</h3>
      <p class="mb-4" v-for="description in technology.descriptions">
        {{ description }}
      </p>
    </div>

    <h2 class="text-xl font-semibold mt-6">Links zu anderen Websites</h2>
    <p class="mb-4">
      Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
      können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
      der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
      Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
      erkennbar.
    </p>

    <h2 class="text-xl font-semibold mt-6">Änderungen der Datenschutzerklärung</h2>
    <p class="mb-4">
      Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
      Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren
      erneuten Besuch gilt dann die neue Datenschutzerklärung.
    </p>
  </div>
</template>