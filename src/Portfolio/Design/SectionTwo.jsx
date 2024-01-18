import { Card } from "../components/Card"
import { cardInfo } from "../info/infoCards"

export const SectionTwo = () => {

  let number = 1; 

  return (
    <section className='w-full h-auto relative z-10 bg-slate-800 dark:bg-slate-200 rounded-3xl backdrop-blur-sm'>  
        <h1 className='text-center text-2xl md:text-4xl lg:text-5xl p-4 font-bold dark:text-slate-900'>Proyectos</h1>
        <p className="text-center">Algunos de mis poyectos los cuales estan creados con diferentes tecnologias</p>
        <swiper-container class="mySwiper" space-between="20" slides-per-view="2.3" pagination="true">
          {
            cardInfo.map( card => (
              <Card key={card.name + number++} card={card}></Card>
            ))
          }
        </swiper-container>
    </section>
  )
}
