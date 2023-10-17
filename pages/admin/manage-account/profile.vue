<script setup>
	definePageMeta({
		layout: "admin",
	})

	useSeoMeta({
        title: 'Profile',
    })
</script>

<template>
	<div class="container">
		<div class="space-y-6">
			<div class="space-y-6">

				<ClientOnly>
					<AdminProfileCard />

					<template #fallback>
						<SkeletonAdminProfileCard />
					</template>
				</ClientOnly>

				<div class="grid grid-cols-1 xl:grid-cols-12 md:grid-cols-12 gap-6">
					<div class="col-span-1 xl:col-span-8 md:col-span-12 space-y-4" data-te-spy="scroll" data-te-target="#scrollspy1" data-te-offset="200">
						<h2 class="text-xl font-medium dark:text-gray-300">Personal Information</h2>
						<div id="profile" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-900 dark:divide-gray-700 dark:border-gray-800">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">General Details</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editGeneralDetails" aria-controls="editGeneralDetails" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Workspace</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editWorkspace" aria-controls="editWorkspace" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Contact Information</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editContact" aria-controls="editContact" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Address</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editAddress" aria-controls="editAddress" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Government ID</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editGovernmentID" aria-controls="editGovernmentID" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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

						<h2 class="text-xl font-medium pt-6 dark:text-gray-300">Education</h2>
						<div id="educational" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-900 dark:divide-gray-700 dark:border-gray-800">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Elementary</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editEducation" aria-controls="editEducation" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
												<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
											</div>
										</dl>
									</div>
								</details>
							</div>
						</div>
						<button data-te-offcanvas-toggle data-te-target="#addEducation" aria-controls="addEducation" type="button" class="button button-outline-primary">
							Add education
						</button>

						<h2 class="text-xl font-medium pt-6 dark:text-gray-300">Licences & certifications</h2>
						<div id="career-service" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-900 dark:divide-gray-700 dark:border-gray-800">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Certification</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editLicence" aria-controls="editLicence" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
						<button data-te-offcanvas-toggle data-te-target="#addLicence" aria-controls="addLicence" type="button" class="button button-outline-primary">
							Add certificate
						</button>

						<h2 class="text-xl font-medium pt-6 dark:text-gray-300">Work history</h2>
						<div id="work-experience" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-900 dark:divide-gray-700 dark:border-gray-800">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Work Experience</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editWorkExperience" aria-controls="editWorkExperience" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
						<button data-te-offcanvas-toggle data-te-target="#addWorkExperience" aria-controls="addWorkExperience" type="button" class="button button-outline-primary">
							Add experience
						</button>

						<h2 class="text-xl font-medium pt-6 dark:text-gray-300">Training</h2>
						<div id="training-programs" class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-900 dark:divide-gray-700 dark:border-gray-800">
							<div class="relative p-2">
								<details class="group [&_summary::-webkit-details-marker]:hidden" open>
									<summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100">
										<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500 ml-2">Training Programs</h4>
										<div>
											<button data-te-offcanvas-toggle data-te-target="#editTraining" aria-controls="editTraining" type="button" class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700">
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
						<button data-te-offcanvas-toggle data-te-target="#addTraining" aria-controls="addTraining" type="button" class="button button-outline-primary">
							Add training
						</button>

					</div>

					<div class="col-span-4 hidden lg:block space-y-6">
						<div class="card">
							<div class="card-body">
								<div class="flex flex-col w-full gap-1">
									<div class="flex items-center justify-between gap-2">
										<div class="text-base font-medium dark:text-gray-200">Profile Completion</div>
										<div class="text-xs text-green-500">30%</div>
									</div>
									<span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="30" class="block w-full rounded-full bg-gray-200">
										<span class="block w-full h-2 rounded-full bg-success-500" style="width: 30%"></span>
									</span>
								</div>
								<details class="group [&_summary::-webkit-details-marker]:hidden mt-2" open>
									<summary class="flex cursor-pointer items-center gap-1.5 rounded-lg text-gray-900 dark:text-gray-300">
										<span class="material-symbols-rounded text-2xl shrink-0 transition duration-300 group-open:-rotate-180">
											expand_more
										</span>
										<h2 class="text-xs">
											Hide Recommendations
										</h2>
									</summary>

									<div class="mt-2 px-4">
										<p class="text-xs leading-relaxed text-gray-500 mb-3 dark:text-gray-300">
											Fill-out the following items to strengthen your profile. 
										</p>

										<ul class="text-xs text-gray-500 dark:text-gray-400 space-y-2">
											<li>Share your <b>Date of Birth</b></li>
											<li>Specify <b>Professional Status</b></li>
											<li>Add one (1) <b>Document Credentials</b></li>
											<li>Add <b>Current Address</b></li>
										</ul>
									</div>
								</details>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Edit Profile Through Offcanvas -->
		<ClientOnly>
			<OffcanvasAdminProfileEditGeneralDetails />
			<OffcanvasAdminProfileEditWorkspace />
		</ClientOnly>

		<OffcanvasAdminProfileEditContact />
		<OffcanvasAdminProfileEditAddress />
		<OffcanvasAdminProfileEditGovernmentID />
		<OffcanvasAdminProfileEditEducation />
		<OffcanvasAdminProfileAddEducation />
		<OffcanvasAdminProfileEditLicence />
		<OffcanvasAdminProfileAddLicence />
		<OffcanvasAdminProfileAddWorkExperience />
		<OffcanvasAdminProfileEditWorkExperience />
		<OffcanvasAdminProfileAddTraining />
		<OffcanvasAdminProfileEditTraining />
	</div>
</template>

<style scoped></style>
