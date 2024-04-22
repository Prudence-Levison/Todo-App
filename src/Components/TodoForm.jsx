import React, { useState } from "react"
import { TodoContext } from "../Store/TodoContext";
import { useContext } from "react";

const TodoForm =()=>{
    const {newtodo} =useContext(TodoContext)

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
            <button type="submit">Add</button>
            <input
             type="text"
             value={todoInput}
             onChange={handleInput}/>
        </form>
    )

}

export default TodoForm