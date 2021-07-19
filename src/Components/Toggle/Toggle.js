import React from 'react'
import Sun from '../../Assets/img/sun.png'
import Moon from '../../Assets/img/moon.png'

export const Toggle = ({ theme, toggleTheme }) => {
    console.log(theme)
    return (
        <div onClick={toggleTheme}>
            { theme === 'light' ? <img src={Sun} className="themeIcon"></img> : <img src={Moon} className="themeIcon" id="moon"></img>}
        </div>
    )
}
