// import React, { useState } from  'react';
    
// const UserForm = (props) => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");  
    
//     const createUser = (e) => {
//         // we must prevent the default refresh of the browser to keep our state from being reset
//         e.preventDefault();
    
//         // create a javascript object to hold all of the values
//         const newUser = { username, email, password};
//         console.log("Welcome", newUser);
//         setUsername('');
//         setEmail('');
//         setPassword('');
//     };
    
//     return(
//         <div>
//         <form onSubmit={ createUser }>
//             <div>
//                 <label>Username: </label> 
//                 <input type="text" value = {username}onChange={ (e) => setUsername(e.target.value) } />
//             </div>
//             <div>
//                 <label>Email Address: </label> 
//                 <input type="text" value = {email} onChange={ (e) => setEmail(e.target.value) } />
//             </div>
//             <div>
//                 <label>Password: </label>
//                 <input type="text" value = {password} onChange={ (e) => setPassword(e.target.value) } />
//             </div>
//             <input type="submit" value="Create User" />
//         </form>
//         <div>
//             <p>Username: {username}</p>
//             <p>Email: {email}</p>
//             <p>Password: {password}</p>
//         </div>
//         </div>
//     );
// };
    
// export default UserForm;

import React, { useState } from 'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const Form = (props) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");
  const [ firstNameError, setFirstNameError ] = useState("");
  const [ lastNameError, setLastNameError] = useState("");
  const [ emailError, setEmailError ] = useState("");
  const [ passwordError, setPasswordError ] = useState("");
  const [ confirmPasswordError, setConfirmPasswordError ] = useState("");
  const [ hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);


  const createUser = (e) => {
      e.preventDefault();

      const newUser = {firstName, lastName, email, password}
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      setHasBeenSubmitted(true);
  };
  // using an object to hold style options for our results div
  const formDataDivStyle = {
    textAlign: "left", 
    width: "450px", 
    margin: "auto",
  }

  const inputDataDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
  }

  // The return can only return a single React element, it does NOT
  //    have to be a div.  It can be a form or any other element.
  return (
    <div>
      <form style={{ marginTop: "20px" }} onSubmit = {createUser}>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName"
            onChange={ (e) => setFirstName(e.target.value)}
          />
          {
          firstName.length > 0 ?
            firstName.length < 2 ?
              <p className="error">First Name must be at least 2 characters</p>
              : null
            : null 
        }
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            onChange={ (e) => setLastName(e.target.value) }
          />
          {
          lastName.length > 0 ?
            lastName.length < 2 ?
              <p className="error">Last Name must be at least 2 characters</p>
              : null
            : null 
        }
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            name="email" 
            onChange={ (e) => setEmail(e.target.value) }
          />
          {
          email.length > 0 ?
            email.length < 2 ?
              <p className="error">email must be at least 2 characters</p>
              : null
            : null 
        }
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={ (e) => setPassword(e.target.value) }
          />
        {
          password.length > 0 ?
            password.length < 8 ?
              <p className="error">Password must be at least 8 characters</p>
              : null
            : null 
        }
        </div>
        <div style={inputDataDivStyle}>
          <label htmlFor="confirmPassord">Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            onChange={ (e) => setConfirmPassword(e.target.value) }
          />
          {
          password.length >= 8 && confirmPassword.length > 0 ?
            password !== confirmPassword ?
              <p className="error">Passwords do not match</p>
              : null
            : null 
        }
        </div>
      </form>

      <div style={ formDataDivStyle }>
        <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
        <p>
          <label>First Name: </label>{ firstName }
        </p>
        <p>
          <label>Last Name: </label>{ lastName }
        </p>
        <p>
          <label>Email: </label>{ email }
        </p>
        <p>
          <label>Password: </label>{ password }
        </p>
        <p>
          <label>Confirm Password: </label>{ confirmPassword }
        </p>
      </div>
    </div>
  )
}

export default Form;