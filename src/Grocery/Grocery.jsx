import React, {useState, useEffect} from 'react';
import GroceryInput from './GroceryInput'
import GroceryList from './GroceryList';
const Grocery=()=>{
const [data, setData]=useState([]);

const handleTodo=(title)=>{
    let payLoad={
        id:Math.random(),
        status:false,
        title:title,
    }
    setData([...data, payLoad])
    console.log('title ', title, data)
}
const handleToggle =(id)=>{
 let new_data1= data.map((val)=>{
    return  val.id==id ? {...val, status: !val.status } : val 
    });

    let new_data= data.filter((item)=>{
        return item.id !==id;
    })
    console.log('ffffffff',new_data)
    setData(new_data)
}
    return(
        <div>
          <GroceryInput msg={data.length===0?'empty list please add more item': null}  handleTodo={handleTodo} />
          {data.map((item, index)=>{
            return  < GroceryList  index={index} handleToggle={handleToggle} {...item} key={item.id} />
          })}
        </div>
    )
}
export default Grocery;