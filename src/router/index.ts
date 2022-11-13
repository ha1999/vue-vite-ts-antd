import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/generator_route'

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(_to, _from, savedPosition) {
		return (
			savedPosition ||
			new Promise((resolve) => setTimeout(() => resolve({ top: 0 }), 300))
		)
	},
})

router.beforeEach((to, _from) => {
	if (to.meta.requiresAuth && !window.user) {
		return { name: 'login', query: { redirect: to.fullPath } }
	}
})

export default router
