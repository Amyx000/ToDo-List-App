import React, { useState } from "react";
import './App.css';




function App (){
  
  const[data,SetData]=useState("")
  const[items, SetItems]=useState([]);
  const text =(event)=>{
    SetData(event.target.value);

  };
  
  const addItem = ()=>{
    
    if (!data){

    } else{
      SetItems([...items, data]);
    SetData("");
    }
    
  }

  const deleteItem = (id)=>{
    const updatediems =items.filter((elm,ind)=>{
      return ind !== id;
    })
    SetItems(updatediems);
  };

  const click = (event)=>{
    if (event.key === "Enter") {
   document.getElementById("btn").click();
  }}

return(
  <>
   <h1 className="heading">ToDo List</h1>
   <div className="inputf">
   <input type="text" placeholder="Add Items" onChange={text} value={data} onKeyPress={click}/>
   <button type="submit" className="addbtn" onClick={addItem} Id="btn" >+</button>
   </div>
   <div className="container">
    <ul>
        {items.map((elm, ind)=>{
          return(
            <div className="pul">
             <li key={ind}>{elm}  </li>
            <div className="deltkey"><ion-icon onClick={()=>deleteItem(ind)} name="close-outline"></ion-icon></div>
            </div>
           
          )
        })}
    </ul>
   </div>
  </>  
)
  
}

export default App;
