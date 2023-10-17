<script lang="ts" setup></script>

<template>
  <aside class="aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out">
		<div class="aside-container">
			<nav class="aside-nav-menu">
				<a href="#" class="uppercase font-semibold text-gray-600 bg-gray-200 rounded-lg p-2">
					GG
				</a>
	
				<NuxtLink to="/admin/dashboard" class="aside-nav-link" title="Home">
					<span class="material-symbols-rounded">
						home
					</span>
				</NuxtLink>

				<a href="#" class="aside-nav-link" title="Messages">
					<span class="material-symbols-rounded">
						chat
					</span>
				</a>
	
				<a href="#" class="aside-nav-link" title="Admin">
					<span class="material-symbols-rounded">
						school
					</span>
				</a>
	
	
				<a href="#" class="aside-nav-link" title="Notifications">
					<span class="material-symbols-rounded">
						notifications
					</span>
				</a>

				<a href="#" class="aside-nav-link" title="Departments">
					<span class="material-symbols-rounded">
						group
					</span>
				</a>

				<a href="#" class="aside-nav-link" title="More">
					<span class="material-symbols-rounded">
						more_horiz
					</span>
				</a>
			</nav>
	
			<div class="flex flex-col items-center mt-4 space-y-4">
				<div class="relative">
					<a href="#" class="relative">
						<img class="avatar" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="avatar" />
						<span class="h-2.5 w-2.5 rounded-full bg-success-500 absolute right-0.5 ring-1 ring-gray-100 bottom-0"></span>
					</a>
				</div>
			</div>
		</div>
		
		<div data-te-perfect-scrollbar-init class="relative h-screen px-5 py-4 overflow-hidden bg-primary-50 border-l border-r sm:w-64 w-60 dark:bg-primary-950 dark:border-gray-800">
			<nav class="-mx-3 space-y-2">
				<div class="space-y-1">
					<details class="group [&_summary::-webkit-details-marker]:hidden" open>
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<span class="material-symbols-rounded">
									app_registration
								</span>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Registrar</span>
							</div>
							<span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180">
								expand_more
							</span>
						</summary>
				
						<div class="space-y-1 px-4">
							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Officially Enrolled</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Registrar Verified</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Enrollees</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Credential Master Lists</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Generate Grade Slip</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Course Schedule</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Departments</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Semester</span>
							</a>
						</div>
					</details>
				</div>

				<div class="space-y-1">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<span class="material-symbols-rounded">
									energy_program_time_used
								</span>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Program</span>
							</div>
							<span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180">
								expand_more
							</span>
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

				<div class="space-y-1">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<span class="material-symbols-rounded">
									other_admission
								</span>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Admission</span>
							</div>
							<span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180">
								expand_more
							</span>
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

				<div class="space-y-1">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<span class="material-symbols-rounded">
									badge
								</span>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Enrollment</span>
							</div>
							<span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180">
								expand_more
							</span>
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
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<span class="material-symbols-rounded">
									account_balance
								</span>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Finance</span>
							</div>
							<span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180">
								expand_more
							</span>
						</summary>
				
						<div class="space-y-1 px-4">
							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Bank Details</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Official Receipts</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Payment Plans</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Recompute Fees</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">Scholarship</span>
							</a>

							<a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
								<span class="mx-2 text-sm font-medium">SOA</span>
							</a>
						</div>
					</details>
				</div>

				<div class="space-y-1">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
							<div class="flex items-center gap-2">
								<span class="material-symbols-rounded">
									lab_profile
								</span>
								<span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Reports</span>
							</div>
							<span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180">
								expand_more
							</span>
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

<style scoped></style>
