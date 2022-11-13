import Home from '@/pages/Home/HomePage.vue'
import About from '@/pages/About/AboutPage.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		components: {
			default: Home,
			LeftSidebar: () => import('@/components/LeftSideBar.vue'),
		},
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
	{
		path: '/login',
		name: 'Login',
		component: import('@/pages/Login/LoginPage.vue'),
	},
	{
		path: '/protected',
		name: 'protected',
		components: {
			default: () => import('@/pages/Protected/ProtectedPage.vue'),
			LeftSidebar: () => import('@/components/LeftSideBar.vue'),
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/pages/NotFound/NotFound.vue'),
	},
]

export default routes
