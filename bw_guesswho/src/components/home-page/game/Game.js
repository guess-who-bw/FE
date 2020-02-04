import React from 'react';
import PresCandidates from './PresCandidates';
import Tweet from './Tweet';

const Game = () => {
    return (
        <div>
            <h1>Game component!</h1>
            <Tweet/>
            <PresCandidates/>
        </div>
    )
}

export default Game;