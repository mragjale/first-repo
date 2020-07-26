import React from 'react'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-md-4">
                    <Link to="/" className="btn btn-block btn-danger">Home</Link>
                </div>
                <div className="col-md-4">
                    <Link to="/About" className="btn btn-block btn-info">About</Link>
                </div>
                <div className="col-md-4">
                    <Link to="/Contact" className="btn btn-block btn-success">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Menu;
