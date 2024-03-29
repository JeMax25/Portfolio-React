import { getTheme } from "../helpers/changeTheme"

export const ButtonTheme = () => {

    const {handleChangeTheme, theme} = getTheme();

  return (
    <div className="flex items-center p-2">
        <div 
        onClick={handleChangeTheme}
        className="bg-slate-50 dark:bg-slate-900 h-14 w-8 rounded-3xl p-1 container-button cursor-pointer">
            <div className=" bg-slate-900 dark:bg-slate-50 rounded-full h-6 w-6 m-auto button">
              { (theme === 'dark' ? <i className="fa-solid fa-sun m-auto ml-1"></i> : <i className="fa-solid fa-moon m-auto ml-1"></i>) }
            </div>
        </div>
    </div>
  )
}
