
<template>
  	<aside class="aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out">
		<div class="aside-container">
			<nav class="aside-nav-menu">
				<a href="#" class="uppercase font-semibold text-gray-600 p-2">
					<img class="flex-shrink-0 object-cover mx-1 w-8 h-8" src="/logo-inverted.png" alt="Academe SMS">
				</a>
	
				<NuxtLink to="/admin/dashboard" class="aside-nav-link group" data-te-toggle="tooltip" title="Home">
					<Icon name="fluent:home-24-regular" size="24" class="group-hover:scale-[1.1] transition-all duration-300 ease-in-out" />
				</NuxtLink>

				<a href="#" class="aside-nav-link group" data-te-toggle="tooltip" title="Calendar">
					<Icon name="fluent:calendar-24-regular" size="24" class="group-hover:scale-[1.1] transition-all duration-300 ease-in-out" />
				</a>

				<a href="#" class="aside-nav-link relative group" data-te-toggle="tooltip" title="Messages">
					<Icon name="fluent:chat-24-regular" size="24" class="group-hover:scale-[1.1] transition-all duration-300 ease-in-out" />

					<div class="absolute -bottom-5 left-auto right-5 top-auto z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-primary dark:bg-primary-200">
						7
					</div>
				</a>
	
				<a href="#" class="aside-nav-link relative group" data-te-toggle="tooltip" title="Notifications">
					<Icon name="fluent:alert-24-regular" size="24" class="group-hover:scale-[1.1] transition-all duration-300 ease-in-out" />

					<div class="absolute -bottom-5 left-auto right-5 top-auto z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-primary dark:bg-primary-200">
						99+
					</div>
				</a>
			</nav>
	
			<div class="flex flex-col items-center mt-4 space-y-4">
				<button class="inline-flex items-center justify-center text-primary-100 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" data-te-toggle="tooltip" title="Help Center">
					<Icon name="fluent:question-circle-24-regular" size="24" class="w-5 h-5" />
				</button>
			</div>
		</div>
		
		<div data-te-perfect-scrollbar-init class="sidebar-wrapper">
			<nav class="-mx-3 space-y-2">
				<div class="space-y-1">
					<div class="flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-700 dark:border-gray-800">
						<div class="bg-gray-100 rounded-xl p-2 w-12 h-12 text-lg uppercase text-gray-400 font-semibold flex items-center justify-center dark:bg-gray-600">
							<Icon name="fluent:building-retail-more-24-filled" size="32" />
						</div>
						<div class="flex flex-col">
							<div class="text-xs text-gray-500 dark:text-gray-400">School</div>
							<div class="text-sm text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100">La Verdad Christian College</div>
						</div>
					</div>

					<details class="sidebar-dropdown group" open>
						<summary class="sidebar-dropdown-button">
							<div class="flex items-center gap-2">
								<Icon name="fluent:apps-list-detail-24-regular" size="24" class="w-5 h-5" />
								<span class="sidebar-dropdown-button-text">Registrar</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="sidebar-dropdown-icon-end" />
						</summary>
				
						<div class="space-y-1 px-4">
							<NuxtLink to="/admin/registrar/officially-enrolled" class="sidebar-dropdown-link">
								<span class="sidebar-dropdown-link-text">Officially Enrolled</span>
							</NuxtLink>
						</div>
					</details>
				</div>

				<div class="space-y-1">
					<details class="sidebar-dropdown group">
						<summary class="sidebar-dropdown-button">
							<div class="flex items-center gap-2">
								<Icon name="fluent:people-24-regular" size="24" class="w-5 h-5" />
								<span class="sidebar-dropdown-button-text">User Management</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="sidebar-dropdown-icon-end" />
						</summary>
				
						<div class="space-y-1 px-4">
							<NuxtLink to="/admin/employees" class="sidebar-dropdown-link">
								<span class="sidebar-dropdown-link-text">Employees</span>
							</NuxtLink>
						</div>
					</details>
				</div>

				<div class="space-y-1 pb-3">
					<div class="sidebar-header">
						Bookstore
					</div>

					<details class="sidebar-dropdown group">
						<summary class="sidebar-dropdown-button">
							<div class="flex items-center gap-2">
								<Icon name="fluent:arrow-trending-sparkle-24-regular" size="24" class="w-5 h-5" />

								<span class="sidebar-dropdown-button-text">
									Sales
								</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="sidebar-dropdown-icon-end" />
						</summary>
				
						<div class="space-y-1 px-4">
							<nuxt-link to="/admin/bookstore/sales" class="sidebar-dropdown-link">
								<span class="sidebar-dropdown-link-text">Sales Order</span>
							</nuxt-link>
						</div>
					</details>

					<details class="sidebar-dropdown group">
						<summary class="sidebar-dropdown-button">
							<div class="flex items-center gap-2">
								<Icon name="fluent:calculator-24-regular" size="24" class="w-5 h-5" />

								<span class="sidebar-dropdown-button-text">
									Inventory
								</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="sidebar-dropdown-icon-end" />
						</summary>
				
						<div class="space-y-1 px-4">
							<nuxt-link to="/admin/bookstore/inventory/items" class="sidebar-dropdown-link">
								<span class="sidebar-dropdown-link-text">Items</span>
							</nuxt-link>
							<nuxt-link to="/admin/bookstore/inventory/purchase-delivery" class="sidebar-dropdown-link">
								<span class="sidebar-dropdown-link-text">Purchase Delivery</span>
							</nuxt-link>
						</div>
					</details>
				</div>

				<div class="space-y-1">
					<div class="sidebar-header">
						Cashier
					</div>

					<details class="sidebar-dropdown group">
						<summary class="sidebar-dropdown-button">
							<div class="flex items-center gap-2">
								<Icon name="fluent:receipt-money-24-regular" size="24" class="w-5 h-5" />
								<span class="sidebar-dropdown-button-text">
									Finance
								</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="sidebar-dropdown-icon-end" />
						</summary>
				
						<div class="space-y-1 px-4">
							<NuxtLink to="/admin/finance/banks" class="sidebar-dropdown-link">
								<span class="sidebar-dropdown-link-text">Banks</span>
							</NuxtLink>
						</div>
					</details>
				</div>

			</nav>
		</div>
	</aside>
</template>

<style lang="postcss" scoped>
[aria-current="page"] {
	@apply bg-primary-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100;
}

.sidebar-wrapper {
	@apply relative h-screen px-5 py-4 overflow-hidden bg-primary-50 border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-800;
}

.sidebar-header {
	@apply text-sm text-gray-600 font-medium px-2 py-2 dark:text-gray-300;
}

.sidebar-dropdown {
	@apply [&_summary::-webkit-details-marker]:hidden;
}

.sidebar-dropdown-button {
	@apply flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100;
}

.sidebar-dropdown-button-text {
	@apply px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200;
}

.sidebar-dropdown-link {
	@apply flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700;
}

.sidebar-dropdown-link-text {
	@apply mx-2 text-sm font-medium;
}

.sidebar-dropdown-icon-end {
	@apply shrink-0 transition duration-300 group-open:-rotate-180;
}
</style>
