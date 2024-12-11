import { useState } from 'react'
import './SwitchToggle.css'
import { IoIosSwitch } from "react-icons/io";

export const SwitchToggle = () => {
    const [isOn, setIsOn] = useState(true)

    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }
    return(
    <>
    <h1 className='text-center'>Toggle Switch <IoIosSwitch />
 </h1>
       <div className='toggle-switch' style={{background: isOn ? "#4caf50" : ""}} onClick={handleToggleSwitch}>
     <div className={`switch ${isOn ? "ON" : "OFF"}`}>
      <span className='switch-state'>{isOn ? "ON" : "OFF"}</span>
     </div>
       </div>
    </>
    );
};