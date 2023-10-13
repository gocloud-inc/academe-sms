<script setup>
	definePageMeta({
		layout: "admin"
	})

	useSeoMeta({
        title: 'Profile - Admin',
    })
</script>

<template>
	<div class="container">
		<div class="space-y-6">
			<div class="space-y-6">
				<div class="bg-white shadow-sm rounded-lg h-fit border dark:bg-gray-800">
					<div class="flex flex-wrap divide-x divide-gray-100 dark:divide-gray-700 relative">
						<div class="p-5 flex justify-center items-center">
							<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-32 h-32 p-4 flex justify-center items-center text-5xl font-semibold dark:bg-gray-700 dark:text-gray-400"> 
								MP
							</div>
						</div>
						<div class="p-5">
							<div class="flex justify-between items-center">
								<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-100">Mark Paul Cañeda</h2>
							</div>
							<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium mb-4">
								<div>@mpcaneda</div>
								<div class="bg-gray-400 w-[4px] h-[4px] rounded-full"></div>
								<div>Administrator</div>
							</div>
			
							<div class="flex items-center gap-2 text-sm">
								<div class="font-medium text-gray-600">Program:</div>
								<div class="text-gray-600">Bachelor of Science in Computer Science (BSCS)</div>
							</div>
			
							<div class="flex flex-wrap justify-between gap-8 mt-3">
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Semester:</div>
									<div class="text-gray-500 dark:text-gray-300">1st</div>
								</div>
			
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Year:</div>
									<div class="text-gray-500 dark:text-gray-300">2nd Year</div>
								</div>
			
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Payment Status:</div>
									<div class="text-success-600">Fully Paid</div>
								</div>
							</div>
						</div>
	
						<div class="absolute top-0 right-0 m-3">
							<div class="relative" data-te-dropdown-ref>
								<button type="button" class="inline-flex items-center px-1 py-1 text-gray-600 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500" id="dropdownMenuButton1d" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
									<span class="material-symbols-rounded">
										more_vert
									</span>
								</button>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1d" data-te-dropdown-menu-ref>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">badge</span>
											Edit ID Number
										</a>
									</li>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">visibility</span>
											View Curriculum
										</a>
									</li>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">qr_code</span>
											View QR Code
										</a>
									</li>
									<hr class="dropdown-divider" />
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">change_circle</span>
											Change Enrollment
										</a>
									</li>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">captive_portal</span>
											Generate Student Portal
										</a>
									</li>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">golf_course</span>
											Course Overview
										</a>
									</li>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">dataset</span>
											Set Curriculum
										</a>
									</li>
									<hr class="dropdown-divider" />
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">person_remove</span>
											Withraw Enrollee
										</a>
									</li>
									<li>
										<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
											<span class="material-symbols-rounded">delete</span>
											Delete
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
			
					<div class="block">
						<div class="border-y bg-gray-50 border-gray-200 px-4 pt-4 dark:bg-gray-800 dark:border-gray-700">
							<nav class="flex overflow-auto gap-6" aria-label="Tabs">
								<NuxtLink to="/admin/manage-account/profile" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-primary-600 dark:text-gray-400 border-b-2 border-b-primary-500">
									Profile
								</NuxtLink>
			
								<NuxtLink to="/admin/manage-account/change-password" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
									Change Password
								</NuxtLink>
	
								<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
									QR Code
								</a>
							</nav>
						</div>
					</div>
				</div>
	
				<div class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-800 dark:divide-gray-700">
					<div class="relative p-5">
						<div class="flex justify-between items-center">
							<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">General Details</h4>
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<span class="material-symbols-rounded">
									edit
								</span>
							</button>
						</div>
	
						<div class="flow-root">
							<dl class="text-sm">
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Full Name</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Mark Paul Cañeda</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Birthdate</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">February 01, 1987</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Birth Place</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Philippines</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Gender</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Male</dd>
								</div>
								
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Nationality</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Filipino</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Civil Status</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Single</dd>
								</div>
							</dl>
						</div>
					</div>
	
					<div class="relative p-5">
						<div class="flex justify-between items-center">
							<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Contact</h4>
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<span class="material-symbols-rounded">
									edit
								</span>
							</button>
						</div>
	
						<div class="flow-root">
							<dl class="text-sm">
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Mobile Number</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
										09123456789
									</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Telephone</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Email</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">mpcaneda.gca@gmail.com</dd>
								</div>
							</dl>
						</div>
					</div>
	
					<div class="relative p-5">
						<div class="flex justify-between items-center">
							<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Current Address</h4>
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<span class="material-symbols-rounded">
									edit
								</span>
							</button>
						</div>
	
						<div class="flow-root">
							<dl class="text-sm">
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Street</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
										B20 L24 - 26 Milk Palm
									</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Barangay</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Saguin</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">City / Municipality</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">San Fernando</dd>
								</div>
	
								<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
									<dt class="text-gray-400">Province</dt>
									<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Pampanga</dd>
								</div>
							</dl>
						</div>
					</div>
	
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped></style>
