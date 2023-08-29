import React, { useState } from "react";
function ItemLists(props){
   
    const[line , setLine] = useState(false)
    const deleteItem=()=> {
        setLine(true)
    }
    
    return (
        <div>
            <button className="b2" onClick={deleteItem}>-</button>
            <li style={{textDecoration : line ? 'line-through' : 'none'}}>{props.text}</li>  
            
        </div>
    )
}
export default ItemLists