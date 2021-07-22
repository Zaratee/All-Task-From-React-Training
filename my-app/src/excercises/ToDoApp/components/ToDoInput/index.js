import '../../App.css'
import React, { useState } from 'react';

function ToDoInput(props){
    const {getToDoList} = props;
    const [inputToDo, setInputToDo] = useState('');
    const sendInputValue = () => {
        getToDoList(inputToDo);
        setInputToDo('');
    }

    return(
        <div>
            <div className="input-form">
                <input className="input-todo" placeholder='New to do...' value={inputToDo} onInput={e => setInputToDo(e.target.value)} ></input>
                <div className="button-success" onClick={sendInputValue}>Send</div>
            </div>
        </div>
    )
}

export default ToDoInput;