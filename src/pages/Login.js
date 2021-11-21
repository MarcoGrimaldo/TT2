import React, {useState} from 'react';
import '../styleLogin.css';
import {Alert} from 'react-bootstrap';

//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate  } from "react-router-dom";

const Login = () => {

    //const email = useRef(null);
    //const password = useRef(null);

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const [errorMsg, seterrorMsg] = useState('');
    const [errorFlag, seterrorFlag] = useState(false);

    let navigate = useNavigate();

    const authFun = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate("/monitoreo");
        })
        .catch((error) => {
            const errorMessage = error.message;
            seterrorFlag(true);
            seterrorMsg(errorMessage);
        });
    }

    return (
        <div>
            <div className="login">
                <input type="text" placeholder="Email" onChange={e => setemail(e.target.value)}/>
                <input type="password" placeholder="Contraseña" onChange={e => setpassword(e.target.value)}/>
                {errorFlag ? <Alert variant={'danger'}>
                    {errorMsg}
                </Alert>: ''}
                <button id="lgn-btn" className="btn btn-success" onClick={authFun}>Entrar</button>
            </div>
        </div>
    )
}

export default Login
