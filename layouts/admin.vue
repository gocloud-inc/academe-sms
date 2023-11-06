<script setup>
	const logout = async () => {
		navigateTo('/')
	}
</script>

<template>
  	<div id="app">
		<ClientOnly>
			<AdminSidebar />
		</ClientOnly>

		<header class="header sticky top-0 z-10">
			<nav class="border-b relative bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800">
				<div class="px-4 py-2 mx-auto">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<!-- Mobile menu button -->
							<div class="flex xl:hidden">
								<button type="button" id="sidebar-toggler" class="inline-flex items-center justify-center px-1 py-1 border shadow-sm text-gray-500 transition-colors duration-200 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-700 dark:text-gray-300" aria-label="toggle menu">
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M4 8l16 0"></path>
										<path d="M4 16l16 0"></path>
									</svg>
								</button>
							</div>

							<a href="#" class="text-gray-700 font-medium dark:text-gray-200">
								Academe SMS
							</a>

							<div class="hidden md:flex flex-col md:flex-row md:items-center mx-3">
								<a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">First Quarter</a>
								<a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SY: 2023 - 2024</a>
							</div>
						</div>
						<div class="flex items-center">
							<div class="relative" data-te-dropdown-ref>
								<button type="button" class="relative flex items-center gap-1 xl:gap-2 focus:outline-none" id="dropdownProfile" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false" title="Mark Paul Cañeda">
									<div class="hidden xl:flex flex-col items-end">
										<div class="text-gray-700 text-xs font-medium leading-none dark:text-gray-200">Mark Paul</div>
										<span class="text-gray-500 text-xs dark:text-gray-300">Registrar Head</span>
									</div>

									<img class="avatar avatar-sm rounded-full ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="avatar" />
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
										<NuxtLink to="/admin/manage-account/profile" class="dropdown-link" data-te-dropdown-item-ref>
											<Icon name="fluent:person-24-regular" size="24" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
											Profile
										</NuxtLink>
									</li>
									<li>
										<NuxtLink to="/admin/manage-account/preferences" class="dropdown-link" data-te-dropdown-item-ref>
											<Icon name="fluent:paint-brush-24-regular" size="24" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
											Preferences
										</NuxtLink>
									</li>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<Icon name="fluent:settings-24-regular" size="24" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
											Account Settings
										</a>
									</li>
									<li>
										<button type="button" @click.prevent="logout" class="dropdown-link" data-te-dropdown-item-ref>
											<Icon name="fluent:sign-out-24-regular" size="24" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
											Sign out
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>

		<main class="main py-8 overflow-y-auto">
			<slot></slot>
		</main>
	</div>
</template>

<style scoped>

</style>
