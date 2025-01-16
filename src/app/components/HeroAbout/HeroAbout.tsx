import Image from 'next/legacy/image'

export default function HeroAbout() {
  return (
    <main className="box-content pt-60 px-10 lg:px-14 text-aubergine-500 border-b-2 border-salmon-500">
      <h2 className="text-5xl mb-20">Våra tjänster</h2>
      <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2  items-center">
        <div className="">
          <Image
            src="/photo.jpg"
            alt="Image of grocery store check-out"
            width={2940}
            height={1960}
            className="rounded-3xl"
          />
        </div>
        <div className=" lg:px-16 flex gap-5 flex-col">
          <p>
            om företaget Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Alias optio sit reprehenderit. Repellat nobis optio natus quia
            beatae obcaecati minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            voluptatum vero alias aut totam perferendis cum quam et impedit,
            repudiandae similique dolorem nulla. Maiores nostrum ipsa a facere
            error dolorum soluta expedita id! In sequi praesentium qui totam
            minus blanditiis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            autem reiciendis id fuga deleniti quaerat dolores voluptate non unde
            itaque.
          </p>
        </div>
      </div>
      <h2 className="mt-20 mb-20 lg:mt-20 lg:mb-5 text-center">
        Våra expertisområden:
      </h2>
    </main>
  )
}
