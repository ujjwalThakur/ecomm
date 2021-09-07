import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createUserprofileDocument, auth } from './firebase/firebase.utils';

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { setCurrentUser } from './redux/userReducer'
import store from './redux/store';

function HatsPage() {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserprofileDocument(userAuth);

        userRef.onSnapshot(snapshot => {

          store.dispatch(setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            }
          ));
        });
      }

      else {
        console.log('dispatching null');
        store.dispatch(setCurrentUser(
          null
        ))
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={Homepage} />
          <Route path='/signin' component={SignInAndSignUp} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>

    );
  }
}

export default App;




// function TopicList(props) {
  //   console.log(props);
  //   return (
  //     <>
  //       <h1>Topic List</h1>
  //       <button onClick={() => {props.history.push('topics/1') }}> TOPICS</button>
  //     </>
  //   );
  // }
  // function TopicDetail(props) {
  //   console.log(props);
  //   return (
  //     <>
  //       <h1>Topic Detail</h1>
  //     </>
  //   );
  // }
  // const Homepage2 = () => {
  //   return (
  //     <>

  //       <h1>Homepage dummy</h1>
  //     </>
  //   );
  // }
