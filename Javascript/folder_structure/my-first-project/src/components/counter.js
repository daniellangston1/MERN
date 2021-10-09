import React, { useState } from 'react';

const AgeCounter = props => {
    const [countAge, setCountAge] = useState(props.age)

    const handleClick = () => {

        setCount(countAge + 1)
    }

    return(
        <div>
            { countAge }
            <button OnClick={handleClick}>Increase age</button>
        </div>
    );
}

export default AgeCounter;