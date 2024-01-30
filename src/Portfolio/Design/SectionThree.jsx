import { SliderInfinite } from "../components/SliderInfinite"

export const SectionThree = () => {
  return (
    <>
    <section className='w-full h-auto mt-48 p-10 relative z-10 bg-slate-800 dark:bg-slate-50 rounded-3xl'>
      <div className="flex flex-col md:flex-row justify-evenly items-center h-full gap-5 md:gap-10">
        <div className="container-photo">
          <img className="img-photo object-cover" src="./assets/img-photo/photo.png" alt=""  id="About" />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-center text-3xl md:text-4xl lg:text-4xl font-bold lg:mb-6 hidden md:block">Acerca de mí</h1>
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
    <div className="h-auto w-full relative z-10 bg-slate-800 dark:bg-slate-50 rounded-3xl mt-2 pb-9 pl-9 pr-9 flex-col ">
      <h1 className="text-center text-4xl p-5 font-bold">Tecnologías</h1>
      <div className="bg-slate-700 dark:bg-slate-300 rounded-lg">
        <SliderInfinite></SliderInfinite>  
      </div>
    </div>
    </>
  )
}
