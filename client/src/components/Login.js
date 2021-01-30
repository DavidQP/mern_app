import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';  

const Login = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const [msgEmail, setmsgEmail] = useState('');
    const [msgPassWord, setmsgPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        var emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

        console.log(email);
        if(email === ''){
            setmsgEmail('Email address is not valid');
        } else if(!emailPattern.test(email)) {
            setmsgEmail('Email invalid');             
        }

        if(password === ''){
            setmsgPassword('Please enter valid password');


        } else if( password.length <= 6) {
            setmsgPassword('The password must be greater than 6 characters');
        }


    }

    return(
        <div className='wrapper'>
            <div className='login-form'>
                <form onSubmit={submitHandler} >
                    <h2>Login</h2>
                    <div>
                        <input 
                            type='email' 
                            placeholder='Email' 
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                        {(msgEmail !== '')? (<div className='error'>{msgEmail}</div>): ''}
                    </div>
                    <div>
                    <input 
                        type='password' 
                        placeholder='password' 
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>
                    {(msgPassWord !== '')? (<div className='error'>{msgPassWord}</div>): ''}
                    </div>
                    <div>
                        <button type='submit'>Sigin</button>
                    </div>
                    <div> You still do not have an account? Enter <Link to='/register'>here.</Link>  </div>
                </form>
            </div>
            <div className='info'>
                <h3>See list of users <Link to='/list'>here.</Link></h3> 
            </div>
            
        </div>
        
    )
}

export default Login;
