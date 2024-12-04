import { useState } from 'react'
import './SwitchToggle.css'

export const SwitchToggle = () => {
    const [isOn, setIsOn] = useState(false)

    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }
    return(
       <div className='toggle-switch' style={{background: isOn ? "#4caf50" : ""}} onClick={handleToggleSwitch}>
     <div className={`switch ${isOn ? "ON" : "OFF"}`}>
      <span className='switch-state'>{isOn ? "ON" : "OFF"}</span>
     </div>
       </div>
    )
}