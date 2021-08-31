import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

import { auth, createUserprofileDocument } from '../../firebase/firebase.utils';


import './sign-up.styles.css';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            name : '',
            email : '',
            newPassword : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event=>{
        event.preventDefault();

        const {name, email, newPassword, confirmPassword} = this.state;

        if(newPassword!==confirmPassword){
            alert('Passwords don\'t match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, newPassword);
            createUserprofileDocument(user, {displayName: name});
            this.setState({
                name : '',
                email : '',
                newPassword : '',
                confirmPassword : ''
            })
        } catch (error) {
            console.error(error.message);
        }

    }

    handleChange = event =>{
        const eleName = event.target.name;
        this.setState({
            [eleName] : event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>I don't have an account</h1>
                <span>Sign up </span>
                <form className='sign-in-form'>

                    <FormInput 
                        name='name' type='text' label='Name'
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        required />
                    <FormInput 
                        name='email' type='email' label='Email' 
                        value = {this.state.email}
                        onChange = {this.handleChange}
                        required />
                    <FormInput 
                        name='newPassword' type='password' label='New Password' 
                        value = {this.state.newPassword}
                        onChange = {this.handleChange}
                        required />
                    <FormInput 
                        name='confirmPassword' type='password' label='Confirm Password' 
                        value = {this.state.confirmPassword}
                        onChange = {this.handleChange}
                        required />

                    <CustomButton
                        onClick={this.handleSubmit}
                        type='submit'
                        styles={{
                            backgroundColor: 'rgb(20,20,150)',
                            color: '#fff'
                        }}
                    >Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;