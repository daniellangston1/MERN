import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';

// imports removed for brevity
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const [themeMode, setThemeMode] = usestate({
    style: 'day'
  })

  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
          <MessageForm themeMode={themeMode} setThemeMode = {setThemeMode}/>
          <MessageForm onNewMessage={ youveGotMail } />
          <MessageDisplay message={ currentMsg } />
      </>
  );
}
  
export default App;