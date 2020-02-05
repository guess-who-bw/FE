import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {axiosWithAuth} from '../../../utils/axiosWithAuth';
import {Choice, Div, ChoiceDiv, Submit} from '../../../styles/Styles';

const PresCandidates = () => {
    const [handle1, setHandle1] = useState();
    const [handle2, setHandle2] = useState();
    const [handle3, setHandle3] = useState();
    const [correctAns, setCorrectAns] = useState();
    const [url, setUrl] = useState();
    const [id1, setId1] = useState();
    const [id2, setId2] = useState();
    const [id3, setId3] = useState();
    const [count, setCount] = useState(0);
   
    let score = 0;
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tweets')
        .then(res => {
            setHandle1(res.data.rounds[count].options[0].handle)
            setId1(res.data.rounds[count].options[0].id)
            setHandle2(res.data.rounds[count].options[1].handle)
            setId2(res.data.rounds[count].options[1].id)
            setHandle3(res.data.rounds[count].options[2].handle)
            setId3(res.data.rounds[count].options[2].id)
            setCorrectAns(res.data.rounds[count].options.correct_option_id)
            // setUrl(res.data.rounds[0].options[0].picture_url)
            console.log('this is count', count)
        })
        .catch(err => {
            console.log(err)       
        })
    }, [count])
    // console.log('tweet from pres', tweet);
    return (
        <form>
            <ChoiceDiv className='pres'>
                <Choice type='radio' name='choice' onClick={e=>e.preventDefault()} value={id1}>{handle1}</Choice>
                <Choice type='radio' name='choice' onClick={e=>e.preventDefault()} value={id2}>{handle2}</Choice>
                <Choice type='radio' name='choice' onClick={e=>e.preventDefault()} value={id3}>{handle3}</Choice>
                <Submit type='submit' onClick={e => {e.preventDefault(); setCount(count + 1)}}>Submit</Submit>
                {/* <img src={url} /> */}
            </ChoiceDiv>
        </form>
        // (form.value === correctAns)?(score++):(null)
    );
}

export default PresCandidates;