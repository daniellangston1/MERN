import React from 'react';
import {Link} from '@reach/router';

const Error = (props)=>{



    return(
        <div>

            <p>Sorry! We could not find the author you are looking for. Would you like to add a new author to our database?</p>
            <Link to={"/new"}>Create an Author</Link>
        </div>
    )
}

export default Error;