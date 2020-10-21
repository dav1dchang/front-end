import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

export default function Signup () {

    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        fullname: '',
        email: '',
    });

    const onChange = event => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post('https://potluck-planner-bw.herokuapp.com/users/register', user)
        .then(result => {
            console.log(result.data);
            push('/Home')
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div>
            <form onSubit={onSubmit}>
                <label>Username
                <input 
                    type='text' 
                    name='username' 
                    onChange={onChange} 
                    placeholder='Enter Username' 
                    maxLength='20'
                    />
                </label>

                <label>Password
                    <input
                    type='text'
                    name='password'
                    onChange={onChange}
                    placeholder='Enter Password'
                    maxLength='12'
                    />
                </label>

                <label>Full Name
                    <input
                    type='text'
                    name='fullname'
                    onChange={onChange}
                    placeholder='Enter Your Full Name'
                    maxLength='25'
                    />
                </label>

                <label>Email
                    <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    placeholder='Enter Your Email'
                    maxLength='25'
                    />
                </label>

                <div>
                    <button>Register Now!</button>
                </div>
            </form>
        </div>
    )
}