import { useState } from "react";
import "./EV.css"

export const ShortCircuitExample = () => {
    const [isLoggedIn , setIsloggedIn] = useState(true);
    const [ user, setUser] = useState("");
 return(
    <section className="container1 short-container">
   <h1>Welcome to the ShortCircuit Evaluation!</h1>

{/* Conditional rendering using short circuit evaluation */}
{
  isLoggedIn && <p className="text-4xl">You are logged in:)</p> 
}  
<div className="text-4xl m-5">
  {
     user ? `Hello ${user}` : "Please log in!"
  }
</div>

   <div className="grid-three-cols">
    <button onClick={() => setIsloggedIn(!isLoggedIn)} className="g-div">Toggle Login State</button>
    <button onClick={() => setUser("Muhammad Hassan 😎")} className="p-div">Set User</button>
    <button onClick={() => setUser("")} className="c-div">Clear User</button>
   </div>
   </section>
 )
};