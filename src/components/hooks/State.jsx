import { useState } from "react"
export const State = () => {

  const [count, setCount] = useState(0);

  const handleClickButton = ()=> {
    setCount(()=> count + 1)
  };
  return(
   <>
    <div className="flex justify-center my-auto items-center flex-col">
    <h1 className="font-bold text-8xl">{count}</h1>
    <button className="bg-green-400 p-12 text-5xl mx-auto" onClick={handleClickButton}>Increment</button>
    </div>
  <ChildComponent count={count} />
   </>
  )
}
function ChildComponent({ count }) {
  console.log("child component =>", count);
  return(
    <div>
      <h1 className="text-center">
        Child component - {count}
      </h1>
    </div>
  )
}




