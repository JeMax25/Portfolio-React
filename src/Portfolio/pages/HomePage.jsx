import { BackGround } from '../../ui/components/index'

import { SectionOne, SectionTwo } from '../Design'
import { NavBar } from '../components/NavBar'

import '../styles/styles.css'


export const HomePage = () => {
  return (
    <>
    <div className='container-div text-slate-50 dark:text-slate-900'>
      <NavBar></NavBar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <section className='w-full h-full relative z-10'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Acerca De Mi</h1>
      </section>
      <BackGround></BackGround>
    </div>
    </>
    
  )
}
