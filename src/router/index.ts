import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
	},
	{
		path: '/simple_counter',
		name: 'SimpleCounter',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/1_SimpleCounter/SimpleCounter.vue'),
	},
	{
		path: '/pinia_counter',
		name: 'PiniaCounter',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/2_PiniaCounter/PiniaCounter.vue'),
	},
	{
		path: '/todo',
		name: 'TodoList',
		component: () => import(/* webpackChunkName: "about" */ '../views/3_TodoList/TodoList.vue'),
	},
	{
		path: '/pinia_todo',
		name: 'TodoListPinia',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/4_TodoListPinia/TodoList.vue'),
	},
	{
		path: '/fetch_todo',
		name: 'FetchListPinia',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/5_FetchListPinia/HomeView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
