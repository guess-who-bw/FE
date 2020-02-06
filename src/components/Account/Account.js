import React, {useEffect, useState} from 'react';

import Menu from '../Nav/Menu'; 
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {AccountDiv} from '../../styles/Styles';

function Account(props) {
const id = localStorage.id
const [email, setEmail] = useState()
const [points, setPoints] = useState()
useEffect( () => {
    axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => {
            setEmail(res.data.email)
            setPoints(res.data.points)
    })
        .catch(err => console.log(err))
},[])
    return (
            <AccountDiv>
                <Menu />
                <h1>Email: {email}</h1>
                <h1>Score: {points}</h1>
            </AccountDiv>
    )
}

export default Account