import React, { useEffect, useState } from "react";


const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodo();
    }, []);

    function loadTodo() {
        fetch('https://playground.4geeks.com/todo/users/llitabb')
        .then(resp => resp.json())
        .then(data => setTodos(data.todos))
        .catch(error => console.log(error));
    }

    const addTask = (e) => {
        if (e.key === "Enter" && inputValue.trim != '') {  
          fetch('https://playground.4geeks.com/todo/todos/llitabb', {
            method: 'POST',
            body: JSON.stringify({label: inputValue}),
            headers: { "Content-Type": "application/json" }
          })
            .then(() => {
              loadTodo()
              setInputValue('')
            })
            .catch(error => console.log(error));
        }
      }
    
      const deleteTask = taskId => {
        fetch(`https://playground.4geeks.com/todo/todos/${taskId}`, {
          method: 'DELETE',
          headers: { 'Accept': 'application/json' }
        })
          .then(() => loadTodo())
          .catch(error => console.error(error));
      };
    
    function todoListItem(tasks) {
        let message;
        if (tasks.length === 0) {
            message = "No items added yet";
        } else if (tasks.length === 1) {
            message = "1 item left";
        } else {
            message = `${tasks.length} items left`;
        }
        return message;
    }

    return (
        <div className="main-wrapper">
            <div className="d-flex justify-content-center">
                <div className="col-12 col-lg-5">
                    <h1> To Do List </h1>
                    <ul>
                        <li className="d-flex align-items-center">
                            <input
                                type="text"
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}
                                onKeyUp={addTask}
                                placeholder="What do you need to remember to do?"
                            />
                        </li>
                        {todos.map((item, index) => (
                            <li key={index} className="d-flex align-items-center">
                                <div>{item.label}</div>
                                <div>
                                    <i
                                        className="bi bi-trash3-fill btn"
                                        onClick={() => deleteTask(item.id)}
                                    ></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                    <div>{todoListItem(todos)}</div>
                </div>
            </div>
            <div className="fixed-bottom p-4 text-center fw-semibold">
                Copyright © Made with ❤️ by Llitabb
            </div>
        </div>
    );
};

export default Todolist;
