import React from 'react';
const Mens = (props) =>  {
        return (
            <div>
                <h1 className="text-center text-danger">This is Mens and name is {props.name()}</h1>
            </div>
        );
}

export default Mens;
