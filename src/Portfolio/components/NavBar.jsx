import { useContext, useEffect, useState } from "react";
import { ButtonTheme } from "../../ui/components"
import { ThemeContext } from "../../context/ThemeContext";

export const NavBar = () => {

    const [scrollY, setScrollY] = useState(0);
    const [scrollBar, setScrollBar] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const { themeIcons } = useContext(ThemeContext)

    const handleMenu = () => {
      setMenuActive(!menuActive)
    }

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

      const scrollToElement = (elementId) => {

        const element = document.getElementById(elementId);
    
        if (element) {
          const offset = element.getBoundingClientRect().top + window.scrollY - window.screen.height * 0.2 ;
    
          // Actualizar el estado para activar el desplazamiento suave
          setScrolling(true);
    
          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
    
        }
      };
    
      const [scrolling, setScrolling] = useState(false);
    
  return (
    <header className={`nav-bar flex justify-between items-center m-auto text-slate-50 dark:text-slate-900 fixed top-0 left-auto z-20 ${scrollBar ? 'bg-slate-800/95 dark:bg-slate-200/95 backdrop-blur-sm' : ''}`}>
        <h1 className="font-semibold lg:text-3xl md:text-2xl text-xl">JEMAX</h1>
        <div className="flex">
            <nav className={`nav-bar-sm flex flex-col md:flex-row items-center justify-center gap-2 absolute md:static top-0 bg-slate-800 dark:bg-slate-100 md:bg-transparent dark:md:bg-transparent w-1/2 h-screen md:w-auto md:h-auto text-center z-20 ${ menuActive ? 'left-1/2' : 'left-full'}`}>
                <ul className="h-1/2 flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-12 text-lg md:text-xl">
                    <li onClick={handleMenu} className="block md:hidden absolute top-10 right-10 text-2xl">x</li>
                    <li><a href="#" onClick={handleMenu}>Inicio</a></li>
                    <li onClick={() => {scrollToElement('projects'); handleMenu()}}>Proyectos</li>
                    <li onClick={() => {scrollToElement('About'); handleMenu() }} className="">Acerca de</li>
                </ul>
                <ul className="flex justify-center gap-2 lg:ml-7 lg:mr-7 md:ml-4 md:mr-4 ml-3 mr-3 w-full ">
                    <li className="bg-zinc-950 border-slate-50 dark:bg-slate-50 dark:border-slate-900 h-8 w-8 text-center border-solid border-2  rounded-full"><a href="#">in</a></li>
                    <li className="bg-zinc-950 border-slate-50 dark:bg-slate-50 dark:border-slate-900 h-8 w-8 text-center border-solid border-2  rounded-full"><a href="#">g</a></li>
                </ul>   
            </nav>
            <div onClick={handleMenu} className="md:hidden w-8 flex justify-center">
              <img src={`${themeIcons ? './assets/svg-white/menu-button.svg' : './assets/svg/menu-button.svg'}`} alt="" />
            </div>
            <ButtonTheme></ButtonTheme>
        </div>
  </header>

  )
}
