<template>
  	<div id="app">
		<ClientOnly>
			<AdminSidebar />

			<template #fallback>
				<SkeletonAdminSidebar />
			</template>
		</ClientOnly>

		<header class="header sticky top-0 z-10">
			<nav class="border-b relative bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800">
				<div class="px-4 py-3 xl:py-5 mx-auto">
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

							<a href="#" class="hidden lg:block text-gray-700 font-medium dark:text-gray-200">
								Academe SMS
							</a>

							<div class="hidden xl:flex flex-col xl:flex-row xl:items-center mx-3">
								<a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">First Quarter</a>
								<a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SY: 2023 - 2024</a>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<button class="inline-flex items-center justify-center text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
									<path d="M12 17l0 .01"></path>
									<path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
								</svg>
							</button>
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
