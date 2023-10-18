<script lang="ts" setup>
	const colorMode = useColorMode()
</script>

<template>
  	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
		<div>
			<input type="radio" v-model="$colorMode.preference" value="light" id="light" class="peer hidden [&:checked_+_label_svg]:block" />

			<label for="light" class="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary-500 peer-checked:ring-1 peer-checked:ring-primary-500 dark:peer-checked:ring-primary-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
				<div class="flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
						<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
					</svg>
					
					<div class="flex items-center justify-between w-full">
						<p class="text-gray-700 dark:text-gray-100">Light</p>

						<svg v-if="$colorMode.preference === 'light'" class="hidden h-5 w-5 text-primary-600 dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>
			</label>
		</div>

		<div>
			<input type="radio" v-model="$colorMode.preference" value="dark" id="dark" class="peer hidden [&:checked_+_label_svg]:block" />

			<label for="dark" class="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary-500 peer-checked:ring-1 peer-checked:ring-primary-500 dark:peer-checked:ring-primary-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
				<div class="flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
					</svg>
					
					<div class="flex items-center justify-between w-full">
						<p class="text-gray-700 dark:text-gray-100">Dark</p>

						<svg v-if="$colorMode.preference === 'dark'" class="hidden h-5 w-5 text-primary-600 dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>
			</label>
		</div>

		<div>
			<input type="radio" v-model="$colorMode.preference" value="system" id="system" class="peer hidden [&:checked_+_label_svg]:block" />

			<label for="system" class="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary-500 peer-checked:ring-1 peer-checked:ring-primary-500 dark:peer-checked:ring-primary-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
				<div class="flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path>
						<path d="M7 20h10"></path>
						<path d="M9 16v4"></path>
						<path d="M15 16v4"></path>
					</svg>
					
					<div class="flex items-center justify-between w-full">
						<p class="text-gray-700 dark:text-gray-100">System</p>

						<svg v-if="$colorMode.preference === 'system'" class="hidden h-5 w-5 text-primary-600 dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>
			</label>
		</div>
	</div>
</template>


