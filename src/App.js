import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import { TodoProvider } from './Store/TodoContext';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className=" h-screen bg-blue-50 ">
      <h1 className='flex justify-center text-xl pt-32 font-bold'>TODO LIST</h1>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
