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
								<NuxtLink to="/admin/manage-account/profile" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
									Profile
								</NuxtLink>
			
								<NuxtLink to="/admin/manage-account/change-password" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-primary-600 dark:text-gray-400 border-b-2 border-b-primary-500">
									Change Password
								</NuxtLink>
	
								<a href="#" class="inline-flex shrink-0 items-center gap-2 px-1 pb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
									QR Code
								</a>
							</nav>
						</div>
					</div>
				</div>
	
				<div class="card">
					<div class="card-body">
						<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-300">Change Password</h2>
						<p class="text-sm text-gray-500 dark:text-gray-400">Ensure your account is using a long, random password to stay secure.</p>
	
						<form class="mt-4 space-y-4 form" action="#" method="POST">
							<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
								<div class="form-group">
									<label for="current_password" class="form-label">Current Password</label>
									<div class="relative">
										<input id="current_password" class="form-control password" type="password" name="current_password" required autofocus autocomplete="current-password" />
										<div class="absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer">
											<span class="password-icon">Show</span>
										</div>
									</div>
								</div>
	
								<div class="form-group">
									<label for="new_password" class="form-label">New Password</label>
									<input id="new_password" class="form-control password" type="password" name="new_password" required autofocus autocomplete="new-password" />
								</div>
	
								<div class="form-group">
									<label for="new_password_confirmation" class="form-label">Confirm New Password</label>
									<input id="new_password_confirmation" class="form-control password" type="password" name="new_password_confirmation" required autofocus autocomplete="new-password" />
								</div>
							</div>
	
							<button type="submit" class="button button-primary" disabled>Update password</button>
						</form>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped></style>
