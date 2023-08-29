import React, { useState } from 'react';
import './App.css';
import ItemLists from './components/ItemLists';



function App() {

const[inputList, setInputList] = useState(" ")
const[items, setItems] = useState([])

function itemEvents(event){
  setInputList(event.target.value);
}

function listOfItems(){
  setItems((olditems) => {
    return [...olditems, inputList]
  });
  setInputList(" ");
};



  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder='Add your items' value={inputList}  onChange={itemEvents}/>
        <button className='b1' onClick={listOfItems}> +</button>
        <ol>
         {items.map( (itemval, index) => {
           return <ItemLists 
            key={index} 
            text ={itemval}/>
         } )}
        </ol>
      </div>  
    </div>
  );
}

export default App;
