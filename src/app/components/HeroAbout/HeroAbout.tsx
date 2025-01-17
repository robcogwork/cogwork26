import Image from 'next/legacy/image'

export default function HeroAbout() {
  return (
    <main className="box-content pt-60 px-10 lg:px-40 text-aubergine-500 border-b-2 border-salmon-500">
      <h2 className="text-5xl mb-20">Våra tjänster</h2>
      <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2  items-center mb-20">
        <div className="">
          <Image
            src="/photo.jpg"
            alt="Image of a gathering"
            width={680}
            height={480}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className=" lg:px-16 flex gap-5 flex-col justify-start">
          <h2>För företag</h2>
          <p>
            Heltäckande lösningar för administration av aktiviteter med
            automatisk bokföring.
          </p>
          <h2>För förbundet</h2>
          <p>
            Samordna och förenkla administrationen mellan förbund, distrikt och
            lokalföreningar.
          </p>
          <h2>För föreningen</h2>
          <p>
            Integrera medlemsregister, bokningar, grupper, utskick och
            bokföring. 
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2  items-center mb-40">
        <div className=" lg:px-16 flex gap-5 flex-col">
          <h2> Om Mina Aktiviteter</h2>
          Mina Aktiviteter möjliggör automatiserad bokning av kurser, events,
          resor, biljetter, träningstider, drop in-platser och medlemskap utan
          något krav på inloggning.
          <br />
          <br />I Mina Aktiviteter ingår funktioner som flexibla
          bokningsformulär med beräknade priser, egendefinierade datafält,
          köhantering, betalflöden, automatiserad bokföring, medlemsregister och
          kundkommunikation.
        </div>
        <div className="">
          <Image
            src="/photo.jpg"
            alt="Image of a gathering"
            width={680}
            height={480}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </main>
  )
}
