import React from 'react';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Display1 from './components/Display1';
import Display2 from './components/Display2';
import DisplayWordColor from './components/DisplayWordColor';
function App(){
  return(
      <div className="App">
          <Router>
              <Welcome path="/Welcome" />
              <Display1 path="/:int" />
              <Display2 path="/:word" />
              <DisplayWordColor path=":word/:fontColor/:backgroundColor" />
          </Router>
      </div>
  );
}


export default App;
