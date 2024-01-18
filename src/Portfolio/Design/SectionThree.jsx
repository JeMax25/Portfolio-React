import { SliderInfinite } from "../components/SliderInfinite"

export const SectionThree = () => {
  return (
    <>
    <section className='w-full h-1/2 mt-48 p-9 relative z-10 bg-slate-800 dark:bg-slate-50 rounded-3xl'>
      <div className="flex justify-evenly items-center h-full gap-10">
        <div className="container-photo">
          <img className="img-photo object-cover" src="./src/Portfolio/assets/img-photo/photo.png" alt="" />
        </div>
        <div className="w-2/3">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold lg:mb-6">About Me</h1>
          <p>¡Hola! Soy .Json, un apasionado desarrollador web con
            experiencia en HTML, CSS, JavaScript, Angular, React, Redux y mas. Me encanta
            crear aplicaciones web interactivas y atractivas. Conozco
            el desarrollo front-end y puedo construir aplicaciones robustas y escalables.
            Además, tengo habilidades sólidas en JavaScript para
            manipular el DOM y gestionar eventos. También tengo
            experiencia en el diseño y desarrollo de páginas web utilizando
            HTML y CSS. Estoy comprometido con la calidad del código y
            siempre estoy buscando oportunidades para aprender y
            crecer como desarrollador.
          </p>
        </div> 
      </div>
    </section>
    <div className="h-auto w-full relative z-10 bg-slate-800 rounded-3xl mt-16 pt-2 pb-6 flex-col ">
      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold pb-6'>Skills</h1>
      <SliderInfinite></SliderInfinite>  
    </div>
    </>
  )
}
