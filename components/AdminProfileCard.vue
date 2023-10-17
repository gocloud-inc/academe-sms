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
					<div class="dropzone-image-preview h-full w-full uppercase bg-gray-100 text-gray-500 rounded-full p-4 flex justify-center items-center text-5xl font-semibold dark:bg-gray-700 dark:text-gray-400">
						MP
					</div>
					<button data-te-target="#profilePhotoModal" data-te-toggle="modal" type="button" class="absolute bottom-0 left-0 right-0 text-xs bg-gray-900 w-36 h-36 rounded-full hidden group-hover:flex justify-center items-center">
						<span class="material-symbols-rounded msr-filled text-white relative opacity-100 text-4xl">add_a_photo</span>
					</button>
				</div>
			</div>
			<div class="p-5">
				<div class="flex items-center gap-1">
					<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-100">Mark Paul Cañeda</h2>
					<span class="material-symbols-rounded msr-filled text-primary text-base">verified</span>
				</div>
				<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium mb-4">
					<div>@mpcaneda</div>
					<div class="bg-gray-400 w-[4px] h-[4px] rounded-full"></div>
					<div>Administrator</div>
				</div>

				<div class="flex items-center gap-2 text-sm">
					<div class="font-medium text-gray-600">Program:</div>
					<div class="text-gray-600">College</div>
				</div>

				<div class="flex flex-wrap justify-between gap-8 mt-3">
					<div class="flex items-center gap-2 text-sm">
						<div class="font-medium text-gray-600">Date Joined:</div>
						<div class="text-gray-500 dark:text-gray-300">October 12, 2023</div>
					</div>

					<div class="flex items-center gap-2 text-sm">
						<div class="font-medium text-gray-600">Email:</div>
						<div class="text-success-600">mpcaneda.gca@gmail.com</div>
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
