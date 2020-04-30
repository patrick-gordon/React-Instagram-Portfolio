import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../../Utils/axiosWithAuth';
import styled from 'styled-components';

const ProfileEdit = styled.div`
padding: 2rem;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

export default function Profile(props) {

    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: "",
        favChar: "",
        });

    const userid = localStorage.userid;
    
    const toggleMode = e => {
        e.preventDefault();
        setEditing(!editing);
        console.log('toggling! ', editing);
      };

      useEffect(() => {
        axiosWithAuth()
          .get(`https://simpsons-says-nodejs.herokuapp.com/api/users/${userid}`)
          .then(res => {
              console.log('response from getUserData: ', res);
              setUser({
                ...user,
                username: res.data.user.username,
                favChar: res.data.user.favChar})
          })
          .catch(err => console.log(err.response));
      },[userid])

      const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log('user to update: ', user);
    }

    function updateUser(e) {
        console.log(`updated creds sent: `, user);
        e.preventDefault();
        axiosWithAuth()
            .put(`https://simpsons-says-nodejs.herokuapp.com/api/users/${userid}`, user)
            .then(res => {
                console.log('response from put request to update user: ', res);
                // props.history.push("/protected");
            })
            .catch(err => {
                console.log('error', err);
                // setSignupStatus(`${err}`);
                setUser({
                    username: '',
                    password: '',
                    favChar: "",
                })
            });
          setEditing(false)
    }


    if(!editing){
    return (
        <div>
            <h1>Your Account</h1>
            <button onClick={toggleMode}>Edit Details</button>
            <h2>Username: {user.username}</h2>
        </div>
        )}

    else {
        return(
            <div>
                <h1>Edit Account Details</h1>
                <form>
                <ProfileEdit>
                <label for='username'>Username
                    <input
                        type='username'
                        name='username'
                        value={user.username}
                        onChange={handleChange}
                        />
                </label>
                <label for='password'>Password
                    <input 
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />
                </label> 
                <button type='submit' onClick={updateUser}>Save</button>
                </ProfileEdit>
                    </form>
              
            </div>
        )
    }
}
