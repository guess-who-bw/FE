import React, {useState, useEffect} from 'react';

import {axiosWithAuth} from '../../../utils/axiosWithAuth';
import {Choice, ChoiceDiv, ScoreP, InfoDiv, LevelP} from '../../../styles/Styles';

const PresCandidates = (props) => {
    const id = localStorage.id
    const putRequest = useState(
        axiosWithAuth()
        .put(`/api/users/${id}`, {points: props.score})
        .then(axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => {
              console.log('get points after put request',res)
              
    })))
    
    const [handle1, setHandle1] = useState();
    const [handle2, setHandle2] = useState();
    const [handle3, setHandle3] = useState();
    const [correctAns, setCorrectAns] = useState();
    const [id1, setId1] = useState();
    const [id2, setId2] = useState();
    const [id3, setId3] = useState();
    const [wrongCount, setWrongCount] = useState(0);
    
    useEffect(() => {
        axiosWithAuth()
        .get('/api/tweets')
        .then(res => {
            setHandle1(res.data.rounds[props.count].options[0].handle)
            setId1(res.data.rounds[props.count].options[0].id)
            setHandle2(res.data.rounds[props.count].options[1].handle)
            setId2(res.data.rounds[props.count].options[1].id)
            setHandle3(res.data.rounds[props.count].options[2].handle)
            setId3(res.data.rounds[props.count].options[2].id)
            setCorrectAns(res.data.rounds[props.count].correct_option_id)
        })
        .catch(err => {
            console.log(err)       
        })
    }, [props.count])
    // console.log('tweet from pres', tweet);
    return (
        <div>
                <ChoiceDiv className='pres'> 
                    <Choice className='choice' id={id1} onClick={
                        e => {
                            e.preventDefault(); 
                            (e.target.id == correctAns)?
                            ({putRequest}&&props.setScore(props.score + 1)):
                            setWrongCount(wrongCount + 1); 
                            (props.count===29)?
                            (props.setCount(0)):
                            props.setCount(props.count + 1)
                            }}>{handle1}</Choice>
                    <Choice className='choice' id={id2} onClick={
                        e => {
                            e.preventDefault(); 
                            (e.target.id == correctAns)?
                            ({putRequest}&&props.setScore(props.score + 1)):
                            setWrongCount(wrongCount + 1);(
                                props.count===29)?(
                                    props.setCount(0)):
                                    props.setCount(props.count + 1)}
                                    }>{handle2}</Choice>
                    <Choice className='choice' id={id3} onClick={
                        e => {
                            e.preventDefault(); 
                            (e.target.id == correctAns)?
                            ({putRequest}&&props.setScore(props.score + 1)):
                            setWrongCount(wrongCount + 1);(
                                props.count===29)?(
                                    props.setCount(0)):
                                    props.setCount(props.count + 1)}
                                    }>{handle3}</Choice>
                </ChoiceDiv>
            <InfoDiv>
                <ScoreP>Score: {props.score}</ScoreP>
                <LevelP>Level: {Math.floor(props.score / 10)}</LevelP>
            </InfoDiv>    
        </div>
    );
}

export default PresCandidates;