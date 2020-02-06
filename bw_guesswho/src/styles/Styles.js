import styled from 'styled-components';

/* App.js Styling */
export const H1 = styled.h1`
	color: white;
	font-size: 24px;
	font-family: 'Nunito', sans-serif;
	font-weight: 900;
`;
export const AppDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	max-width: 100vw;
`;

/* Sign Up and Login styles below */
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Input = styled.input`
	width: 100%;
	font-size: 20pt;
	text-align: center;
	background-color: white;
	color: #1b9bea;
	border-radius: 5px;
	margin: 2% 0;
	padding: 0;
	postition: absolute;
	left: 90%;
`;
export const Button = styled.button`
	border-radius: 30px;
	height: 10%;
	width: 30%;
	padding: 0px;
	color: white;
	box-shadow: none;
	border: none;
	position: relative;
	margin-top: 10%;
	background-color: white;
	color: #1b9bea;
	:disabled {
		background-color: #aab8c2;
		color: white;
	}
`;
export const Label = styled.label`
	margin-bottom: -2%;
	width: 100%;
	color: white;
	text-align: left;
	font-family: 'Roboto', sans-serif;
`;
export const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	position: relative;
`;
export const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
`;
export const StyledDiv2 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 75%;
`;
export const H2 = styled.h2`
	font-size: 20px;
	color: white;
	margin-bottom: 25%;
`;
export const P = styled.p`
	color: white;
	font-size: 10px;
	margin-top: 20%;
`;
export const Span1 = styled.span`
	font-family: 'Londrina Outline', cursive;
	color: white;
	font-size: 24px;
	margin-right: 1px;
`;
export const Span2 = styled.span`
	font-family: 'Roboto', sans-serif;
	color: white;
	font-size: 20px;
`;

export const StyledP = styled.p`
    margin: 0;
`;

export const Img = styled.img`
	height: 40px;
	width: 40px;

	font-family: 'Roboto', sans-serif;
	color: white;
	font-size: 20px;
`
export const Span3 = styled.span`
    position: absolute;
    top: 5%;
    left: 5%;
`
export const Div2 = styled.div`
display: flex;
align-items: baseline;
position: absolute;
top: 5%;
left: 36%;
`;

// Menu styling
export const MenuDiv = styled.div`
    position: fixed;
    left: 85%;
	top: 10%;
	z-index: 2;
`
export const ShowingDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 65%;
    top: 14%;
    background-color: #FFFFFF;
    padding: 2% 5%;
    border-radius: 5px;
`
//HomePage styles
export const LongButton = styled.button`
	width: 55%;
	border-radius: 30px;
	height: 20%;
	padding: 15px;
	color: white;
	box-shadow: none;
	border: none;
	position: relative;
	margin: 1% 0;
	background-color: white;
	color: #1b9bea;
	:disabled {
		background-color: #aab8c2;
		color: white;
	}
`
export const StyledButton = styled.button`
	width: 50%;
	border-radius: 30px;
	height: 20%;
	padding: 15px;
	color: white;
	box-shadow: none;
	border: none;
	position: relative;
	margin: 1% 0;
	background-color: white;
	color: #1b9bea;
	:disabled {
		background-color: #aab8c2;
		color: white;
	}
`
export const StyledButton2 = styled.button`
	width: 50%;
	border-radius: 30px;
	height: 20%;
	padding: 15px;
	color: white;
	box-shadow: none;
	border: none;
	position: relative;
	margin: 0;
	background-color: white;
	color: #1b9bea;
	border-right: 1px solid;
	border-left: none;
	border-top: none;
	border-bottom: none;
	:disabled {
		background-color: #aab8c2;
		color: white;
	}
`
//Game Styles
export const Choice = styled.button`
	color: white;
	width: 50%;
	border-radius: 30px;
	height: 20%;
	padding: 15px;
	color: white;
	box-shadow: none;
	border: none;
	margin: 2% 0%;
	background-color: white;
	color: #1b9bea;
	:active {
		background: #1b9bea;
		color: white;
	}
`
export const ChoiceDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	position: absolute;
	left: 25%;
`
export const Submit = styled.button`
	color: white;
	width: 50%;
	border-radius: 30px;
	height: 20%;
	padding: 15px;
	color: white;
	box-shadow: none;
	border: none;
	margin: 2% 0%;
	background-color: white;
	color: #1b9bea;
	:active {
		background: #1b9bea;
		color: white;
	}
`
export const ScoreP = styled.p`
    color: white;
    font-size: 2rem;
`
export const StyledTweet = styled.p`
    position: relative;
    top: 0%;
    color: white;
    text-align: left;
    margin: 1em;
	box-shadow: 5px 5px rgba(0, 0, 0, 25%);
	border: 2px solid white;
	padding: 2%;
`
export const ImageDiv = styled.div`
    position: absolute;
    top: 20%;
    display: flex;
    justify-content: space-evenly;
`
export const PresImg = styled.img`
    width: 20%;
    border-radius: 30px;
`
export const LevelP = styled.p`
	color: white;
	font-size: 2rem;
	margin-left: 0%;
`
export const InfoDiv = styled.div`
	position: absolute;
	top: 10%;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 10%;
`
//Setting Styles
export const DeleteButton = styled.button`
	padding: 10%;
	color: white;
	font-size: 3rem;
	background-color: red;
	border: none;
	border-radius: 15px;
	:active {
		color: red;
		background-color: white;
	}
`
export const DeleteDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`
export const DeleteP = styled.p`
	color: white;
	font-size: 1.5rem;
`
//Account Styles
export const AccountDiv = styled.div`
	color: white;
	border: 2px solid white;
	box-shadow: 5px 5px rgba(0, 0, 0, 25%);
	padding: 2%;
`