import React from 'react';

type TodoListTypeProps = {
    title: string
    task: Array<TaskTypeProps>
}

type TaskTypeProps = {
    id: number,
    title: string,
    isDone: boolean
}

const TodoList = (props:TodoListTypeProps) => {

    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.task.map((item)=>{
                        return <li key={item.id}><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span></li>
                    })
                }

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;