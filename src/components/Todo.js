import React, { useState } from "react";

function Todo() {
    const [tasks, setTask] = useState({
        userInput: '',
        list: []
    })

    const handleInput = e => {
        setTask({ ...tasks, userInput: e.target.value })
    }

    const addTask = () => {
        if (tasks.userInput !== '') {
            setTask({ ...tasks, list: [...tasks.list, tasks.userInput], userInput: '' })
        }
    }

    const delTask = (index) => {
        const updateArray = tasks.list.filter((_, i) => index !== i)
        setTask({ ...tasks, list: updateArray })
    }

    const delAll = () => {
        setTask({ ...tasks, list: [] })
    }

    return <>
        <h1>Things To-Do...!!</h1>
        <hr />
        <button className="delAll-btn" onClick={delAll}>Delete All</button>
        <div className="container">
            <input type='text' value={tasks.userInput} onChange={handleInput} placeholder='Add a new task' />
            <button className="add-btn" onClick={addTask}>Add</button>
            <ol>
                {
                    tasks.list.map((task, index) => {
                        return <li key={index}>
                            <span>{task} </span>
                            <button className="del-btn" onClick={() => delTask(index)}>Delete</button>
                        </li>
                    })
                }
            </ol>
        </div>
    </>
}

export default Todo;