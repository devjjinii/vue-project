import { createWebHistory, createRouter } from 'vue-router';
import LoginPage from '@/views/LoginPage';
import SignupPage from '@/views/SignupPage';

const routes = [
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/signUp',
		component: SignupPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
