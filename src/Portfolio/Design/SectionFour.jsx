import { useState } from "react"

export const SectionFour = () => {

  
  
  return (
    <section className='w-full h-auto relative z-10 bg-slate-800 dark:bg-slate-50 rounded-3xl p-8 '>
      <h1 className='text-center text-xl md:text-2xl lg:text-4xl font-bold pb-10 pt-4'>Contacto</h1>
      <div className='flex items-center justify-between'>
        <ul>
          <li>
            <img src={'./assets/svg-white/github.svg'} alt="" />
            <p>xd</p>
          </li>
          <li>
            <img src="" alt="" />
            <p>xd</p>
          </li> 
          <li>
            <img src="" alt="" />
            <p>xd</p>
          </li>
        </ul>
        <form action="" className='flex flex-col gap-3 w-1/2 h-full '>
          <input type="text" placeholder='Nombre' className='h-12 p-2 bg-slate-600 dark:bg-slate-300 rounded-lg'/>
          <input type="text" placeholder='Correo Electronico' className='h-12 p-2 bg-slate-600 dark:bg-slate-300 rounded-lg'/>
          <input type="text" placeholder='Asunto' className='h-12 p-2 bg-slate-600 dark:bg-slate-300 rounded-lg'/>
          <textarea name="" placeholder='Información...' id="" cols="30" rows="10" className='bg-slate-600 dark:bg-slate-300 p-2 rounded-lg'></textarea>
        </form>
        </div>
    </section>
  )
}
