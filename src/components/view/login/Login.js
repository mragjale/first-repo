import React from "react";
import {Link} from "react-router-dom";


const Login = () => {
    const saveData = () => {
localStorage.setItem('name', 'Ghanshyam');
    }
    return (
        <div>
            <button><Link to="/container">Home</Link></button>
            <button onClick={saveData}>save</button>
        </div>
    )
}
export default Login;
