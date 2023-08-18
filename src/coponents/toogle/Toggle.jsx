import { useContext } from "react"
import "./Toggle.css"
import { ThemeContext } from "../../context"

const Toggle = ()=>{
    const theme = useContext(ThemeContext)
    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})
    }

    

    return(
        
        <div className="t">
            <img src = "./images/sun.png" alt="" className="t-icon"/>
            <img src = "./images/moon.png" alt="" className="t-icon"/>
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0:25 }}></div>

        </div>
    )
}

export default Toggle