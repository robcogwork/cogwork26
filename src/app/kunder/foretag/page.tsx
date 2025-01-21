import styles from './page.module.scss'

export const metadata = {
  title: 'Företag',
  // description: "",
}

export default function Foretag() {
  return (
    <main className={styles.foretag}>
      <div className={styles.wrapper}>
        <h2> Bokningssystem för företag</h2>
        <div className={styles.content}>
          <p>
            Mina Aktiviteter är ett boknings- och verksamhetssystem med
            heltäckande lösningar för administration av aktiviteter. Ni kan
            automatisera hela boknings hanteringen och synka med bokförings
            program m.m. Bokning och visning av aktiviteter sker på er egen
            webbsida med smidig integration med WordPress.
          </p>
          <h3>Splittrad moms</h3>

          <p>
            Företag är vanligtvis momspliktiga och har inte sällan olika moms på
            olika artiklar/tjänster. Ibland förekommer även flera olika
            momssatser inom en och samma bokning, exempelvis vid bokning av
            arrangemang som innefattar både mat med 12% moms och utbildning med
            25% moms. I Mina Aktiviteter finns därför stöd för att automatiskt
            generera fakturor/avier som innefattar flera olika momssatser.
          </p>
          <h3>Lätt administrerade och finmaskiga behörigheter</h3>
          <p>
            I ett företag finns det ofta många och varierande individer som är
            involverade i verksamheten. Samtidigt är det viktigt att ha strikt
            kontroll på vem som är behörig att göra vad och ta del av vilken
            information. I systemet finns därför en finmaskig behörighets
            kontroll som baserar sig på grupptillhörigheter. Ni kan exempelvis
            skapa en grupp med namnet ”Receptions personal” och sedan talar ni
            om exakt vilka behörigheter alla som tillhör gruppen skall få.
          </p>
          <h3>Företagskunder</h3>
          <p>
            Runt tusen organisationer använder vårt verksamhetssystem för att
            hantera exempelvis kurser, medlemsregister, kundkommunikation och
            bokföring. Många av dessa är företag i form av aktiebolag och
            enskilda firmor. Här visar vi ett antal exempel på vad några
            företagskunder tycker om Mina Aktiviteter och hur de integrerat
            systemet i sin egen verksamhet och webbplats.
          </p>
          <h3>Automatiserat och detaljerat löneunderlag för timanställda</h3>
          <p>
            Våra företagskunder har ofta många personer som avlönas per timme
            baserat på vilka bokningar och aktiviteter de haft under en månad.
            Vi har därför gjort det smidigt och enkelt att koppla löneavtal till
            individer och automatiskt plocka fram detaljerade löneunderlag
            baserat på boknings data som redan finns i systemet.
          </p>
        </div>
      </div>
    </main>
  )
}
