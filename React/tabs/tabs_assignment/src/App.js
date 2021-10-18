import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';


function App() {


  const [tabList, setTabList] = useState([
    {
      label: 'Tab1',
      content: 'Content for the first tab'
    },
    {
      label: 'Tab2',
      content: 'Content for the second tab'
    },
    {
      label: 'Tab3',
      content: 'Content for the third tab'
    }
  ])

  const [activeTab, setActiveTab] = useState([0])


  return (
    <div className="App">
      <Tabs tabList={tabList} setTabList={setTabList} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Display tabText={tabList[activeTab].content}/>

    </div>
  );
}

export default App;
