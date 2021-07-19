import React from 'react'
import Sun from '../../Assets/img/sun.png'
import Moon from '../../Assets/img/moon.png'
import "./Toggle.css"

export const Toggle = ({ theme, toggleTheme }) => {
    console.log(theme)
    return (
        <div onClick={toggleTheme} id="togglediv">
            { theme === 'light' ? <img src={Moon} className="themeIcon" id="moon"></img> : <img src={Sun} className="themeIcon"></img>}
        </div>
    )
}
