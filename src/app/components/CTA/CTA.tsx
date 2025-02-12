import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-10 lg:mt-28 lg:py-40 lg:px-96 text-aubergine-500 text-center bg-[url('/logo_gradient.svg')]">
      <em className="text-4xl lg:text-7xl">
        Nyfiken på vad Cogwork kan göra för ditt bolag? <br /> Förening eller
        Förbund?
      </em>
      <p className="mt-10 lg:mt-10 lg:mx-36">
        Läs mer om våra tjänster{' '}
        <Link className="underline" href="/tjanster">
          här.
        </Link>
      </p>
    </section>
  )
}
