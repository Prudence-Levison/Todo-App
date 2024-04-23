import React, { useState } from "react"
import { TodoContext } from "../Store/TodoContext";
import { useContext } from "react";

const TodoForm =()=>{
    const {newtodo, todo} =useContext(TodoContext)

    const [todoInput, setTodoInput] =useState('');


    const handleInput = (e)=>{
        setTodoInput(e.target.value)
    };
      
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        newtodo(todoInput);
        setTodoInput('');
        if(!todoInput){
            return;
        }
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-96 pt-8">
            
            <button type="submit" className="bg-blue-600 border-sm text-white px-3 rounded-sm" >Add Todo</button>
            <p>No of Todos: {todo.length}</p>
            
            </div>
            <div className="flex justify-center pt-4">
            <input className="border-2 w-[36rem] "
             type="text"
             value={todoInput}
             onChange={handleInput}/>
             </div>
        </form>
    )

}

export default TodoForm