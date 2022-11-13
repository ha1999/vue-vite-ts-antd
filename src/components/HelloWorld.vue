<script setup lang="ts">
	import { ref } from 'vue'
	import { Button as AButton } from 'ant-design-vue'

	defineProps<{ msg: string }>()
	defineEmits([])

	const sayHi = () => alert('Hi')
	const count = ref(0)
</script>

<template>
	<h1>{{ msg }}</h1>
	<a-button
		size="large"
		type="primary"
		danger
		shape="round"
		@click="sayHi"
	>
		Primary button
	</a-button>
</template>
