import { Card } from "../components/Card"
import { cardInfo } from "../info/infoCards"

export const SectionTwo = () => {

  let number = 1; 

  return (
    <section className='w-full h-auto pb-7 relative z-10 bg-slate-800/90 dark:bg-slate-200/90 rounded-3xl backdrop-blur-sm'>  
        <h1 className='text-center text-2xl md:text-4xl lg:text-5xl p-9 font-bold dark:text-slate-900'>Proyectos</h1>
        <swiper-container class="mySwiper" space-between="30" slides-per-view="2" navigation="true" pagination="true">
          {
            cardInfo.map( card => (
              <Card key={card.name + number++} card={card}></Card>
            ))
          }
        </swiper-container>
    </section>
  )
}
