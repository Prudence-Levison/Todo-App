import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import { TodoProvider } from './Store/TodoContext';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
