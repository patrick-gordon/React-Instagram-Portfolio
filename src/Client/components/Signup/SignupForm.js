import React, {useState} from 'react';
import axios from 'axios';

export default function SignupForm(props) {

    const [newCreds, setNewCreds] = useState({
        username: '',
        password: '',
    })

    const [signupStatus, setSignupStatus] = useState('');

    const handleChange = e => {
        setNewCreds({ ...newCreds, [e.target.name]: e.target.value });
        console.log('newCreds: ', newCreds)
    }

    function signup(e) {
        e.preventDefault();
        axios
            .post('', newCreds)
            .then(res => {
                setNewCreds({
                    username: '',
                    password: '',

                });
                props.history.push("/");
            })
            .catch(err => {
                console.log(err);
                setSignupStatus(`${err}`);
            })
    }


    return (
        <div>
            <h2>Sign up to create account</h2>
            <form onSubmit={signup}>
                <label for='username'>username
                <input
                    type='username'
                    name='username'
                    value={newCreds.username}
                    onChange={handleChange}
                    />
                </label>

                <label for='password'>Password
                <input 
                    type='password'
                    name='password'
                    value={newCreds.password}
                    onChange={handleChange}
                    />
                </label>

                <button>Sign Up</button>
                {{signupStatus} && <p>{signupStatus}</p>}
                
            </form>
        </div>
    )
}
