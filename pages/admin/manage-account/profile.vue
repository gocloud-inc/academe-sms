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
							<div class="flex items-center gap-1">
								<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-100">Mark Paul Cañeda</h2>
								<span class="material-symbols-rounded msr-filled text-primary text-base">verified</span>
							</div>
							<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium mb-4">
								<div>@mpcaneda</div>
								<div class="bg-gray-400 w-[4px] h-[4px] rounded-full"></div>
								<div>Administrator</div>
							</div>
			
							<div class="flex items-center gap-2 text-sm">
								<div class="font-medium text-gray-600">Program:</div>
								<div class="text-gray-600">College</div>
							</div>
			
							<div class="flex flex-wrap justify-between gap-8 mt-3">
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Date Joined:</div>
									<div class="text-gray-500 dark:text-gray-300">October 12, 2023</div>
								</div>
			
								<div class="flex items-center gap-2 text-sm">
									<div class="font-medium text-gray-600">Email:</div>
									<div class="text-success-600">mpcaneda.gca@gmail.com</div>
								</div>
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

								<NuxtLink to="/admin/manage-account/preferences" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
									Preferences
								</NuxtLink>
							</nav>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-1 xl:grid-cols-12 md:grid-cols-12 gap-6">
					<div class="col-span-3 hidden xl:flow-root">
						<div id="scrollspy1">
							<ul class="space-y-1">
								<li> 
									<a href="#profile" data-te-nav-link-ref data-te-nav-link-active class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
										<span class="material-symbols-rounded">
											person
										</span>
										<span class="text-sm font-medium">Personal Information</span>
									</a>
								</li>
								<li> 
									<a href="#educational" data-te-nav-link-ref class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
										<span class="material-symbols-rounded">
											history_edu
										</span>
										<span class="text-sm font-medium">Educational Background</span>
									</a>
								</li>
								<li> 
									<a href="#career-service" data-te-nav-link-ref class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
										<span class="material-symbols-rounded">
											grade
										</span>
										<span class="text-sm font-medium">Career Service</span>
									</a>
								</li>
								<li> 
									<a href="#work-experience" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
										<span class="material-symbols-rounded">
											work
										</span>
										<span class="text-sm font-medium">Work Experience</span>
									</a>
								</li>
								<li> 
									<a href="#training-programs" data-te-nav-link-ref class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
										<span class="material-symbols-rounded">
											loyalty
										</span>
										<span class="text-sm font-medium">Training Programs</span>
									</a>
								</li>
								<li> 
									<a href="#other" data-te-nav-link-ref class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
										<span class="material-symbols-rounded">
											checklist
										</span>
										<span class="text-sm font-medium">Other Information</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-span-1 xl:col-span-9 md:col-span-9 space-y-6" data-te-spy="scroll" data-te-target="#scrollspy1" data-te-offset="200">
						<div id="profile" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-800 dark:divide-gray-700">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">General Details</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Full Name</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Mark Paul Cañeda</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Date of Birth</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">February 01, 1987</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Place of Birth</dt>
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

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Religion</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>

							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Workspace</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Employee ID</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
													-
												</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Account Type</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Employee Status</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Program Department</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Program Category</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
			
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Contact Information</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
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
								</details>
							</div>
			
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Address</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Residential</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
													-
												</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Permanent</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>

							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Government ID</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">SSS ID Number</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
													-
												</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Pag-ibig Number</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">PhilHealth Number</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">TIN Number</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
			
						</div>

						<div id="educational" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-800 dark:divide-gray-700">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Elementary</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Name of School</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Degree Course</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Year Graduated</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Philippines</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>

							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Secondary</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Name of School</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Degree Course</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Year Graduated</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Philippines</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
			
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Vocational</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Name of School</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Degree Course</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Year Graduated</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Philippines</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
			
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">College</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Name of School</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Degree Course</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Year Graduated</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Philippines</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>

							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden">
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Graduate Studies</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Name of School</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Degree Course</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Year Graduated</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Philippines</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
			
						</div>

						<div id="career-service" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-800 dark:divide-gray-700">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Career Service Certification</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">RA 1080 (Board/Bar)</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Rating</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Date of Examination/Conferment</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
						</div>

						<div id="work-experience" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-800 dark:divide-gray-700">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Work Experience</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Inclusive Dates</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Position</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Agency / Office / Company</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
						</div>

						<div id="training-programs" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-800 dark:divide-gray-700">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Training Programs</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Title of Seminar / Conference / Workshop / Short Courses</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Inclusive Dates of Attendance</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Conducted / Sponsored By</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
						</div>

						<div id="other" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-800 dark:divide-gray-700">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Other Information</h4>
										<div>
											<button type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
												<span class="material-symbols-rounded">
													edit
												</span>
											</button>
											<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
												expand_more
											</span>
										</div>
									</summary>
			
									<div class="flow-root px-4">
										<dl class="text-sm">
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Non-Academic Distinction / Recognition</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Membership in Association Organization</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
				
											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Community Tax Certificate No.</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Issued At</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>

											<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
												<dt class="text-gray-400">Issued On</dt>
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped></style>
