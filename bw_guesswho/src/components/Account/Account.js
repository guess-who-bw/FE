import React from 'react';
import AccountForm from './AccountForm';

import { connect } from 'react-redux';
import { editUserInfo } from '../actions';
import Menu from '../Nav/Menu'; 

function Account(props) {

    return (
        <div>
            <Menu />
            {!props.isEditingOnProps ? (
            <div>
                <h1>Email: {props.emailOnProps}</h1>
                <h2>Password: {props.passwordOnProps}</h2>
                <h1>Score</h1>
                <h1>Wrong Answers</h1>
                <button onClick={props.editUserInfo}>Edit</button>
            </div>
            )
            : <AccountForm />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        emailOnProps: state.email,
        passwordOnProps: state.password,
        isEditingOnProps: state.isEditing
      };
}

export default connect(mapStateToProps, {editUserInfo})(Account);