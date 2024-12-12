import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleInputChange = (value) =>{
    setInputValue(value)
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();

      if(inputValue == "") return;

      if(task.includes(inputValue)){
          setInputValue("");
          return;
      }

      setTask((prevTask) => [...prevTask , inputValue]);

      setInputValue("");
    };
return(
 <>
 <section className="todo-container">
    <header>
    <h1 className="text-white text-center">Todo List With React.JS</h1>
    </header>
 </section>
 <section className="form">
    <form className="form1" onSubmit={handleFormSubmit}>
        <div>
            <input type="text" autoComplete="off" className="todo-input py-2 px-4 outline-none" value={inputValue} onChange={(event)=> handleInputChange(event.target.value)} />
        </div>
        <div>
            <button type="submit" className="todo-btn  bg-blue-400 text-white py-2 px-2 hover:bg-yellow-400 transition">Add Task</button>
        </div>
    </form>
 </section>
 <section>
    <ul className="unOrderList">
        {
        task.map((curTask, index)=> {
           return(
            <li className="text-5xl" key={index}>
            <span className="">{curTask}</span>
        </li>
           )
        })
        }
    </ul>
 </section>
 </>
)
};