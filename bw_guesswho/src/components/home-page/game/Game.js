import React from 'react';

import PresCandidates from './PresCandidates';
import Tweet from './Tweet';
import Menu from '../../Nav/Menu';
const Game = () => {
    return (
        <div>
            <Menu />
            <h1>Game component!!!</h1>
            <Tweet/>
            <PresCandidates/>
        </div>
    )
}

export default Game;