import { useEffect, useState } from "react";

export const getTheme = () => {

    const [theme, setTheme] = useState(() => {
        if( window.matchMedia('(prefers-color-scheme: dark)').matches){
            
            return 'dark'
        }

        return 'ligth'
    });

    useEffect(() => {

        if( theme === 'ligth') {
            document.querySelector('html').classList.add('dark');
            document.querySelector('.button').classList.add('button-ligth');
        }
        else{   
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.button').classList.remove('button-ligth');
        }

    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'ligth' ? 'dark' : 'ligth');
        console.log(theme)
    }

    return {
        handleChangeTheme,
    }
}
