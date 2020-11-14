<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button type="submit">회원 가입</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
	data() {
		//vdata
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			console.log('submitForm >> 폼 제출');
			const userData = {
				username: this.username,
				password: this.password,
			};
			// console.log(userData);
			const { data } = await registerUser(userData);
			console.log(data.username);
			this.logMessage = `${data.username}님 가입을 환영합니다!`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
