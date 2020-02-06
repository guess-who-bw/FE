import React, { useReducer } from 'react';
import {
	Form,
	Input,
	Button,
	Label,
	Div,
	StyledDiv,
	StyledDiv2,
	H2,
	P,
	Span1,
	Span2,
	Span3,
	Div2
} from '../styles/Styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ErrorMessagesSU from './ErrorMessagesSU';

function equalTo(ref, msg) {
	return yup.mixed().test({
		name: 'equalTo',
		exclusive: false,
		message: msg || '${path} must be the same as ${reference}',
		params: {
			reference: ref.path
		},
		test: function(value) {
			return value === this.resolve(ref);
		}
	});
}
yup.addMethod(yup.string, 'equalTo', equalTo);

const validationSchema = yup.object().shape({
    email: yup
    .string()
    .email('Must be in the form of an email.')
    .required('Enter an email.')
    .min(3, 'You need a longer email.')
    .max(36, 'Email is too long.'),
    password: yup
    .string().required('Enter a password.')
    .min(6, 'Password is too short.')
    .max(16, 'Password exceeds character limit.')
});

const initialState = {
	email: '',
	password: '',
	// confirmPassword: ''
};

function loginReducer(state, action) {
	return state;
}

export default function SignUp(props) {
	const { register, handleSubmit, errors } = useForm({ validationSchema: validationSchema });
	const [ state, dispatch ] = useReducer(loginReducer, initialState);

	// email: 1234@gmail.com    password: 1234
	const onSubmit = (data) => {
		dispatch((state.email = data.email), (state.password = data.password));
		console.log('state', state, 'data', data);
		// e.preventDefault();
		axiosWithAuth()
			.post('/api/register', state)
			.then((res) => {
				console.log('res from signup', res)
				console.log('TOKEN:', res.data.token);
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('id', res.data.id);
				props.history.push('/home-page');
			})
			.catch((err) => console.log(err));
		document.getElementById('form').reset();
	};
    return (
            <Form id='form' onSubmit={handleSubmit(onSubmit)}>
                <StyledDiv>
                    <Span3 className='backButton'><NavLink to='/'>{`<`}</NavLink></Span3>
                    <H2>Create your account</H2>
                    <StyledDiv2>
                        <Div>
                            <Label htmlFor='email'>Email</Label>
                            <Input name='email' type='text' ref={register} />
                        </Div>
                        <Div>
                            <Label htmlFor='password'>Password</Label>
                            <Input name='password' type='password' ref={register} />
                        </Div>
                    </StyledDiv2>
                    <Div>
                        <ErrorMessagesSU errors={errors}/>
                    </Div>
                    <Button id='submit' type='submit'>Sign Up</Button>
                    <P>Already have an account? <NavLink to='/'>Log In</NavLink></P>
                </StyledDiv>
        </Form>
    )
}

