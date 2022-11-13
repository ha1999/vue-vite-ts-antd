<script setup lang="ts">
	import { computed } from 'vue'
	import { RouterLink, RouterLinkProps } from 'vue-router'

	const props = defineProps<{
		to: string | { name: string }
		custom?: boolean
		activeClass?: string
		exactActiveClass?: string
		ariaCurrentValue?:
			| 'page'
			| 'step'
			| 'location'
			| 'date'
			| 'time'
			| 'true'
			| 'false'
		replace?: boolean
		query?: object
		hash?: string
	}>()

	const isExternal = computed(function () {
		return typeof props.to === 'string' && /^http.*/.test(props.to)
	})
</script>

<template>
	<a
		v-if="isExternal"
		target="_blank"
		rel="noopener"
		class="external-link"
		:href="props.to.toString()"
	>
		<slot></slot>
	</a>
	<router-link
		v-else
		v-bind="$props"
		class="internal-link"
	>
		<slot></slot>
	</router-link>
</template>
