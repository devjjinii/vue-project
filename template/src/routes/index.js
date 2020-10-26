import { createWebHistory, createRouter } from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';  // 코드 스플리팅

const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/signup',
		component: () => import('@/views/SignupPage.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/views/PageNotFound.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
