import React ,{useState} from "react";

function App(){

    const[newItems , setNewItems] = useState("");
    const[items , setItems]= useState([]);
    
    function handelChange(event){
        
        setNewItems(event.target.value);
    }
    function addItems(){
        setItems(prevItems =>{
            return[...prevItems,newItems];
        });
        setNewItems("");
    }



    return(
        <div className="box">
        <div className="heading">
        <h1>To Do List</h1>
        </div>
        <div className="form">
        <input onChange ={handelChange}type ="text" value={newItems} ></input>
        
        <button onClick={addItems}>
        <span>Add</span>
        </button>
        </div>
        <div>
        {items.map(todoitem => (
            <ul>
        <li>{todoitem}</li>
        </ul>
        ))}
        </div>
        </div>
    )



}
export default App;
