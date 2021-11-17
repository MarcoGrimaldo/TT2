import React from 'react';
import '../styleLogin.css';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <form class="login">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button id="lgn-btn" className="btn btn-success"><Link to="/monitoreo">Login</Link></button>
            </form>
        </div>
    )
}

export default Login
