import React from "react";

const Home = () => {

    function llamarTarea() {
        console.log('llamar api')
        fetch('https://playground.4geeks.com/todo/users/llitabb')
        .then((response) => response.json())
        .then((data)=> console.log(data.todos))
    }

    function crearTarea() {
        console.log('crear tarea')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
            fetch('https://playground.4geeks.com/todo/todos/llitabb',requestOptions)
            .then(resp => resp.json())
            .then(data => setTodos(data.todos))
            .catch(error => console.log(error));
    }
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Bienvenidos a useEffect</h1>
            <button onClick={llamarTarea}>Llamar tarea</button>
            <button onClick={crearTarea}>Crear tarea</button>
        </div>
    );
};

export default Home;