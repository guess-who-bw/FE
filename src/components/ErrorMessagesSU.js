import React from 'react';
import styled from 'styled-components';


const Label = styled.label`
    margin-bottom: -2%;
    width: 100%;
    color: white;
    text-align: left;
    font-family: 'Roboto', sans-serif;
`
const StyledP = styled.p`
    margin: 0;
`

export default function ErrorMessagesSU(props) {
    return (
        <>
         {(props.errors.name !== undefined || props.errors.email !== undefined || props.errors.password !== undefined || props.errors.passwordConfirm !== undefined) &&(
             <>
                <StyledP><Label>{(props.errors.name !== undefined)?(props.errors.name.message):(null)}</Label></StyledP>
                <StyledP><Label>{(props.errors.email !== undefined)?(props.errors.email.message):(null)}</Label></StyledP>
                <StyledP><Label>{(props.errors.password !== undefined)?(props.errors.password.message):(null)}</Label></StyledP>
                <StyledP><Label>{(props.errors.passwordConfirm !== undefined)?(props.errors.passwordConfirm.message):(null)}</Label></StyledP>
             </>
         )}
        </>
    )
}