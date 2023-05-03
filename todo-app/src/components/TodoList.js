import React from 'react'


const TodoList = ({list, removeItem}) => {
  return (
    
    <ol className="todo-list">
        {
            list.map((todo, entry) => (
                <div className="todo">
                    <li key={entry}>{todo}</li>
                    <button className="delete-button" onClick={() => {removeItem(todo)}}>Del</button>
                    
                </div>
            ))
        }
    </ol>
  )
}

export default TodoList;
