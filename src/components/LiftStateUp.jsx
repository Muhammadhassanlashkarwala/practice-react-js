import { useState } from "react";

export const LiftStateUp = () =>{
    const [inputValue, setInputValue] = useState("")
    return(
      <>
      <InputComponent inputValue = {inputValue} setInputValue= {setInputValue} />
      <DisplayComponent inputValue= {inputValue} />
      </>
    )
};

function InputComponent({ inputValue,setInputValue }){
    return(
        <input className="border-2 my-4 mx-2 w-2/3 p-4 text-neutral-950 outline-2" type="text" placeholder="Enter your Name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
    )
};

function DisplayComponent({ inputValue }){     
    return (
    <p >The current input value is: <span className="text-purple-600">{inputValue}</span></p>
);
};