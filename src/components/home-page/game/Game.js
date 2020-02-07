import React, { useEffect } from 'react';

import Tweet from './Tweet';
import Menu from '../../Nav/Menu';
import {Div2, Span1, Span2, GameDiv} from '../../../styles/Styles';

const Game = props => {
    
    return (
        <GameDiv className="game">
            <Menu />
            <Tweet />
        </GameDiv>
    )
}

export default Game;