import React, { useContext } from "react";
import { TodoContext } from "../Store/TodoContext";

const  TodoList =()=> {

    const {todo, deletetodo} =useContext(TodoContext)
    return(
        <ul>
            {todo.map((todos, index)=>
             (<li key={index}>{todos}
             
             <button onClick={() =>
                deletetodo (index)}>x</button>
             </li>
             ))}
           
        </ul>
    )
}

export default TodoList