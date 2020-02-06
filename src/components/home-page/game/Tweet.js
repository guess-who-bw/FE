import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import PresCandidates from './PresCandidates';
import {StyledTweet, TweetDiv} from '../../../styles/Styles';

const Tweets = props => {
    const [tweet, setTweet] = useState(); 
    const [count, setCount] = useState(0); 
    const [score, setScore] = useState(localStorage.points);
    const getPoints = () => axiosWithAuth().get(`/api/users/${localStorage.id}`).then(res=>setScore(res.data.points))
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tweets')
        .then(res => {
            setTweet(res.data.rounds[count].tweet.text);
            getPoints();
        })
        .catch(err => {
            console.log(err)       
        })
    }, [count, tweet])

    return (
        <TweetDiv>
        <StyledTweet>{tweet}</StyledTweet>
        <PresCandidates score={score} setScore={setScore} setCount={setCount} count={count} />
        </TweetDiv>
    );
}

export default Tweets;