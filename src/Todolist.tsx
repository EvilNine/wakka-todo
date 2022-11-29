import React, {ChangeEvent,KeyboardEvent, MouseEventHandler, useState} from 'react';
import {FilterValuesType} from "./App";
import {Button} from "./components/Button";
import Checkbox from "./components/Checkbox";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (task:string)=> void
    addTask: (title: string)=>void
    filterTask: (value: FilterValuesType)=> void
    changeStatus: (id: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState('')
    const [error, setError] = useState(false);


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        setError(false)
    }
    const onClickButtonHandler = () => {
        title.trim() !== '' ? props.addTask(title.trim()) : setError(true)
        setTitle('')
    }
    const onKeypressInput = (e: KeyboardEvent<HTMLInputElement>) => {
        if( e.key === 'Enter' ) onClickButtonHandler()
    }

    // const onSetFilterAll = ()  => {
    //     props.filterTask('All' )
    // }
    // const onSetFilterActive = ()  => {
    //     props.filterTask('Active' )
    // }
    // const onSetFilterCompleted = ()  => {
    //     props.filterTask('Completed' )
    // }

    const onChangeFilterHandler = (value: FilterValuesType) => {
        props.filterTask(value)
    }

    // const onRemoveHandler = (id: string) => {
    //     props.removeTask(id)
    // }

    const onCheckHandler = (id: string, checked: boolean) => {
        props.changeStatus(id, checked)
    }


    const taskItem = props.tasks.map((item)=>{
            const onRemoveHandler = () => {props.removeTask(item.id)}


            return (
                <li key={item.id} className={ item.isDone ? 'isDone' : '' }>
                    <Button name={'X'} callBack={onRemoveHandler} />
                    <Checkbox checked={item.isDone} callBack={(isDone)=>onCheckHandler(item.id, isDone)} />
                    {/*<input onChange={onCheckHandler} type="checkbox" checked={item.isDone}/>*/}
                    <span>{item.title}</span>
                </li>
            )
    })

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   className={ error ? 'error':''}
                   onChange={onChangeInputHandler}
                   onKeyDown={onKeypressInput}/>
            <Button name={'+'} callBack={onClickButtonHandler} />
        </div>
        {error && <div className="error-message">Title is required</div>}
        <ul>
            {taskItem}
        </ul>
        <div>
            {/*<button onClick={onSetFilterAll}>All</button>*/}
            {/*<button onClick={onSetFilterActive}>Active</button>*/}
            {/*<button onClick={onSetFilterCompleted}>Completed</button>*/}
            <Button name={'All'} callBack={()=>onChangeFilterHandler('All')} />
            <Button name={'Active'} callBack={()=>onChangeFilterHandler('Active')} />
            <Button name={'Completed'} callBack={()=>onChangeFilterHandler('Completed')} />

        </div>
    </div>
}
