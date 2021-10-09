import React, {useState} from 'react';

const PersonCard = (props) => {

    const { firstName, lastName, hair, age} = props;
    const [countAge, setCountAge] = useState(props.age);
  
  return (
      <div>
          <h1> { lastName }, { firstName }</h1>
          <p> Age: { countAge }</p>
          <p>Hair color: { hair }</p>
          <button onClick={() => setCountAge(countAge + 1) }>Add to Age</button>
      </div>
  );
}

export default PersonCard;