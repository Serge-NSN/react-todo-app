import React from 'react'


const TodoInput = ({todo, setTodo, addTodo}) => {
  return (
    <>

        <div className="input-wrapper">
            <input type="text"
            placeholder="Create a new todo"
            value={todo}
            name="todo"
            
            onChange={(event)=> {
                setTodo(event.target.value);
            }}
            />
            <button className="add-button"
            onClick={addTodo}
            >Add</button>
        </div>

    </>
)}


export default TodoInput