import React, { useState } from "react";

const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

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
                                onKeyUp={(e) => {
                                    if (e.key === "Enter") {
                                        setTodos(todos.concat(inputValue));
                                        setInputValue("");
                                    }
                                }}
                                placeholder="What do you need to remember to do?"
                            />
                        </li>
                        {todos.map((item, index) => (
                            <li key={index} className="d-flex align-items-center">
                                <div>{item}</div>
                                <div>
                                    <i
                                        className="bi bi-trash3-fill btn"
                                        onClick={() => setTodos(todos.filter((t, currentIndex) => index !== currentIndex))}
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
