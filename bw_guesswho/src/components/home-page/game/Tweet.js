import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';

const Tweets = props => {
	const [tweet, setTweet] = useState();    
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tweets')
        .then(res => {
            setTweet(res.data.rounds[0].tweet.text);
            console.log('res from Tweet.js', res.data.rounds[0].tweet.text)
            console.log('Tweet in tweet', tweet)
            console.log(res);
        })
        .catch(err => {
            console.log(err)       
        })
    }, [])
	console.log('tweet from Tweet.js', tweet);


    return (
        <>
        {tweet}
        </>
    );
}

export default Tweets;