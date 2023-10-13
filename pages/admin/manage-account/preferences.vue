<script setup>
	definePageMeta({
		layout: "admin"
	})

	useSeoMeta({
        title: 'Preferences - Admin',
    })
</script>

<template>
	<div class="container">
		<div class="space-y-6">
			<div class="space-y-6">
				<div class="bg-white shadow-sm rounded-lg h-fit border dark:bg-gray-800">
					<div class="flex flex-wrap divide-x divide-gray-100 dark:divide-gray-700 relative">
						<div class="p-5 flex justify-center items-center">
							<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-32 h-32 p-4 flex justify-center items-center text-5xl font-semibold dark:bg-gray-700 dark:text-gray-400"> 
								MP
							</div>
						</div>
						<div class="p-5">
							<div class="flex justify-between items-center">
								<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-100">Mark Paul Cañeda</h2>
							</div>
							<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium mb-4">
								<div>@mpcaneda</div>
								<div class="bg-gray-400 w-[4px] h-[4px] rounded-full"></div>
								<div>Administrator</div>
							</div>
			
							<div class="flex items-center gap-2 text-sm">
								<div class="font-medium text-gray-600">Program:</div>
								<div class="text-gray-600">Bachelor of Science in Computer Science (BSCS)</div>
							</div>
			
							<div class="flex flex-wrap justify-between gap-8 mt-3">
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Semester:</div>
									<div class="text-gray-500 dark:text-gray-300">1st</div>
								</div>
			
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Year:</div>
									<div class="text-gray-500 dark:text-gray-300">2nd Year</div>
								</div>
			
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Payment Status:</div>
									<div class="text-success-600">Fully Paid</div>
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

								<NuxtLink to="/admin/manage-account/preferences" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-primary-600 dark:text-gray-400 border-b-2 border-b-primary-500">
									Preferences
								</NuxtLink>
							</nav>
						</div>
					</div>
				</div>
				
				<div class="flex flex-col gap-2">
					<h2 class="text-lg font-semibold text-gray-700 dark:text-gray-100">Theme Preferences</h2>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped></style>
