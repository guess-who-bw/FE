import React, { useEffect } from 'react';

import Tweet from './Tweet';
import Menu from '../../Nav/Menu';
import {Div2, Span1, Span2} from '../../../styles/Styles';

const Game = props => {
    
    return (
        <div className="game">
            <Div2><Span1>Guess</Span1><Span2>Who?</Span2></Div2>
            <Menu />
            <Tweet />
        </div>
    )
}

export default Game;