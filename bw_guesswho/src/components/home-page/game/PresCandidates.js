import React, {useState, useEffect} from 'react';

import {axiosWithAuth} from '../../../utils/axiosWithAuth';
import {Choice, Div} from '../../../styles/Styles';

const PresCandidates = () => {
    const [handle1, setHandle1] = useState();
    const [handle2, setHandle2] = useState();
    const [handle3, setHandle3] = useState();
    const [url, setUrl] = useState();
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tweets')
        .then(res => {
            setHandle1(res.data.rounds[0].options[0].handle)
            setHandle2(res.data.rounds[0].options[1].handle)
            setHandle3(res.data.rounds[0].options[2].handle)
            // setUrl(res.data.rounds[0].options[0].picture_url)
        })
        .catch(err => {
            console.log(err)       
        })
    }, [])
	// console.log('tweet from pres', tweet);
    return (
        
        <Div className='pres'>
            <Choice>{handle1}</Choice>
            <Choice>{handle2}</Choice>
            <Choice>{handle3}</Choice>
            {/* <img src={url} /> */}
        </Div>
    );
}

export default PresCandidates;