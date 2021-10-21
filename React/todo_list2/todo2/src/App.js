import React, {useState} from 'react';
import ToDoList from './components/Todo';
import './App.css';

function App() {

  const [taskArray, setTaskArray ] = useState([])
  const [newTask, setNewTask] = useState('')


  const handleComplete = (e, arrayIndex) =>{
    let updatedArray = [...taskArray]
    updatedArray[arrayIndex].isComplete = (e.target.checked)
    setTaskArray(updatedArray)
  }



  const addNew = (e) => {


    e.preventDefault();

    setTaskArray([
      ...taskArray,
      { 
        task: newTask,
        isComplete: false
      }
    ]);

    setNewTask('');


    /*
      get input text
      add to array
        - save to state
      
      -- 
      add listing to the HTML

    */
  }

  return (
    <div className="App">

        <form onSubmit={ addNew }>
            <div>
                <label>Add New: </label>
                <input 
                type="text" 
                value= {newTask}
                onChange={(e)=> setNewTask(e.target.value)} />
            </div>
            <button>Submit</button>
        </form>
          <ul>
          {
            taskArray.map((item, index)=>
            <li 
              key={index}>
              {item.task} 
              {item.isComplete ? 'true': 'not complete'}
              <input type='checkbox' checked = {item.isComplete}
              onChange={(e)=> handleComplete(e, index)}
              ></input>


            </li> 
            
            )
          }
          </ul>
      </div>
  );
}

export default App;
