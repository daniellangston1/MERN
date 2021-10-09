import React from 'react';

const PersonCard = (props) => {


  const { firstName, lastName, hair, age} = props;

  return (
      <div>
          <h1> { lastName }, { firstName }</h1>
          <p> Age: { age }</p>
          <p>Hair color: { hair }</p>
      </div>
  );
}

export default PersonCard;