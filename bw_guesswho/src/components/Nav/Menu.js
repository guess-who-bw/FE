import React from 'react';
import {NavLink} from 'react-router-dom';

import {MenuDiv, ShowingDiv} from '../../styles/Styles';

const handleClick = () => document.getElementById('menubuttons').classList.toggle('hidden');
export default function Menu() {
    const MenuButtons = 
    <div>
        <div><NavLink to='/account'> Account </NavLink></div>
        <div><NavLink to='/settings'> Settings </NavLink></div>
        <div><NavLink to='/logout' onClick={()=>localStorage.clear()}> Log Out </NavLink></div>
        <div><NavLink to='/home-page'>Home</NavLink></div>
    </div>
    return (
        <MenuDiv className='menudiv'>
            <img src='https://i.imgur.com/4QBK6hQ.png' alt="hamburger menu logo" onClick={handleClick}></img>
            <ShowingDiv id='menubuttons' className='hidden'>{MenuButtons}</ShowingDiv>
        </MenuDiv>
    )
}