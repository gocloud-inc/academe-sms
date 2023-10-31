<script lang="ts">
	export default {
		setup() {
			definePageMeta({
				layout: "admin",
			});

			useSeoMeta({
				title: 'Cruz, Juan Dela - Profile',
			});
		},
	}
</script>

<template>
	<div class="container">
		<div class="flex flex-col mb-6">
			<div class="flex items-center overflow-x-auto whitespace-nowrap">
				<NuxtLink to="/admin/registrar/officially-enrolled" class="inline-flex items-center gap-2 -ms-1 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                    <IconsChevronLeft />

					Officially Enrolled
				</NuxtLink>
			</div>
			<h4 class="text-xl lg:text-2xl font-medium text-gray-700 mt-1 dark:text-gray-300">Cruz, Juan Dela - Profile</h4>
		</div>

		<div class="space-y-6">
			<StudentProfileCard />
  
			<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
				<div class="col-span-6">
					<div class="bg-white shadow-sm rounded-lg h-fit border dark:bg-gray-900 dark:border-gray-700">
						<div class="relative flex flex-col gap-3 p-5 divide-y divide-gray-100 dark:divide-gray-700">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-300">Certificates</h4>
							</div>
		
							<div class="flex flex-wrap items-center justify-between gap-2 pt-2">
								<div class="text-sm text-gray-600 dark:text-gray-400">Certificate of Enrollment</div>
								<a href="#" target="_blank" rel="noopener noreferrer" class="button button-primary button-sm">Generate</a>
							</div>
		
							<div class="flex flex-wrap items-center justify-between gap-2 pt-2">
								<div class="text-sm text-gray-600 dark:text-gray-400">Report of Grades</div>
								<a href="#" target="_blank" rel="noopener noreferrer" class="button button-primary button-sm">Generate</a>
							</div>
			
							<div class="flex flex-wrap items-center justify-between gap-2 pt-2">
								<div class="text-sm text-gray-600 dark:text-gray-400">Certificate of Good Moral Character</div>
								<a href="#" target="_blank" rel="noopener noreferrer" class="button button-primary button-sm">Generate</a>
							</div>
		
							<div class="flex flex-wrap items-center justify-between gap-2 pt-2">
								<div class="text-sm text-gray-600 dark:text-gray-400">Certificate of Honorable Dismissal</div>
								<a href="#" target="_blank" rel="noopener noreferrer" class="button button-primary button-sm">Generate</a>
							</div>
			
							<div class="flex flex-wrap items-center justify-between gap-2 pt-2">
								<div class="text-sm text-gray-600 dark:text-gray-400">Request Slip</div>
								<a href="#" target="_blank" rel="noopener noreferrer" class="button button-primary button-sm">Generate</a>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-span-6">
					<div class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">General Details</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">LRN</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											123456789
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Student Type</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Regular</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Senior High Track</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">Academic</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Senior High Strand</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
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
										<dt class="text-gray-400">Religion</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">MCGI</dd>
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
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
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
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
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
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Father's Information</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Occupation</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Contact Number</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Mother's Information</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Occupation</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Contact Number</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Number of Children</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Guardian's Information</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Relationship</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Contact Number</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Brother/Sister currently enrolled or graduate of this school</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Grade I to VI</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">School Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Location</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Inclusive Year</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Honor / Award</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">G.W.A</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Grade 7 to 10</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">School Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Location</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Inclusive Year</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Honor / Award</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">G.W.A</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">College (Transferees)</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">School Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Location</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Inclusive Year</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Honor / Award</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">G.W.A</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">College (2nd Courser)</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">School Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Location</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Inclusive Year</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Honor / Award</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">G.W.A</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
		
						<div class="relative p-5">
							<div class="flex justify-between items-center">
								<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">Vocational Course</h4>
								<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:text-gray-500 dark:hover:bg-gray-700">
									<IconsEdit />
								</button>
							</div>
		
							<div class="flow-root">
								<dl class="text-sm">
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">School Name</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Location</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">
											-
										</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Inclusive Year</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Honor / Award</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
		
									<div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
										<dt class="text-gray-400">Please state reason/s in choosing this school</dt>
										<dd class="font-medium text-gray-700 sm:col-span-2 dark:text-gray-300">-</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
  
	  </div>
	</div>
</template>

<style scoped></style>
