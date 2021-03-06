import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000/',
});

function registerUser(userData) {
	// const url = 'http://localhost:3000/signup';
	// return axios.post(url, userData); //promise
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}

export { registerUser, loginUser };
