<script lang="ts">
	export default {
		setup() {
			definePageMeta({
				layout: "admin",
			});

			useSeoMeta({
				title: 'Dashboard',
			});

			const greetings = {
				morning: '⛅ Good morning',
				afternoon: '🌞 Good afternoon',
				evening: '🌘 Good evening',
			};

			const currentHour = new Date().getHours();
			const greeting = currentHour < 12 ? greetings.morning : currentHour < 18 ? greetings.afternoon : greetings.evening;

			return {
				greeting,
			};
		},
	}
</script>

<template>
	<div class="container">
		<div class="flex flex-col mb-6">
			<div class="flex items-center overflow-x-auto whitespace-nowrap">
				<a href="#" class="text-gray-600 dark:text-gray-200 hover:text-blue-600">
					Dashboard
				</a>
			</div>
			<h4 class="text-xl lg:text-2xl font-medium text-gray-700 mt-1 dark:text-gray-300">{{ greeting }}! Mark Paul</h4>
		</div>
	</div>	
</template>

<style scoped></style>
