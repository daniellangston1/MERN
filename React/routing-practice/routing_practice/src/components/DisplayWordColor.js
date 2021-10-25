const DisplayWordColor = (props) => {
    const {word, fontColor, backgroundColor } = props;

    if (isNAN(word)) {
        return ( <h2 style ={{color: fontColor, backdgroundColor: backgroundColor}} > Word is: {word}</h2>
        );
}   else {
        return( <h2>Number is: {word}</h2> );
    }
}

export default DisplayWordColor;


// console.log(isNaN(""));