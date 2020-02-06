import React from 'react';

import Menu from '../Nav/Menu';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {DeleteButton, DeleteDiv, DeleteP} from '../../styles/Styles';

export default function Settings(props) {
    const Delete = () => {
    axiosWithAuth()
        .delete(`/api/users/${localStorage.id}`)
        props.history.push('/login')
        localStorage.clear()
    }
    return (
        <DeleteDiv>
            <Menu />
            <DeleteP>Warning! You are about to delete your account!</DeleteP>
            <DeleteButton onClick={Delete}>Delete Account</DeleteButton>
        </DeleteDiv>
    )
}