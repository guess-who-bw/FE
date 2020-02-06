import React from 'react';
import {NavLink} from 'react-router-dom';

import {MenuDiv, ShowingDiv} from '../../styles/Styles';

const handleClick = () => console.log(document.getElementById('menubuttons').classList.toggle('hidden'));
export default function Menu() {
    const MenuButtons = 
    <div>
        <div><NavLink to='/account'> Account </NavLink></div>
        <div><NavLink to='/settings'> Settings </NavLink></div>
        <div><NavLink to='/logout'> Log Out </NavLink></div>
        <div><NavLink to='/home-page' onClick={()=>localStorage.clear()}>Home</NavLink></div>
    </div>
    return (
        <MenuDiv className='menudiv'>
            <img src='https://i.imgur.com/4QBK6hQ.png' onClick={handleClick}></img>
            <ShowingDiv id='menubuttons' className='hidden'>{MenuButtons}</ShowingDiv>
        </MenuDiv>
    )
}