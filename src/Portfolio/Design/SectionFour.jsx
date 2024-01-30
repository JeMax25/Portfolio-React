import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { icons,iconsCon } from "../info/infoIcons";

export const SectionFour = () => {

  const { themeIcons } = useContext(ThemeContext);
  const [urlSvg, setUrlSvg] = useState('svg-white')

  useEffect(() => {
    
    if(!themeIcons){
      setUrlSvg('svg')
    }else {
      setUrlSvg('svg-white')
    }

  }, [themeIcons])
  
  
  return (
    <section className='w-full h-auto relative z-10 bg-slate-800 dark:bg-slate-50 rounded-3xl p-8 mt-36'>
      <h1 className='text-center text-4xl font-bold pb-10 pt-4'>Contacto</h1>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center md:items-start '>
        <div className="w-1/2 flex flex-col items-center">
          <img src="./assets/img-form.svg" width='300px' alt="" className="hidden md:block" />
          <ul className="text-l flex flex-col items-center justify- md:items-start gap-4 mt-8">
            { icons.map( (icon) => (
              <li key={icon.name} className="flex">
                <img className="w-6" src={`./assets/${urlSvg}/${icon.name}.svg`} alt="" />
                <p className="pl-2">{icon.description}</p>
              </li>
            )) }
                  <li className="flex gap-3">
                    {
                      iconsCon.map((icon) => (
                        <img key={icon} src={`./assets/${urlSvg}/${icon}.svg`} alt="" className="w-7"/>
                      ))
                    }
                  </li>

          </ul>
        </div>
        <form action="" className='flex flex-col gap-3 w-full md:w-1/2 h-full '>
          <input type="text" placeholder='Nombre' className='h-12 p-2 bg-slate-600 dark:bg-slate-300 rounded-lg shadow-lg '/>
          <input type="text" placeholder='Correo Electronico' className='h-12 p-2 bg-slate-600 dark:bg-slate-300 rounded-lg shadow-lg'/>
          <input type="text" placeholder='Asunto' className='h-12 p-2 bg-slate-600 dark:bg-slate-300 rounded-lg shadow-lg'/>
          <textarea name="" placeholder='Información...' id="" cols="30" rows="10" className='bg-slate-600 dark:bg-slate-300 p-2 rounded-lg shadow-lg'></textarea>
        </form>
        </div>
    </section>
  )
}
