<script lang="ts">
	import { Modal, Offcanvas, initTE } from "tw-elements";

	export default {
		setup() {
			onMounted(() => {
				initTE({ Modal, Offcanvas });
			});
		},
	}
</script>

<template>
  	<div class="bg-white shadow-sm rounded-lg h-fit border dark:bg-gray-900 dark:border-gray-800">
		<div class="flex flex-wrap divide-x divide-gray-100 dark:divide-gray-800 relative">
			<div class="p-5 flex justify-center items-center">
				<div class="dropzone relative uppercase bg-gray-100 text-gray-500 rounded-full w-36 h-36 flex justify-center items-center text-5xl font-semibold group">
					<div class="dropzone-image-preview h-full w-full uppercase bg-gray-100 text-gray-500 rounded-full p-4 flex justify-center items-center text-5xl font-semibold ring-2 ring-gray-200 dark:ring-gray-600 dark:bg-gray-700 dark:text-gray-400">
						MP
					</div>
					<button data-te-target="#profilePhotoModal" data-te-toggle="modal" type="button" class="absolute bottom-0 left-0 right-0 text-xs bg-gray-900 w-36 h-36 rounded-full hidden group-hover:flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera-plus text-white relative opacity-100" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"></path>
							<path d="M16 19h6"></path>
							<path d="M19 16v6"></path>
							<path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
						</svg>
					</button>
				</div>
			</div>
			<div class="p-5">
				<div class="flex items-center gap-1">
					<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-100">Mark Paul Cañeda</h2>
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount-check-filled text-primary dark:text-primary-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor"></path>
					</svg>
				</div>
				<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium mb-4">
					<div>@mpcaneda</div>
					<div class="bg-gray-400 w-[4px] h-[4px] rounded-full"></div>
					<div>Administrator</div>
				</div>

				<div class="flex items-center gap-2 text-sm">
					<div class="font-medium text-gray-500">Program:</div>
					<div class="text-gray-500">College</div>
				</div>

				<div class="flex flex-wrap justify-between gap-8 mt-3">
					<div class="flex items-center gap-2 text-sm">
						<div class="font-medium text-gray-500">Date Joined:</div>
						<div class="text-gray-500 dark:text-gray-300">October 12, 2023</div>
					</div>

					<div class="flex items-center gap-2 text-sm">
						<div class="font-medium text-gray-500">Email:</div>
						<div class="text-success-500">mpcaneda.gca@gmail.com</div>
					</div>
				</div>
			</div>
		</div>

		<div class="block">
			<div class="border-y bg-gray-50 border-gray-200 px-4 pt-4 dark:bg-gray-800 dark:border-gray-700">
				<nav class="flex overflow-auto gap-6" aria-label="Tabs">
					<NuxtLink to="/admin/manage-account/profile" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Profile
					</NuxtLink>

					<NuxtLink to="/admin/manage-account/change-password" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Change Password
					</NuxtLink>

					<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						QR Code
					</a>

					<NuxtLink to="/admin/manage-account/preferences" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Preferences
					</NuxtLink>
				</nav>
			</div>
		</div>
	</div>

	<ModalsProfilePhotoUploader />
</template>

<style lang="postcss" scoped>
[aria-current="page"] {
	@apply text-primary-600 border-b-2 border-b-primary-500 dark:text-primary-300 dark:border-b-primary-400;
}
</style>
