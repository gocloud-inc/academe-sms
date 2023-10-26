<script setup>
	const logoutStudent = async () => {
		navigateTo('/')
	}
</script>

<template>
   	<div class="bg-gray-50 h-screen overflow-auto dark:bg-black">
		<nav class="navbar bg-gradient-to-l from-primary-700 to-primary-600 dark:from-primary-900 dark:to-primary-800 shadow-sm sticky top-0 z-10">
			<div class="px-4 py-2 h-14 flex items-center justify-between">
				<div class="flex items-center justify-between gap-3">
					<!-- Mobile menu button -->
					<div class="flex xl:hidden">
						<button type="button" id="student-sidebar-toggler" class="inline-flex items-center justify-center px-1 py-1 border shadow-sm text-gray-500 transition-colors duration-200 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-700 dark:text-gray-300" aria-label="toggle menu">
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M4 8l16 0"></path>
								<path d="M4 16l16 0"></path>
							</svg>
						</button>
					</div>

					<div class="hidden xl:block">
						<img class="flex-shrink-0 object-cover mx-1 w-8 h-8" src="/logo-inverted.png" alt="Academe SMS">
					</div>

					<div class="hidden xl:flex flex-col xl:flex-row xl:items-center mx-3">
						<a href="#" class="px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-primary-700 dark:hover:bg-gray-700">1st Quarter</a>
						<a href="#" class="px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-primary-700 dark:hover:bg-gray-700">SY: 2023 - 2024</a>
					</div>
				</div>

				<div class="hidden h-9 md:block absolute left-1/2 -translate-x-1/2 w-full max-w-sm mx-auto bg-gradient-to-l from-primary-100 to-primary-50 border border-gray-50 rounded-full dark:from-primary-950 dark:to-primary-950 dark:border-gray-600 focus-within:max-w-lg transition-all duration-300 ease-in-out dark:bg-gray-800">
					<form class="flex flex-col md:flex-row">
						<input type="email" placeholder="Search" class="flex-1 h-6 px-4 py-1 m-1 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none placeholder:text-sm dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

						<button type="button" class="inline-flex items-center justify-center h-7 w-7 p-1 mx-1 my-[3.5px] text-primary-50 font-light transition-colors duration-300 transform bg-primary-700 rounded-full hover:bg-primary-600 focus:outline-none focus:bg-primary-600">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073l-4.901-4.9A7.25 7.25 0 1 1 10 2.75Zm0 1.5a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5Z"/></svg>
						</button>
					</form>
				</div>

				<div class="relative inline-flex items-center xl:mt-0 space-x-4" data-te-dropdown-ref>
					<button id="dropdownProfile" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false" type="button" class="flex items-center gap-1 xl:gap-2 focus:outline-none" aria-label="toggle profile dropdown">
						<div class="hidden xl:flex flex-col items-end">
							<div class="text-gray-50 text-xs font-medium leading-none">Mark Paul</div>
							<span class="text-primary-50 text-xs">mpcaneda.gca@gmail.com</span>
						</div>
						
						<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-8 h-8 p-4 flex justify-center items-center text-sm font-semibold">
							M
						</div>
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownProfile" data-te-dropdown-menu-ref>
						<li>
							<a href="#" class="flex items-center p-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
								<img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9 ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="jane avatar">
								<div class="mx-1">
									<h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">Mark Paul Cañeda</h1>
									<p class="text-sm text-gray-500 dark:text-gray-400">mpcaneda.gca@gmail.com</p>
								</div>
							</a>
						</li>
						<hr class="dropdown-divider" />
						<li>
							<NuxtLink to="/student/profile" class="dropdown-link" data-te-dropdown-item-ref>
								<svg class="text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.249 2.249 0 0 1 6.253 14h11.502Zm0 1.5H6.252a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"/></svg>
								Profile
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/student/settings/preferences" class="dropdown-link" data-te-dropdown-item-ref>
								<svg class="text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.75 2a.75.75 0 0 0-.75.75v11.5a2.25 2.25 0 0 0 2.25 2.25H9.5v3a2.5 2.5 0 1 0 5 0v-3h2.25A2.25 2.25 0 0 0 19 14.25V2.75a.75.75 0 0 0-.75-.75H5.75Zm.75 9V3.5h6v1.752a.75.75 0 1 0 1.5 0V3.5h1v2.751a.75.75 0 1 0 1.5 0V3.5h1V11h-11Zm0 3.25V12.5h11v1.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 0-.75.75v3.75a1 1 0 0 1-2 0v-3.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 1-.75-.75Z"/></svg>
								Preferences
							</NuxtLink>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								<svg class="text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.4-.615a.75.75 0 0 1 .85.174a9.793 9.793 0 0 1 2.205 3.792a.75.75 0 0 1-.272.825l-1.241.916a1.38 1.38 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826a9.798 9.798 0 0 1-2.204 3.792a.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.926 1.114l-.17 1.526a.75.75 0 0 1-.571.647a9.518 9.518 0 0 1-4.406 0a.75.75 0 0 1-.572-.647l-.169-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.406.616a.75.75 0 0 1-.85-.175a9.798 9.798 0 0 1-2.203-3.796a.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826a9.793 9.793 0 0 1 2.205-3.792a.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65a10.72 10.72 0 0 1 2.201-.252Zm0 1.5a9.136 9.136 0 0 0-1.354.117l-.11.977A2.886 2.886 0 0 1 6.526 7.17l-.899-.394A8.293 8.293 0 0 0 4.28 9.092l.797.587a2.881 2.881 0 0 1 .001 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.109.984c.89.15 1.799.15 2.688 0l.11-.984a2.881 2.881 0 0 1 4.018-2.322l.904.396a8.299 8.299 0 0 0 1.348-2.318l-.798-.588a2.88 2.88 0 0 1-.001-4.643l.797-.587a8.293 8.293 0 0 0-1.348-2.317l-.897.393a2.884 2.884 0 0 1-4.023-2.324l-.109-.976a8.99 8.99 0 0 0-1.334-.117ZM12 8.25a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5Z"/></svg>
								Account Settings
							</a>
						</li>
						<li>
							<button type="button" @click.prevent="logoutStudent" class="dropdown-link" data-te-dropdown-item-ref>
								<svg class="text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.502 11.5a1.002 1.002 0 1 1 0 2.004a1.002 1.002 0 0 1 0-2.005ZM12 4.353v6.651h7.442L17.72 9.28a.75.75 0 0 1-.073-.977l.073-.084a.75.75 0 0 1 .976-.072l.084.072l2.997 2.998a.75.75 0 0 1 .073.976l-.073.084l-2.996 3.003a.75.75 0 0 1-1.134-.975l.072-.084l1.713-1.717h-7.431L12 19.25a.75.75 0 0 1-.88.738l-8.5-1.501a.75.75 0 0 1-.62-.739V5.75a.75.75 0 0 1 .628-.74l8.5-1.396a.75.75 0 0 1 .872.74Zm-1.5.883l-7 1.15v10.732l7 1.236V5.237ZM13 18.5h.765l.102-.007a.75.75 0 0 0 .648-.744l-.007-4.25H13v5Zm.002-8.5L13 8.725V5h.745a.75.75 0 0 1 .743.647l.007.101l.007 4.252h-1.5Z"/></svg>
								Sign out
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<main class="py-6">
			<div class="md:mx-20">
				<div class="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-5 gap-6">
					<ClientOnly>
						<StudentSidebar />
					</ClientOnly>

					<div class="col-span-1 xl:col-span-4 md:col-span-5">
						<slot />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<style scoped></style>
