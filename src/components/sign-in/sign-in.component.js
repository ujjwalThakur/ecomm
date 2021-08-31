import React from 'react';
import { Redirect } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.components';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


import './sign-in.styles.css';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: '',
            })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        let eleName = event.target.name;
        this.setState({
            [eleName]: event.target.value,
        })
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <h1>I already have an account</h1>
                <span>Sign in with email and password</span>
                <form className='sign-in-form'>
                    
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email'
                        value = {this.state.email} 
                        handleChange = {this.handleChange}
                        required />

                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value = {this.state.password}
                        handleChange = {this.handleChange} 
                        required/>

                    <CustomButton
                        type='submit'
                        onClick={this.handleSubmit}
                        styles={{
                            backgroundColor: 'rgb(20,20,150)',
                            color: '#fff'
                        }}
                    >Sign in</CustomButton>

                    <CustomButton
                        onClick={signInWithGoogle}
                        styles={{
                            backgroundColor: 'rgb(20,20,150)',
                            color: '#fff'
                        }}
                    >Sign in with Google</CustomButton>
                    
                    {/* <input
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        />
                    <label>Email</label>
                    <input
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                        />
                    <label>Password</label>

                    <input type='submit' value='Submit Form'/> */}
                </form>
            </div>
        );
    }
}

export default SignIn;