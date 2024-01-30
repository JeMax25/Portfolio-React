import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const getTheme = () => {

    const [theme, setTheme] = useState('dark');
    const { changeThemeIcon } = useContext( ThemeContext );

    useEffect(() => {

        if( theme === 'ligth') {
            document.querySelector('html').classList.add('dark');
            document.querySelector('.button').classList.add('button-ligth');
            changeThemeIcon();
        }
        else{   
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.button').classList.remove('button-ligth');
            changeThemeIcon();
        }

    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'ligth' ? 'dark' : 'ligth');
    }

    return {
        handleChangeTheme,
        theme
    }
}
