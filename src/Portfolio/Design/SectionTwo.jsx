import { useEffect, useState } from "react";
import { Card } from "../components/Card"
import { cardInfo } from "../info/infoCards"

let number = 1; 

export const SectionTwo = () => {

  const [ventanaPequena, setVentanaPequena] = useState(window.innerWidth < 768);

  useEffect(() => {

    const actualizarVentana = () => {
      setVentanaPequena(window.innerWidth < 768);
    };

    // Agregar un event listener para el evento resize
    window.addEventListener('resize', actualizarVentana);

    // Eliminar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', actualizarVentana);
    };
  }, []);

  console.log(ventanaPequena)

  return (
    <section className='w-full h-auto relative z-10 bg-slate-800 dark:bg-slate-200 rounded-3xl backdrop-blur-sm' id="projects" >  
        <h1 className='text-center text-2xl md:text-4xl lg:text-5xl p-7 font-bold dark:text-slate-900'>Proyectos</h1>
        <p className="text-center">Algunos de mis poyectos los cuales estan creados con diferentes tecnologias</p>
        <swiper-container class="mySwiper" space-between="20" slides-per-view={`${ ventanaPequena ? "1" : "2" }`} navigation="true" pagination="true">
          {
            cardInfo.map( card => (
              <Card key={card.name + number++} card={card}></Card>
            ))
          }
        </swiper-container>
    </section>
  )
}
