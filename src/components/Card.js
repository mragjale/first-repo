import React from "react";

const Card = (props) => {
    console.log(props);
    const cardStyle = {
        margin: "1rem",
    };
    return(
        <div>
            <div className="card" style={cardStyle}>
                <img  src={props.img} alt="alt" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h6>{props.rollNo}</h6>
                    <p className="card-text">{props.clgName}</p>
                    <button onClick={props.onClick}>click</button>
                </div>
            </div>
        </div>
    );
}
export default Card;
