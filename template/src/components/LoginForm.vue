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
		<button :disabled="!password" type="submit">
			로그인
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
// import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
		};
	},
	// computed: {
	// 	isUsernameValid() {
	// 		console.log(this.username);
	// 		return validateEmail(this.username);
	// 	},
	// },
	methods: {
		async submitForm() {
			console.log('>> login');
			const userData = {
				username: this.username,
				password: this.password,
			};
			const { data } = await loginUser(userData);
			console.log(data);
			if (data.username != undefined) {
				this.logMessage = `${data.username} 님 환영합니다 ~`;
			} else {
				this.logMessage = `${data.msg} !!`;
			}

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
