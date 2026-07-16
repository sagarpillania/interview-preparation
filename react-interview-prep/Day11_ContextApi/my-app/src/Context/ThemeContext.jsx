import { createContext, useState } from "react"

export const themeDatacontext=createContext();

function ThemeContext(props){
    // console.log(props);
    const [theme,setTheme]=useState("light")
    return (
        <div>
            <themeDatacontext.Provider value={[theme,setTheme]}>
                {props.children}
            </themeDatacontext.Provider>
        </div>
    )
}

export default ThemeContext