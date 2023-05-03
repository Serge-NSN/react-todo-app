import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';




const App = () => {

const [todos, setTodos] = useState([])
const [todo, setTodo] = useState("")
  

  const addTodo = () => {
    if(todo.length!==0){
    setTodos([...todos, todo]);
    setTodo("");
    }  
  }

  const removeItem = (text) => {
    const newTodos = todos.filter((todo)=>{ return todo !== text})
    setTodos(newTodos)
  }


  return (
    
    <div className="App">
        <h2>NSN ~ Todo-App</h2>
        < TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
        < TodoList list={todos} removeItem={removeItem}/>
        
        
    </div>
  );
}

export default App;
