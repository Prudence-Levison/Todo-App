import { createContext, useState } from "react";

export const TodoContext =createContext();
const  Tasks = ['Learn Context APi from scratch']
 

export const TodoProvider =({children}) =>{

    const [todo, setTodo] = useState(Tasks);
    const newtodo =(newtodoInput)=>{
        setTodo([...todo, newtodoInput])
    }

    const deletetodo = (todosIndex) => {
        const newtodo = todo.filter((_, index) => index !== todosIndex);
        setTodo(newtodo); // Updates the state with the new array
      };
    return <TodoContext.Provider value={{todo, newtodo, deletetodo}}>{children}</TodoContext.Provider>
};