import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) =>{
        setInputValue({ id: value, content: value, checked: false })
        };
        const handleFormSubmit = (event) => {
            event.preventDefault();
            onAddTodo(inputValue);
            setInputValue({ id: "", content: "", checked: false });
        }; 
    
    return(
        <section className="form">
        <form className="form1" onSubmit={handleFormSubmit}>
            <div>
                <input type="text" autoComplete="off" className="todo-input py-4 px-6 outline-none" value={inputValue.content} onChange={(event)=> handleInputChange(event.target.value)} />
            </div>
            <div>
                <button type="submit" className="todo-btn  bg-blue-400 text-white py-4 px-3 hover:bg-yellow-400 transition">Add Task</button>
            </div>
        </form>
     </section>
    )
};