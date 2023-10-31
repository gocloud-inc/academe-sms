<script setup>
	import { Dropdown, PerfectScrollbar, Tooltip, initTE } from "tw-elements";

	const sidebarToggler = document.getElementById('sidebar-toggler');
	const asideEl = ref(null);
	let bodyOverflow = '';
	let asideDivOverlay = null;

	onMounted(() => {
		initTE({ Dropdown, PerfectScrollbar, Tooltip });

		asideEl.value = document.getElementById('aside');

		if (sidebarToggler) {
			sidebarToggler.addEventListener('click', () => {
				if (asideEl.value.classList.contains('show')) {
					asideEl.value.classList.remove('show');
					removeOverlay();
				} else {
					asideEl.value.classList.add('show');
					createOverlay();
				}
			});
		}

		// Handle click events on the links within the aside
		const links = asideEl.value.querySelectorAll('a');
		links.forEach(link => {
			link.addEventListener('click', handleLinkClick);
		});

		// Remove an overlay when the page loads
		removeOverlay();
	});

	const createOverlay = () => {
		asideDivOverlay = document.createElement('div');
		asideDivOverlay.className = 'sidebar-overlay';
		document.body.appendChild(asideDivOverlay);

		// Add a click event listener to remove the overlay when clicked
		asideDivOverlay.addEventListener('click', () => {
			asideEl.value.classList.remove('show');
			removeOverlay();
		});
	};

	const removeOverlay = () => {
		if (asideDivOverlay && asideDivOverlay.parentElement) {
			document.body.style.overflow = bodyOverflow;
			document.body.removeChild(asideDivOverlay);
		}
	};

	const handleLinkClick = (event) => {
		event.preventDefault();
		asideEl.value.classList.remove('show');
		removeOverlay();
	}
</script>

<template>
  	<aside id="aside" ref="asideEl" class="aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out">
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
					<Icon name="fluent:question-circle-24-regular" size="24" />
				</button>
			</div>
		</div>
		
		<div data-te-perfect-scrollbar-init class="relative h-screen px-5 py-4 overflow-hidden bg-primary-50 border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-800">
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

					<details class="group [&_summary::-webkit-details-marker]:hidden" open>
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<Icon name="fluent:apps-list-detail-24-regular" size="24" />
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Registrar</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="shrink-0 transition duration-300 group-open:-rotate-180" />
						</summary>
				
						<div class="space-y-1 px-4">
							<NuxtLink to="/admin/registrar/officially-enrolled" class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
								<span class="mx-2 text-sm font-medium">Officially Enrolled</span>
							</NuxtLink>
						</div>
					</details>
				</div>

				<div class="space-y-1">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<Icon name="fluent:people-24-regular" size="24" />
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">User Management</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="shrink-0 transition duration-300 group-open:-rotate-180" />
						</summary>
				
						<div class="space-y-1 px-4">
							<NuxtLink to="/admin/employees" class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
								<span class="mx-2 text-sm font-medium">Employees</span>
							</NuxtLink>
						</div>
					</details>
				</div>

				<div class="space-y-1 hidden">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M14 4h6v6h-6z"></path>
									<path d="M4 14h6v6h-6z"></path>
									<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
									<path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
								</svg>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Program</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="shrink-0 transition duration-300 group-open:-rotate-180" />
						</summary>
				
						<div class="space-y-1 px-4">
							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Year Level Category</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Year Levels</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Program Departments</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Programs</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Curriculum</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Master Courses</span>
							</a>
						</div>
					</details>
				</div>

				<div class="space-y-1 hidden">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-address-book" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path>
									<path d="M10 16h6"></path>
									<path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
									<path d="M4 8h3"></path>
									<path d="M4 12h3"></path>
									<path d="M4 16h3"></path>
								</svg>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Admission</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="shrink-0 transition duration-300 group-open:-rotate-180" />
						</summary>
				
						<div class="space-y-1 px-4">
							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Open Admission</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Applicants</span>
							</a>
						</div>
					</details>
				</div>

				<div class="space-y-1 hidden">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id-badge" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M5 3m0 3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z"></path>
									<path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
									<path d="M10 6h4"></path>
									<path d="M9 18h6"></path>
								</svg>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Enrollment</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="shrink-0 transition duration-300 group-open:-rotate-180" />
						</summary>
				
						<div class="space-y-1 px-4">
							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Open Enrollment</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Enrollment Settings</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Block Sections</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Course Schedules</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Rooms</span>
							</a>
						</div>
					</details>
				</div>
	
				<div class="space-y-1">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<Icon name="fluent:receipt-money-24-regular" size="24" />
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Finance</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="shrink-0 transition duration-300 group-open:-rotate-180" />
						</summary>
				
						<div class="space-y-1 px-4">
							<NuxtLink to="/admin/finance/banks" class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
								<span class="mx-2 text-sm font-medium">Banks</span>
							</NuxtLink>
						</div>
					</details>
				</div>

				<div class="space-y-1 hidden">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-analytics" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
									<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
									<path d="M9 17l0 -5"></path>
									<path d="M12 17l0 -1"></path>
									<path d="M15 17l0 -3"></path>
								</svg>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Reports</span>
							</div>
							<Icon name="fluent:chevron-down-24-regular" class="shrink-0 transition duration-300 group-open:-rotate-180" />
						</summary>
				
						<div class="space-y-1 px-4">
							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Classlist Report</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Download Student Profile</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Enrollment List</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Exam Permit Report</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">GWA Reports</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">List of Transferees</span>
							</a>
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
</style>
