import { useEffect, useState } from "react";

export const getTheme = () => {

    const [theme, setTheme] = useState(() => {
        if( window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark'
        }

        return 'ligth'
    });

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'ligth' ? 'dark' : 'ligth')
    }

    useEffect(() => {

        if( theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        }
        else{   
            document.querySelector('html').classList.remove('dark');
        }

    }, [theme]);


    return {
        handleChangeTheme
    }
}
