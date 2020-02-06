import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import PresCandidates from './PresCandidates';
import {StyledTweet} from '../../../styles/Styles';

const Tweets = props => {
    const [tweet, setTweet] = useState(); 
    const [count, setCount] = useState(0); 
    const [score, setScore] = useState(0); 
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tweets')
        .then(res => {
            setTweet(res.data.rounds[count].tweet.text);
            console.log(res);   
        })
        .catch(err => {
            console.log(err)       
        })
    }, [count, tweet])
	console.log('tweet from Tweet.js', tweet);


    return (
        <>
        <StyledTweet>{tweet}</StyledTweet>
        <PresCandidates score={score} setScore={setScore} setCount={setCount} count={count} />
        {console.log('count in tweet', count)}
        </>
    );
}

export default Tweets;