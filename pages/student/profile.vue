<script>
	export default {
		setup() {
			definePageMeta({
				layout: "student",
			});

			useSeoMeta({
				title: 'Profile',
			});
		},
	}
</script>

<template>
	<div class="container space-y-6">
		<div class="bg-white shadow-sm rounded-lg h-fit border dark:bg-gray-900 dark:border-gray-700">
			<div class="flex flex-wrap divide-x divide-gray-100 dark:divide-gray-700 relative">
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
		</div>

		<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
			<div class="col-span-12">
				<div class="bg-white shadow-sm rounded-lg divide-y divide-gray-100 h-fit border dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
					<div class="relative p-5">
						<div class="flex justify-between items-center">
							<h4 class="font-semibold text-gray-700 text-base dark:text-gray-500">General Details</h4>
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
							<button type="button" class="absolute top-0 right-0 m-3 inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path>
									<path d="M13.5 6.5l4 4"></path>
								</svg>
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
</template>

<style scoped></style>
