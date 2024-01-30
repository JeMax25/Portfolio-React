import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvide = ({ children }) => {

    const [themeIcons, setThemeIcons] = useState(false);

    const changeThemeIcon = () => {
      setThemeIcons(!themeIcons)
    }

  return (
    <ThemeContext.Provider value={{ themeIcons, changeThemeIcon }}>
        { children }
    </ThemeContext.Provider>
  )
}