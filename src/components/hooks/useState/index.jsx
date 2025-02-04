import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1)
      // console.log("inner ===>",count);
    }
    // console.log("outer ===>",count); firstly show outer then click a button so show a value of inner.
    return(
       <div className="container state-container" style={{textAlign: "center"}}>
         <h1 className="text-6xl font-bold">useState Hook!</h1>
         <br />
         <p className="text-4xl">{count}</p>
         <button className="p-4 bg-black text-white text-3xl mt-5" onClick={handleIncrement}>Increment</button>
       </div>
    )
};