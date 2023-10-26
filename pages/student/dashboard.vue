<script>
	export default {
		setup() {
			definePageMeta({
				layout: "student",
				title: "Dashboard"
			});

			const greetings = {
				morning: '⛅ Good morning',
				afternoon: '🌞 Good afternoon',
				evening: '🌘 Good evening',
			};

			const currentHour = new Date().getHours();
			const greeting = currentHour < 12 ? greetings.morning : currentHour < 18 ? greetings.afternoon : greetings.evening;

			const activities = ref([
				{
					description: 'Examination Week',
					isComplete: false,
					dates: { repeat: { weekdays: 6 } }, // Every Friday
					color: 'red',
				},
			]);

			const attributes = computed(() => [
				// Attributes for activities
				...activities.value.map(activity => ({
						dates: activity.dates,
						dot: {
							color: activity.color,
							...(activity.isComplete && { class: 'opacity-75' }),
						},
						popover: {
						label: activity.description,
					},
				})),
			]);

			return {
				greeting,
				attributes
			};
		},
	}
</script>

<template>
	<div class="container px-4 md:px-8 mx-auto">
		<div class="flex flex-col mb-6">
			<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
				<div class="lg:col-span-9 md:col-span-8">
					<div class="flex items-center overflow-x-auto whitespace-nowrap">
						<a href="#" class="text-gray-600 dark:text-gray-200 hover:text-blue-600">
							Dashboard
						</a>
					</div>
					<h4 class="text-xl lg:text-2xl font-medium text-gray-700 mt-1 dark:text-gray-300">{{ greeting }}! Mark Paul</h4>
				</div>
				<div class="lg:col-span-3 md:col-span-4 space-y-6">
					<div class="flex flex-col items-center justify-center text-center text-sm text-gray-600">
						<img class="flex-shrink-0 object-cover mx-1 rounded-full w-24 h-24 ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="jane avatar">
						<div class="mt-3">
							<div class="flex items-center gap-1">
								<h1 class="text-base font-semibold text-gray-700 dark:text-gray-200">Mark Paul Cañeda</h1>
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount-check-filled text-primary dark:text-primary-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path>
								</svg>
							</div>
							<p class="text-sm text-gray-500 dark:text-gray-400">College</p>
						</div>
					</div>
					<div>
						<VCalendar expanded transparent borderless title-position="left" :attributes="attributes" />
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<style scoped>
	.vc-container .vc-weekday-1, .vc-container .vc-weekday-7 {
		color: #6366f1;
	}
</style>
