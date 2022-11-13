<script setup lang="ts">
	import HelloWorld from '@/components/HelloWorld.vue'
	import viVn from 'ant-design-vue/es/locale/vi_VN'
	import { RangePicker, ConfigProvider } from 'ant-design-vue'
	import dayjs from 'dayjs'
	import 'dayjs/locale/vi'

	dayjs.locale(viVn.locale)
</script>

<template>
	<div>
		<a
			href="https://vitejs.dev"
			target="_blank"
		>
			<img
				src="/vite.svg"
				class="logo"
				alt="Vite logo"
			/>
		</a>
		<a
			href="https://vuejs.org/"
			target="_blank"
		>
			<img
				src="./assets/vue.svg"
				class="logo vue"
				alt="Vue logo"
			/>
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<config-provider :locale="viVn">
		<range-picker />
	</config-provider>
	<AppLink to="/">Vue School Travel App</AppLink>
	<div class="container">
		<!-- Sidebar -->
		<router-view
			v-slot="{ Component }"
			class="view left-sidebar"
			name="LeftSidebar"
		>
			<transition
				name="fade"
				mode="out-in"
			>
				<component
					:is="Component"
					:key="$route.path"
				></component>
			</transition>
		</router-view>
		<!-- Main -->
		<router-view
			v-slot="{ Component }"
			class="main-view"
		>
			<transition
				name="fade"
				mode="out-in"
			>
				<component
					:is="Component"
					:key="$route.path"
				></component>
			</transition>
		</router-view>
	</div>
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}

	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
