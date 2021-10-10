import './App.css';
import PersonCard from './components/PersonCard';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName = {'Langston'}
      firstName = {'Daniel'}
      age = {24}
      hair = {'brown'}
      />
      <PersonCard 
      lastName = {'Langston'}
      firstName = {'Gabriela'}
      age = {23}
      hair = {'blonde'}
      />
      <PersonCard 
      lastName = {'Langston'}
      firstName = {'Ken'}
      age = {35}
      hair = {'brown'}
      />
            <PersonCard 
      lastName = {'Langston'}
      firstName = {'Marci'}
      age = {33}
      hair = {'brown'}
      />
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <UserForm />
    </div>
  );
}

export default App;

