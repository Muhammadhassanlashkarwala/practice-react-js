import { useEffect, useState } from "react";

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(()=> {
        const interval = setInterval(() => {
             const now = new Date();
             const formattedDate = now.toLocaleDateString();
             const formattedTime = now.toLocaleTimeString();
             setDateTime(`${formattedDate} - ${formattedTime}`)
             }, 1000);
     
             return () => clearInterval(interval);
     
      }, []);
    return(
     <div>
    <h2 className="text-white text-center mb-12 text-5xl">{dateTime}</h2>
     </div>
    )
};