import React, {useState} from 'react';
import NinjaForm from './components/NinjaForm'
import './App.css';
import Display from './components/Display'
import Header from './components/Header'

function App() {

const [ninjaBoxArray, setNinjaBoxArray] = useState([])




  return (
    <div className="App">
      <Header/>
      <NinjaForm ninjaBoxArray={ninjaBoxArray} setNinjaBoxArray={setNinjaBoxArray}/>
      <Display ninjaBoxArray={ninjaBoxArray}/>
    </div>
  );
}

export default App;
