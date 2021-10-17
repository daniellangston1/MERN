import React from "react";

const Display = (props) => {

const {ninjaBoxArray} = props

return(
    <div>
        {
            ninjaBoxArray.map((box, index) => (
            <p style = {{
                width: box.width , backgroundColor: box.color , display:'inline-block', margin:'5px' , height:box.width
            }}>
                
            </p>


            ))
        }

    </div>
)
}

export default Display;