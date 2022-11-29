import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";


function App() {
    const tasks1 = [
        { id: 1, title: 'sadasdsa', isDone: true },
        { id: 2, title: 'sasda', isDone: true },
        { id: 3, title: 'xvewsaf', isDone: true }
    ]

    const tasks2 = [
        { id: 1, title: 'sadasdsa', isDone: true },
        { id: 2, title: 'sasda', isDone: true },
        { id: 3, title: 'xvewsaf', isDone: true },
        { id: 4, title: 'AASDSAxvewsaf', isDone: true }
    ]

    return (
        <div className="App">
            <TodoList title={'Good news everyone!'} task={tasks1}/>
            <TodoList title={'Hi'} task={tasks2}/>
        </div>
    );
}

export default App;
