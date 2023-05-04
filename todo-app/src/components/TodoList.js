import React from 'react'


const TodoList = ({list, removeItem}) => {
  return (
    
    <ol className="todo-list">
        {
            list.map((todo, entry) => (
                <div className="todo">
                    <li key={entry}>{todo}
                    <button className="delete-button" onClick={() => {removeItem(todo)}}>x</button>
                    </li>
                    <hr/>
                    <br></br>
                </div>
            ))
        }
    </ol>
  )
}

export default TodoList;
