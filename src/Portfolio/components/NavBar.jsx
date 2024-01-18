import { useEffect, useState } from "react";
import { ButtonTheme } from "../../ui/components"

export const NavBar = () => {

    const [scrollY, setScrollY] = useState(0);
    const [scrollBar, setScrollBar] = useState(false)

    const handleScroll = () => {

        const scrollTop = window.scrollY;

        setScrollY(scrollTop);
      }

    useEffect(() => {
      
      if(scrollY > 80) {
        setScrollBar(true);
      } 
      else{
        setScrollBar(false)
      }

    }, [scrollY])
    
      window.addEventListener('scroll', handleScroll);
    
  return (
    <header className={`nav-bar flex justify-between items-center m-aut text-slate-50 dark:text-slate-900 fixed top-0 left-auto z-20 ${scrollBar ? 'bg-slate-800/95 dark:bg-slate-200/95 backdrop-blur-sm' : ''}`}>
        <h1 className="font-semibold lg:text-3xl md:text-2xl text-xl">JEMAX</h1>
        <div className="flex">
            <nav className="flex items-center gap-2">
                <ul className="flex lg:gap-12 md:gap-6 gap-5 md:text-xl text-base">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Habilidades</a></li>
                </ul>
                <ul className="flex gap-2 lg:ml-7 lg:mr-7 md:ml-4 md:mr-4 ml-3 mr-3 w-full ">
                    <li className="bg-zinc-950 border-slate-50 dark:bg-slate-50 dark:border-slate-900 h-8 w-8 text-center border-solid border-2  rounded-full"><a href="#">in</a></li>
                    <li className="bg-zinc-950 border-slate-50 dark:bg-slate-50 dark:border-slate-900 h-8 w-8 text-center border-solid border-2  rounded-full"><a href="#">g</a></li>
                </ul>   
            </nav>
            <ButtonTheme></ButtonTheme>
        </div>
  </header>

  )
}
