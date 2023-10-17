<template>
  	<div id="app">
		<ClientOnly>
			<AdminSidebar />

			<template #fallback>
				<SkeletonAdminSidebar />
			</template>
		</ClientOnly>

		<header class="header sticky top-0 z-10">
			<nav class="border-b relative bg-white shadow-sm dark:bg-primary-950 dark:border-gray-800">
				<div class="px-4 py-3 xl:py-5 mx-auto">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<!-- Mobile menu button -->
							<div class="flex xl:hidden">
								<button type="button" id="sidebar-toggler" class="inline-flex items-center justify-center px-1 py-1 border shadow-sm text-gray-500 transition-colors duration-200 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-700 dark:text-gray-300" aria-label="toggle menu">
									<span class="material-symbols-rounded">
										menu
									</span>
								</button>
							</div>

							<a href="#" class="hidden lg:block text-gray-700 font-medium dark:text-gray-200">
								Academe SMS
							</a>
						</div>
						<div class="flex items-center gap-4">
							<button class="inline-flex items-center justify-center text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
								<span class="material-symbols-rounded">
									help
								</span>
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
