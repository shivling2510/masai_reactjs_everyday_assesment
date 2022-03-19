import React, {useState, useEffect} from 'react';

const GroceryList=({id, status,msg, index, title, handleToggle})=>{
let count=0;
    return(
        <div>
            {/* <h1>Todo List</h1> */}
            <div>
                {msg}
                <p style={{textAlign:'center'}} >  <b>{index+1})</b>  : {title} 
                {/* <span> status: {status? 'completed':'not completed'} </span>  */}
                 <span> <button  style={{marginLeft:'20px'}} onClick={()=>{handleToggle(id)}}>delet </button></span> </p>
               
          
            </div>
            {/* {
                data?.map((item)=>{
                  return  <div key={item.id}>
                        <h5>Titel : {data.title} </h5>
                    </div>
                })
            } */}
        </div>
    )
}


export default GroceryList;