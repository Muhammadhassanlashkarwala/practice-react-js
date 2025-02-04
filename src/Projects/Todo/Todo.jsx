import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";


export const Todo = () => {
    const [task, setTask] = useState(()=> getLocalStorageTodoData());
    const handleFormSubmit = (inputValue) => {
    const {id, checked, content} = inputValue;
   //  to check if the input field is empty or not.
     if(content == "") return;

   //  to check if the data is already existing or not.
  //  if(task.includes(inputValue)) return; 
     const ifTodoMatchedElement = task.find((curTask) => curTask.content === content)
     if(ifTodoMatchedElement) return;
     setTask((prevTask) => [...prevTask , {id, content, checked}]); 
    };

// Calling handleDeleteTodo Function.
const handleDeleteTodo = (value) => {
const updatedTask = task.filter((curTask) => curTask.content 
  !== value)
  setTask(updatedTask);
};

// Calling handleCheckedTodo functionality.
const handleCheckedTodo = (content) => {

   const updatedTask = task.map((curTask)=> {
    if (curTask.content === content ) {
      return{...curTask, checked: !curTask.checked}
    }else{
      return curTask;
    }
   });
   setTask(updatedTask);
}

// Calling handleClearAllData fuctionality.
const handleClearAllData = () => {
  setTask([]);
};

// add Todo to localStorage
setLocalStorageTodoData(task);

return(
 <>
 <section className="todo-container">
    <header>
    <h1 className="text-white text-center">Todo List With React.JS</h1>
    <TodoDate />
    </header>
    <TodoForm onAddTodo={handleFormSubmit} />
 </section>
 <section>
    <ul className="unOrderList">
        {
        task.map((curTask)=> {
           return(
            <TodoList 
            key={curTask.id} 
            data={curTask.content}
            checked={curTask.checked}
            onHandleDeleteTodo={handleDeleteTodo} 
            onHandleCheckedTodo={handleCheckedTodo} 
            />
           )
        })
        }
    </ul>
 </section>
 <section className="clear-btn" onClick={handleClearAllData}>Clear All</section>
 </>
);
};