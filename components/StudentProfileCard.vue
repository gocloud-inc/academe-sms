<script lang="ts" setup></script>

<template>
  	<div class="relative bg-white rounded-lg h-fit border dark:bg-gray-900 dark:border-gray-700">
		<div class="flex flex-wrap divide-x divide-gray-100 dark:divide-gray-700">
			<div class="p-5 flex justify-center items-center">
				<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-32 h-32 p-4 flex justify-center items-center text-5xl font-semibold dark:bg-gray-700 dark:text-gray-400"> 
					CJ
				</div>
			</div>
			<div class="p-5">
				<div class="flex justify-between items-center">
					<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-100">Cruz, Juan Dela</h2>
				</div>
				<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium mb-4">
					<div>@juandelacruz</div>
					<div class="bg-gray-400 w-[4px] h-[4px] rounded-full"></div>
					<div>20-C-0014</div>
				</div>

				<div class="flex items-center gap-2 text-sm">
					<div class="font-medium text-gray-600 dark:text-gray-400">Program:</div>
					<div class="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science (BSCS)</div>
				</div>

				<div class="flex flex-wrap justify-between gap-8 mt-3">
					<div class="flex items-center gap-2 text-sm">
						<div class="font-medium text-gray-600 dark:text-gray-400">Semester:</div>
						<div class="text-gray-500 dark:text-gray-300">1st</div>
					</div>

					<div class="flex items-center gap-2 text-sm">
						<div class="font-medium text-gray-600 dark:text-gray-400">Year:</div>
						<div class="text-gray-500 dark:text-gray-300">2nd Year</div>
					</div>

					<div class="flex items-center gap-2 text-sm">
						<div class="font-medium text-gray-600 dark:text-gray-400">Payment Status:</div>
						<div class="text-success-600 dark:text-success-300">Fully Paid</div>
					</div>
				</div>
			</div>
		</div>

		<div class="absolute top-0 right-0 m-3">
			<div class="relative" data-te-dropdown-ref>
				<button type="button" class="inline-flex items-center px-1 py-1 text-gray-600 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700" id="dropdownMenuButton1d" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
						<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
						<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
					</svg>
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1d" data-te-dropdown-menu-ref>
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							Edit ID Number
						</a>
					</li>
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							View Curriculum
						</a>
					</li>
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							View QR Code
						</a>
					</li>
					<hr class="dropdown-divider" />
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							Change Enrollment
						</a>
					</li>
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							Generate Student Portal
						</a>
					</li>
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							Course Overview
						</a>
					</li>
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							Set Curriculum
						</a>
					</li>
					<hr class="dropdown-divider" />
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							Withraw Enrollee
						</a>
					</li>
					<li>
						<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
							Delete
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="block">
			<div class="border-y bg-gray-50 border-gray-200 px-4 pt-4 dark:bg-gray-800 dark:border-gray-700">
				<nav class="flex overflow-auto gap-6" aria-label="Tabs">
					<NuxtLink to="/admin/student/profile" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Profile
					</NuxtLink>

					<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Schedule
					</a>

					<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Grade
					</a>

					<NuxtLink to="/admin/student/fees" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Fees
					</NuxtLink>

					<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Clearance
					</a>

					<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Transcript
					</a>

					<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
						Promisory
					</a>
				</nav>
			</div>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
[aria-current="page"] {
	@apply text-primary-600 border-b-2 border-b-primary-500 dark:text-primary-300 dark:border-b-primary-400;
}
</style>
