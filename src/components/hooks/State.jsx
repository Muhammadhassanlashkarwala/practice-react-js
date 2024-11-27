import { useState } from "react"
export const State = () => {

  const [count, setCount] = useState(0);

  const handleClickButton = ()=> {
    setCount(()=> count + 1)
  };

  return(
   <>
    <section className="flex justify-center my-auto items-center flex-col">
    <h1 className="font-bold text-8xl">{count}</h1>
    <button className="bg-green-400 p-12 text-5xl mx-auto" onClick={handleClickButton}>Increment</button>
    </section>
   </>
  )
}


