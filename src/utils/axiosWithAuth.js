import axios from 'axios';

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: 'https://build-guess-who.herokuapp.com',
		headers: {
			authorization: localStorage.getItem('token')
		}
	});
};
