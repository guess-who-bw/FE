import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { axiosWithAuth } from './utils/axiosWithAuth';

import './styles/App.css';
import { AppDiv } from './styles/Styles';

import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/home-page/HomePage';
import Game from './components/home-page/game/Game';

function App() {
	// const [tweet, setTweet] = useState();    
    // useEffect(() => {
    //     axiosWithAuth()
    //     .get('/api/tweets')
    //     .then(res => {
    //         console.log('res from App', res)
    //         setTweet(res.data.rounds[0]);
    //     })
    //     .catch(err => {
    //         console.log(err)       
    //     })
    // }, [])
	// console.log('tweet from App', tweet);
	
	return (
		<AppDiv className="App">
			<Switch>
				<PrivateRoute exact path="/home-page" component={HomePage} />
				<Route exact path="/game" render={props => <Game  {...props}/>}/>
				<Route path="/create-account" render={(props) => <SignUp {...props} />} />
				<Route path="/" render={(props) => <Login {...props} />} />
			</Switch>
		</AppDiv>
	);
}

export default App;
