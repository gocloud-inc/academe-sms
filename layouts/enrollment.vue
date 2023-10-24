<template>
  	<div class="bg-gray-50 h-screen overflow-auto dark:bg-black">
		<nav class="navbar bg-white dark:bg-primary-900 shadow-sm sticky top-0 z-10">
			<div class="px-4 py-2 h-14 flex items-center justify-between">
				<div class="flex items-center justify-between gap-3">
					<!-- Mobile menu button -->
					<div class="flex xl:hidden">
						<button type="button" id="enrollment-sidebar-toggler" class="inline-flex items-center justify-center px-1 py-1 border shadow-sm text-gray-500 transition-colors duration-200 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-700 dark:text-gray-300" aria-label="toggle menu">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M1.5 1a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0 7a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm8 6a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 9.5 10h-3A1.5 1.5 0 0 0 5 11.5v1A1.5 1.5 0 0 0 6.5 14h3Zm.5-1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1ZM11.5 7A1.5 1.5 0 0 0 13 5.5v-1A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7h7Zm.5-1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1Z"/></svg>
						</button>
					</div>

					<div class="flex items-center gap-3">
						<NuxtLink to="/enrollment" class="bg-gray-200 text-gray-600 hidden rounded-full xl:flex xl:items-center xl:justify-center p-1 w-9 h-9">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58a.754.754 0 0 0 .001.289a.995.995 0 0 0 .3.579l7.419 7.067Z"/></svg>
						</NuxtLink>
						<div class="text-gray-700 font-medium">Student Enrollment</div>
					</div>

					<div class="hidden lg:flex flex-col lg:flex-row lg:items-center mx-3">
						<a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">First Quarter</a>
						<a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SY: 2023 - 2024</a>
					</div>
				</div>

				<div class="flex flex-col text-end">
					<div class="text-gray-500 text-xs font-medium uppercase">Enrollee</div>
					<div class="text-gray-500 text-sm font-semibold capitalize">Juan Dela Cruz</div>
				</div>
			</div>
		</nav>

		<main class="py-6">
			<div class="container">
				<div class="mb-8 block xl:hidden md:max-w-3xl md:mx-auto">
					<div class="flex flex-col gap-1">
						<span id="ProgressLabel">Step 01 / 06</span>

						<span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="50" class="block rounded-full bg-gray-200">
							<span class="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_0,_var(--tw-gradient-from)_20px,_var(--tw-gradient-to)_20px,_var(--tw-gradient-to)_40px)] from-primary-400 to-primary-500" style="width: 50%"></span>
						</span>
					</div>
					<div class="flex flex-col mt-2">
						<span class="font-medium text-xl">Program Selection</span>
						<p class="text-sm font-normal text-gray-500">Select your program and specialization</p>
					</div>
				</div>

				<div class="grid grid-cols-1 xl:grid-cols-12 md:grid-cols-12 gap-6 justify-center">
					<ClientOnly>
						<EnrollmentSidebar />
					</ClientOnly>

					<div class="col-span-1 xl:col-span-9 lg:col-span-12 md:col-span-12 md:max-w-3xl md:mx-auto">
						<slot />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<style scoped></style>
