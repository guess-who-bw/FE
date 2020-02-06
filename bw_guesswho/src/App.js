import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.css';
import { AppDiv, Div2, Span1, Span2 } from './styles/Styles';

import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/home-page/HomePage';
import Game from './components/home-page/game/Game';
import Account from './components/Account/Account';
import Settings from './components/Settings/Settings';


function App() {
	
	return (
		<AppDiv className="App">
			<Div2><Span1>Guess</Span1><Span2>Who?</Span2></Div2>
			<Switch>
				<PrivateRoute exact path="/home-page" component={HomePage} />
                <Route path="/account" component={Account} />
				<Route path="/settings" render={props => <Settings {...props} />} />
				<Route exact path="/game" render={props => <Game  {...props}/>}/>
				<Route path="/create-account" render={(props) => <SignUp {...props} />} />
				<Route path="/" render={(props) => <Login {...props} />} />
			</Switch>
		</AppDiv>
	);
}

export default App;
