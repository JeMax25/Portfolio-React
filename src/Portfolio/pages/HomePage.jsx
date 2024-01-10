
import React from 'react'
import { BackGround } from '../../ui/components/index'

import '../styles/styles.css'
import { NavBar, SectionOne } from '../Design'


export const HomePage = () => {
  return (
    <>
    <div className='container-div text-slate-50 dark:text-slate-900'>
      <NavBar></NavBar>
      <SectionOne></SectionOne>
      <section className='w-full h-full relative z-10 bg-slate-800/80 rounded-3xl backdrop-blur-sm'>  
        <h1 className='text-center text-2xl md:text-4xl'>Habilidades</h1>
      </section>
      <BackGround></BackGround>
    </div>
    </>
    
  )
}
