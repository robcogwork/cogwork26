import Image from 'next/legacy/image'

export default function Vision() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-aubergine-500 justify-center items-center border-b-2 border-salmon-500">
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
          <h4 className="pt-10">— Lorem, ipsum., Medgrundare och VD</h4>
        </div>
        <div className="py-20 px-10 lg:px-14 flex gap-8 flex-col">
          <h4>Vårt team</h4>
          <p className="text-2xl lg:text-3xl mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quis
            eaque tempora quisquam expedita totam possimus, obcaecati,
            perferendis facere ratione non maiores magnam a dolore deleniti
            earum ipsa asperiores enim, aspernatur hic odio. Maxime consequuntur
            nobis, quibusdam odit incidunt totam!
          </p>
          <h4>Vårt mål</h4>
          <p className="text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            fugit aperiam. Enim perferendis aperiam quam sit, quos veniam alias
            expedita.
          </p>
        </div>
      </div>
    </section>
  )
}
