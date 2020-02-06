import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {NavLink, Route} from 'react-router-dom';

import Menu from '../Nav/Menu';
import Game from './game/Game';
import PrivateRoute from '../PrivateRoute';
import {Button, LongButton, P, StyledButton, StyledButton2, Div2, Span1, Span2, PresButton} from '../../styles/Styles';

const HomePage = props => {


    return(
        <div>
            <Menu />
            <Div2><Span1>Guess</Span1><Span2>Who?</Span2></Div2>
                <P>Choose Game Mode</P>
                <div>
                    <StyledButton selected type='radio' name="singlePlayer">Single Player</StyledButton>
                    <StyledButton2 type='radio' name="multiPlayer" onClick={()=>alert('Feature is not yet available.')}>MultiPlayer</StyledButton2>
                </div>    
                <P>Choose Tweeters</P>
                <div>
                    <PresButton selected type='radio'>Presidential Candidates</PresButton>
                    <LongButton type='radio' onClick={()=>alert('Feature is not yet available.')}>Movie Stars</LongButton>
                    <LongButton type='radio' onClick={()=>alert('Feature is not yet available.')}>Athletes</LongButton>
                </div>

                <NavLink to='/game'><Button>Play!</Button></NavLink>
            </div>
)
}
export default HomePage
