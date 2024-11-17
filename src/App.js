import './App.css';
import TodoList from './Components/TodoList';
import { TodoProvider } from './Store/TodoContext';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className=" h-screen bg-black ">
      <h1 className='flex justify-center text-xl text-white pt-20 lg:pt-32 font-bold'>TODO LIST</h1>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
