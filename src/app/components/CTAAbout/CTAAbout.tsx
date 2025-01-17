import Link from 'next/link'

export default function CTAAbout() {
  return (
    <section className="flex flex-col gap-5 py-20 px-10 lg:mt-28 lg:py-40 lg:px-96 text-dove-500 text-center bg-kale-500">
      <em className="text-4xl lg:text-7xl">
        Upptäck hur Cogwork kan förenkla och förbättra din vardag
      </em>
      <div className="my-8">
        <p>
          Vill du se hur Cogwork kan effektivisera din verksamhet och skapa nya
          möjligheter?
        </p>
        <p>Hör av dig till oss och låt oss forma framtiden tillsammans.</p>
      </div>
      <Link href="/kontakt">
        <button className="text-dove-500 px-12 py-1 border-dove-500 border-solid border-2 rounded-xl hover:bg-dove-500 hover:text-kale-500">
          <h4>Kontakt</h4>
        </button>
      </Link>
    </section>
  )
}
