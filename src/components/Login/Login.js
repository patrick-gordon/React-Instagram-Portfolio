import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Login(props) {

    const [creds, setCreds] = useState({ username: '', password: '' });
    const [loginStatus, setLoginStatus] = useState('');

    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    function login(e) {
        e.preventDefault();
        axios
            .post('', creds)
            .then(res => {
                console.log(`login response: `, res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userid', res.data.user.id); 
                setLoginStatus("Success!");
                setCreds({
                    username: '',
                    password: ''
                });
                props.history.push("/protected");
            })
            .catch(err => {
                console.log(err);
                setLoginStatus(`${err}`);
                setCreds({
                    username: '',
                    password: ''
                })
            });
    }


    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={login}>
                <label for='username'>Username
                <input
                    type='username'
                    name='username'
                    value={creds.username}
                    onChange={handleChange}
                    />
                </label>
                <label for='password'>Password
                <input 
                    type='password'
                    name='password'
                    value={creds.password}
                    onChange={handleChange}
                    />
                </label>
                <button>Log In</button>
                <p>Don't have an account? </p>
                <p><Link to='/signup'>Sign up here</Link></p>
                {loginStatus && <p>{loginStatus}</p>}

            </form>
        </div>
    )
}
