import Image from 'next/legacy/image'

export default function Vision() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-aubergine-500 justify-center items-center mt-20">
        <div className="py-20 px-10 lg:py-36 lg:px-28 bg-salmon-500 text-center flex items-center flex-col">
          <Image
            src="/erik.jpg"
            alt="Profile image of Erik"
            width={135}
            height={135}
            className="rounded-full"
          />
          <p className="text-3xl lg:text-5xl mt-5">
            "Vi vårdesätter
            <em className="text-4xl lg:text-5xl">
              {' '}
              att hjälpa våra kunder att komma igång och underlätta det
              administrativa för ökad lönsamhet.
            </em>
            "
          </p>
          <h4 className="pt-10">— Erik Terenius, Grundare och VD</h4>
        </div>
        <div className="py-20 px-10 lg:px-14 flex gap-8 flex-col">
          <h4>Cogwork</h4>
          <p className="text-lg lg:text-xl mb-16">
            CogWork AB är ett Uppsalaföretag som utvecklar och driver ett helt
            molnbaserat verksamhetssystem byggt för att underlätta
            administrationen för företag, föreningar, förbund och andra
            organisationer. Vidareutveckling sker i nära samarbete med
            användarna av våra molntjänster. Vi erbjuder administrativa
            kringtjänster för Mina Aktiviteter, som exempel bokföring och
            kanslitjänster. Vi har även stor erfarenhet av att bygga
            funktionella webbplatser för både små och stora organisationer.
          </p>
          <h4>Vårt Team</h4>
          <p className="text-lg lg:text-xl">
            På Cogwork arbetar vi som ett sammansvetsat team för att leverera
            lösningar som möter våra kunders behov. Med djup erfarenhet inom IT,
            webbutveckling, integration, hållbarhet och föreningsarbete,
            kombinerar vi teknisk expertis med förståelse för verksamheter i
            olika branscher. Vi strävar efter att skapa värde genom innovativa
            och hållbara lösningar, oavsett om det handlar om att utveckla
            webbplatser, implementera systemintegrationer eller erbjuda stöd i
            administrativa processer. Tillsammans arbetar vi för att förenkla
            och effektivisera våra kunders vardag – alltid med ett personligt
            och engagerat förhållningssätt.
          </p>
        </div>
      </div>
    </section>
  )
}
