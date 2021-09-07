import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import store from '../../redux/store';

import './header.styles.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const props = this.props;
        console.log('RENDERED !!!!');
        console.log(props.currentUser);
        return (
            <div className='header'>

                <Link to='/' className='logo'>
                    <Logo />
                </Link>

                <div className='options'>

                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>

                    <Link className='option' to='/contact'>
                        CONTACT
                    </Link>

                    {props.currentUser ?
                        <div
                            className='option'
                            onClick={() => {
                                auth.signOut();
                                console.log('User signed out');
                            }} >
                            SIGN OUT
                        </div>
                        :
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    }
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => (
    {
        currentUser: state.user.currentUser
    }
);



export default connect(mapStateToProps)(Header);
