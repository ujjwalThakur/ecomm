import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.components';

import './sign-in-and-sign-up.styles.css';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn className='sign-in' />
        <SignUp />
    </div>
);

export default SignInAndSignUp;