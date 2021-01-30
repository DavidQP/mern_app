import React, { useState } from 'react';
import './style.scss';
import { addUser } from '../actions/userActions'
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';


const Register = (props) => {


    const [username, setUsername ] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');


    const [msgUsername, setmsgUsername] = useState('');
    const [msgName, setmsgName] = useState('');
    const [msgLastname, setmsgLastName] = useState('');
    const [msgAge, setmsgAge] = useState('');
    const [msgEmail, setmsgEmail] = useState('');
    const [msgPassWord, setmsgPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        var emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        var usernamePattern = new RegExp(/^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/);

        
        if(name === '' ){
            setmsgName('The name must not be empty')
        }

        if(lastname === '') {
            setmsgLastName('The lastname must not be empty')
        }

        if(username === '' || !usernamePattern.test(username)){
            setmsgUsername('Username invalid')
            
        }
        
        if(age < 18){
            setmsgAge('Must be of legal age')
        }
        
        if(email === '' || !emailPattern.test(email)){
            setmsgEmail('Email invalid');
        }         

        if(password === ''){
            setmsgPassword('Please enter valid password');


        } 
        else if( password.length <= 6) {
            setmsgPassword('The password must be greater than 6 characters');
        }

        console.log("Prueba");

        const newUser =  { 
            id: uuidv4(),
            name ,
            lastname,
            username,
            age, email,
            password  
        };
        
        props.addUser(newUser);

    }

    return(
        <div className='users'>
            <div className='wrapper'>
                <div className='login-form'>
                    <form onSubmit={submitHandler} >
                        <h2>Register Form</h2>
        
                        <div>
                            <input 
                                type='text' 
                                placeholder='Name' 
                                onChange={(e) => setName(e.target.value)}
                                
                            />
                            {(msgName !== '')? (<div className='error'>{msgName}</div>): ''}
                        </div>

                        <div>
                            <input 
                                type='text' 
                                placeholder='Lastname' 
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            {(msgLastname !== '')? (<div className='error'>{msgLastname}</div>): ''}
                        </div>

                        <div>
                            <input 
                                type='text' 
                                placeholder='Username'
                                onChange={(e) => setUsername(e.target.value)} 
                                />
                            {(msgUsername !== '')? (<div className='error'>{msgUsername}</div>): ''}
                        </div>

                        <div>
                            <input 
                                type='number'  
                                min="18" 
                                placeholder='Age' 
                                onChange={(e) => setAge(e.target.value)}
                            />
                            {(msgAge !== '')? (<div className='error'>{msgAge}</div>): ''}
                        </div>

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
                        <div>Do you already have an account? <Link to='/'>Enter here</Link> </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { addUser })(Register);
