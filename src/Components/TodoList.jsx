import React, { useContext } from "react";
import { TodoContext } from "../Store/TodoContext";

const  TodoList =()=> {

    const {todo, deletetodo} =useContext(TodoContext)
    return(
        <div className="flex justify-center">
        <ul className="block">
            {todo.map((todos, index)=>
             (<li key={index}>{todos}
             
             <button className="border-2 px-2  m-2 pt-0 bg-gray-200" onClick={() =>
                deletetodo (index)}>x</button>
             </li>
             ))}
           
        </ul>
        </div>
    )
}

export default TodoList