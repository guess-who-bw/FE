import React, {useState, useEffect} from 'react';

import {axiosWithAuth} from '../../../utils/axiosWithAuth';
import {Choice, ChoiceDiv, ScoreP, InfoDiv, LevelP, PresCandImg} from '../../../styles/Styles';

const PresCandidates = ({score, setScore, count, setCount}) => {
    const id = localStorage.id
    const putRequest = 
        axiosWithAuth()
        .put(`/api/users/${id}`, {points: score})
        .then(() => 
        axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => localStorage.setItem("points", res.data.points)))              
    
    const [handle1, setHandle1] = useState();
    const [handle2, setHandle2] = useState();
    const [handle3, setHandle3] = useState();
    const [correctAns, setCorrectAns] = useState();
    const [id1, setId1] = useState();
    const [id2, setId2] = useState();
    const [id3, setId3] = useState();
    const [wrongCount, setWrongCount] = useState(0);
    const [image, setImage] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    
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
            setCorrectAns(res.data.rounds[count].correct_option_id)
            setImage(res.data.rounds[count].options[0].picture_url)
            setImage2(res.data.rounds[count].options[1].picture_url)
            setImage3(res.data.rounds[count].options[2].picture_url)
        })
        .catch(err => {
            console.log(err)       
        })
    }, [count])
    return (
        <div>
                <ChoiceDiv className='pres'>
                     
                    <Choice className='choice' id={id1} onClick={
                        e => {
                            e.preventDefault(); 
                            (e.target.id === JSON.stringify(correctAns))?
                            ({putRequest}&&setScore(score + 1)):
                            setWrongCount(wrongCount + 1); 
                            (count===29)?
                      (setCount(0)):
                            (setCount(count + 1))
                            }}><PresCandImg src={image}/>@{handle1}
                    </Choice>
                    
                    <Choice className='choice' id={id2} onClick={
                        e => {
                            e.preventDefault(); 
                            (e.target.id === JSON.stringify(correctAns))?
                            ({putRequest}&&setScore(score + 1)):
                            setWrongCount(wrongCount + 1);(
                                count===29)?(
                                    setCount(0)):
                                    (setCount(count + 1))}
                                    }><PresCandImg src={image2}/>@{handle2}
                    </Choice>
                    
                    <Choice className='choice' id={id3} onClick={
                        e => {
                            e.preventDefault(); 
                            (e.target.id === JSON.stringify(correctAns))?
                            ({putRequest}&&setScore(score + 1)):
                            setWrongCount(wrongCount + 1);(
                                count===29)?(
                                    setCount(0)):
                                    (setCount(count + 1))}
                                    }><PresCandImg src={image3}/>@{handle3}
                    </Choice>
                    
                </ChoiceDiv>
            <InfoDiv>
                <ScoreP>Score: {score}</ScoreP>
                <LevelP>Level: {Math.floor(score / 10)}</LevelP>
            </InfoDiv>    
        </div>
    );
}

export default PresCandidates;