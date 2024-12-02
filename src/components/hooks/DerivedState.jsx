import { useState } from "react";
export const DerivedState = () => {
    const [users, setUsers] = useState([
        {
            name: "Alice" , age: 35
        },
        {
            name: "Bob" , age: 20
        },
        {
            name: "Nelle" , age: 15
        },
        {
            name: "John" , age: 25
        },
    ])
    return(
        <div className="flex flex-col justify-center text-center">
  <h1>Users List</h1>
  <ul>
  {
    users.map((data, index)=> {
        return(  
        <li key={index}>
            {data.name} - {data.age} year old
        </li>
        )
    })
  }
  </ul>
        </div>
    )
}