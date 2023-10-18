<script lang="ts" setup>
	const colorMode = useColorMode()
</script>

<template>
  	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
		<div>
			<input type="radio" v-model="$colorMode.preference" value="light" id="light" class="peer hidden [&:checked_+_label_svg]:block" />

			<label for="light" class="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary-500 peer-checked:ring-1 peer-checked:ring-primary-500 dark:peer-checked:ring-primary-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100">
				<div class="flex items-center gap-2">
					<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2Zm0 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm0-1.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Zm9.25-2.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM12 19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19Zm-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Zm-.03-8.53a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-1.5 1.5Zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06Zm-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l1.5 1.5Z"/></svg>
					
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
					<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20.026 17.001c-2.762 4.784-8.879 6.423-13.663 3.661A9.965 9.965 0 0 1 3.13 17.68a.75.75 0 0 1 .365-1.132c3.767-1.348 5.785-2.91 6.956-5.146c1.232-2.353 1.551-4.93.689-8.463a.75.75 0 0 1 .769-.927a9.961 9.961 0 0 1 4.457 1.327c4.784 2.762 6.423 8.879 3.66 13.662Zm-8.248-4.903c-1.25 2.389-3.31 4.1-6.817 5.499a8.49 8.49 0 0 0 2.152 1.766a8.502 8.502 0 0 0 8.502-14.725a8.484 8.484 0 0 0-2.792-1.015c.647 3.384.23 6.043-1.045 8.475Z"/></svg>
					
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
					<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3.5 3A1.5 1.5 0 0 0 3 5.915v7.335A3.75 3.75 0 0 0 6.75 17h4.5v2.5h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5V17h4.5A3.75 3.75 0 0 0 21 13.25V5.915A1.5 1.5 0 0 0 20.5 3h-17Zm1 3h15v7.25a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6Z"/></svg>
					
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


