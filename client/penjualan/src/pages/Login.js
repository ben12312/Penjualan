import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Login(props) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function loginButton() {
        if (user === "" || password === "") {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must fill the user and password'
            })
        }

        axios.post('http://localhost:3000/login', { user, password })
            .then(res => {
                console.log(res.data);
                props.navigation.navigate("Product")
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong user or password'
                })
            })
    }

    return (
        <>
            <div>
                <h1 className="text-center" style={{ color: 'wheat', marginTop: '-5cm' }}>Login</h1>
                <form className="container" style={{ marginTop: '2cm' }}>
                    <h3>User :</h3>
                    <input onChange={(event) => setUser(event.target.value)} type="text" className="form-control" placeholder="username" />
                    <div>
                        <h3>Password :</h3>
                        <input onChange={(event) => setPassword(event.target.value)} type="text" className="form-control" placeholder="psssword" />
                    </div>
                    <button onClick={() => { loginButton() }} type="button" style={{ marginTop: '0.5cm' }} className="btn btn-secondary btn-lg">Login</button>
                </form>
            </div>
        </>
    )
}