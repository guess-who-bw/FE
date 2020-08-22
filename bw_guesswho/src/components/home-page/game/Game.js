import React from 'react';

import Tweet from './Tweet';
import Menu from '../../Nav/Menu';
import {GameDiv} from '../../../styles/Styles';

const Game = props => {
    
    return (
        <GameDiv className="game">
            <Menu />
            <Tweet />
        </GameDiv>
    )
}

export default Game;