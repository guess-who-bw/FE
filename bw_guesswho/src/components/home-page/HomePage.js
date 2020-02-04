import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {NavLink, Route} from 'react-router-dom';

import Menu from '../Nav/Menu';
import Game from './game/Game';
import PrivateRoute from '../PrivateRoute';
import {Button, LongButton, P, StyledButton, StyledButton2} from '../../styles/Styles';

const HomePage = props => {


    return(
        <div>
            <Menu />
                <P>Choose Game Mode</P>
                <div>
                    <StyledButton selected type='radio' name="singlePlayer">Single Player</StyledButton>
                    <StyledButton2 disabled type='radio' name="multiPlayer">MultiPlayer</StyledButton2>
                </div>    
                <P>Choose Tweeters</P>
                <div>
                    <LongButton selected type='radio'>Presidential Candidates</LongButton>
                    <LongButton type='radio' disabled>Movie Stars</LongButton>
                    <LongButton type='radio' disabled>Athletes</LongButton>
                </div>

                <NavLink to='/game'><Button>Play!</Button></NavLink>
            </div>
)
}
export default HomePage
