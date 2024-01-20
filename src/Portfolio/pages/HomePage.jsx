import { BackGround } from '../../ui/components/index'

import { SectionFour, SectionOne, SectionThree, SectionTwo } from '../Design'
import { NavBar } from '../components/NavBar'

import '../styles/styles.css'


export const HomePage = () => {
  return (
    <>
    <div className='container-div text-slate-50 dark:text-slate-900'>
      <NavBar></NavBar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <BackGround></BackGround>
    </div>
    </>
    
  )
}
