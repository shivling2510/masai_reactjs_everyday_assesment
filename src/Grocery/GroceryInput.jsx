import React, {useState, useEffect} from 'react';

const GroceryInput =({handleTodo, msg})=>{
const [title, setTitle]=useState('');

const handleChange =(e)=>{setTitle(e.target.value)}
    return(
        <div>
            <h1>Todo Input</h1>
            <input type='text' onChange={handleChange} value={title}/>
            <button onClick={()=>{handleTodo(title);setTitle('') }} >Add Todo</button>
            <p style={{color:'red'}}> {msg} </p>
        </div>
    )
}

export default GroceryInput;