import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValuesType = "All" | "Active" | "Completed";

function App() {
    const [tasks, setTask] = useState<Array<TaskType>>([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false }
    ])
    const [filter, setFilter] = useState<FilterValuesType>('All')


    const removeTask = (id:string) => {
        setTask(tasks.filter(item => item.id !== id))
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {id:v1(), title: title, isDone: false}
        setTask([newTask, ...tasks ])
    }

    const filterTask = (value: FilterValuesType) => {
        setFilter(value)
    }

    const changeStatus = (id: string, isDone: boolean) => {
        setTask( tasks.map( item=> item.id === id ? {...item, isDone}: item ) )
    }

    let filteredTask;
    switch (filter) {
        case 'All':
            filteredTask = tasks;
            break;
        case 'Active':
            filteredTask = tasks.filter( item=>item.isDone)
            break;
        case 'Completed':
            filteredTask = tasks.filter( item=>!item.isDone)
            break;
        default:
            filteredTask = tasks;
            console.log('stupid button')
            break;
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredTask}
                      removeTask={removeTask}
                      filterTask={filterTask}
                      addTask={addTask}
                      changeStatus={changeStatus}/>
        </div>
    );
}

export default App;
