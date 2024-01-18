import { SliderInfinite } from "../components/SliderInfinite"

export const SectionThree = () => {
  return (
    <section className='w-full h-full pt-28 relative z-10'>
      <div className="">
        <div>
          <h1>About Me</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit dicta in nam, quaerat repellendus commodi facilis officiis totam illo. In optio tempore architecto nesciunt numquam fuga ipsam illo consequuntur magni?</p>
        </div>
        <div>
          <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold pt-20 pb-6'>Skills</h1>
          <SliderInfinite></SliderInfinite>  
        </div>  
      </div>        
    </section>
  )
}
