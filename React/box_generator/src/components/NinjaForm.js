import React, {useState} from 'react';


const NinjaForm = (props) => {

    const { ninjaBoxArray, setNinjaBoxArray } = props
    const [ color, setColor] = useState('')
    const [ size, setSize] = useState(50+'px')

    const SubmitHandler = (e) => {

        e.preventDefault()

        setNinjaBoxArray([
            ...ninjaBoxArray,
            {
                color: color,
                size: size,
            }
            ]);

        setColor('');
        setSize(50);
        }

    return(
    <div>
        <form onSubmit = {SubmitHandler}>
            <div>
            <label>Color of Boxes</label>
                <input
                type= 'text'
                name = 'color'
                value = {color}
                onChange={ (e) => setColor(e.target.value)}
                />
            </div>
            <div>
                <label>Width and Height of Boxes (in pixels)</label>
                <input
                type= 'number'
                value = {size}
                onChange={(e) => setSize(e.target.value + 'px')}
                />
                <button>Submit</button>
            </div>
                </form>
    </div>
        )
    }
    export default NinjaForm;