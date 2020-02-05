import React, { useEffect } from 'react';

import PresCandidates from './PresCandidates';
import Tweet from './Tweet';
import Menu from '../../Nav/Menu';

const Game = props => {

    // console.log('tweetObj from Game', props);

    // useEffect(() => {
    //     document.querySelector('.game').append(
    //      <Tweet tweet={props.tweetObj.tweet.text}/>
    //     )
    // }, [])

    return (
        <div className="game">
            <Menu />
            <Tweet />
            <PresCandidates />
        </div>
    )
}

export default Game;