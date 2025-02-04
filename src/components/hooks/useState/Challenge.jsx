import { useState } from "react";


export const Challenge = () => {
const [counter, setCounter] = useState(0);
const [step, setStep] = useState(0)

const handleIncrement = () => {
    setCounter(counter + step);
}

const handleDecrement = () => {
 setCounter(counter - step)
}
const handleReset = () => {
    setCounter(0);
}

    return(
        <div className="container">
     <h1>It's Challenge Time!</h1>
     <p>
        Count: <span>{counter}</span>
     </p>

     <div> 
        <label>Step:
            <input value={step} onChange={(e) => setStep(Number(e.target.value))} style={{border:"1px solid #000", borderRadius: "5px", margin:"1rem"}} type="number" />
        </label>
     </div>
     <div className="grid-three-cols">
        <button className="border m-4 px-4 py-2" onClick={handleIncrement} disabled={counter >= 100}>Increment</button>
        <button className="border m-4 px-4 py-2" onClick={handleDecrement} disabled={counter <= 0}>Decrement</button>
        <button className="border m-4 px-4 py-2" onClick={handleReset}>Reset</button>
     </div>
     </div>
    )
};