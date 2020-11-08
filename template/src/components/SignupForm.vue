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
		<button type="submit">login</button>
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
		};
	},
	methods: {
		async submitForm() {
			console.log('submitForm >> 폼 제출');
			const userData = {
				username: this.username,
				password: this.password,
			};
			console.log(userData);
			const response = await registerUser(userData);
			console.log(response);
		},
	},
};
</script>

<style></style>
