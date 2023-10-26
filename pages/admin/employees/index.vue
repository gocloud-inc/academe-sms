<script setup>
	import { faker } from '@faker-js/faker';

	definePageMeta({
		layout: "admin",
	})

	useSeoMeta({
		title: 'Employees',
	});

	const roles = [
		'Vice President',
		'President',
		'System Administrator',
		'School Administrator',
		'Compliance Officer',
		'Principal',
		'Academic Head',
		'Student Assistant',
		'Dean',
		'Registrar Head',
		'Records System Officer',
		'Registrar Staff',
		'Finance',
		'Cashier',
		'Cashier Head',
		'Human Resource',
		'Library',
		'Faculty',
		'Student Affairs',
		'Custodian',
		'Counselor',
		'Admission',
		'Clearance Department',
		'Clinic',
		'Donors',
		'Book Store',
		'Encoder',
		'Guard',
		'Academic Staff',
	];

	const departments = [
		'Bachelor of Elementary Education',
		'Bachelor of Science in Accountancy',
		'Bachelor of Science in Business Administration',
		'Bachelor of Science in Computer Science',
		'Bachelor of Science in Hotel and Restaurant Management',
		'Professional Education Courses',
	];

	const generateFakeData = (type) => {
		switch (type) {
			case "user":
			return {
				id: faker.string.uuid(),
				username: faker.internet.userName(),
				name: faker.person.fullName(),
				role: faker.helpers.arrayElement(roles),
				department: faker.helpers.arrayElement(departments),
				avatar: faker.image.avatarGitHub(),
				status: faker.helpers.arrayElement(['Active', 'Inactive']),
				type: "user",
			};
			default:
			return {};
		}
	}

	const fakeUsers = [];
	for (let i = 0; i < 10; i++) {
		fakeUsers.push(generateFakeData("user"));
	}
</script>

<template>
  	<div class="container">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center gap-x-3">
					<h2 class="text-xl font-medium text-gray-800 dark:text-white">Employees</h2>

					<span class="badge badge-primary">10 total</span>
				</div>

				<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These students are officiallty enrolled in the current school year.</p>
			</div>

			<div class="flex items-center mt-4 gap-x-3">
				<button class="button button-secondary">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.752 3a2.25 2.25 0 0 1 2.25 2.25v.753h.75a3.254 3.254 0 0 1 3.252 3.25l.003 5.997a2.249 2.249 0 0 1-2.248 2.25H18v1.25A2.25 2.25 0 0 1 15.75 21h-7.5A2.25 2.25 0 0 1 6 18.75V17.5H4.25A2.25 2.25 0 0 1 2 15.25V9.254a3.25 3.25 0 0 1 3.25-3.25l.749-.001L6 5.25A2.25 2.25 0 0 1 8.25 3h7.502Zm-.002 10.5h-7.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75Zm3.002-5.996H5.25a1.75 1.75 0 0 0-1.75 1.75v5.996c0 .414.336.75.75.75H6v-1.75A2.25 2.25 0 0 1 8.25 12h7.5A2.25 2.25 0 0 1 18 14.25V16h1.783a.749.749 0 0 0 .724-.749l-.003-5.997a1.754 1.754 0 0 0-1.752-1.75Zm-3-3.004H8.25a.75.75 0 0 0-.75.75l-.001.753h9.003V5.25a.75.75 0 0 0-.75-.75Z"/></svg>

					<span>Print</span>
				</button>

				<NuxtLink to="/admin/employees/create" class="button button-primary">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75Z"/></svg>

					<span>Add Employee</span>
				</NuxtLink>
			</div>
		</div>

		<div class="mt-6 md:flex md:items-center md:justify-between">
			<form class="">
				<div class="form-group">
					<label for="search" class="form-label sr-only">Search</label>
					
					<div class="relative flex items-center">
						<span class="absolute">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						</span>
			
						<input id="search" type="text" name="q" placeholder="Search employee" class="form-control-icon-start" />
					</div>
				</div>
			</form>

			<div class="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="type" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M6 9l6 6l6 -6"></path>
						</svg>
						All Role
					</button>
					<ul class="dropdown-menu" aria-labelledby="type" data-te-dropdown-menu-ref>
						<li v-for="role in roles" :key="role">
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								{{ role }}
							</a>
						</li>
					</ul>
				</div>
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="yearLevel" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M6 9l6 6l6 -6"></path>
						</svg>
						All Department
					</button>
					<ul class="dropdown-menu" aria-labelledby="yearLevel" data-te-dropdown-menu-ref>
						<li v-for="department in departments" :key="department">
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								{{ department }}
							</a>
						</li>
					</ul>
				</div>
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="sortBy" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-sort" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M3 9l4 -4l4 4m-4 -4v14"></path>
							<path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
						</svg>
						Sort By
					</button>
					<ul class="dropdown-menu" aria-labelledby="sortBy" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Active
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Inactive
							</a>
						</li>
					</ul>
				</div>
			</div>

		</div>

		<div class="flex flex-col mt-6">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full align-middle">
					<div class="table-responsive">
						<table class="table">
							<thead class="table-head">
								<tr>
									<th scope="col" class="table-header">
										Name
									</th>

									<th scope="col" class="table-header">
										Login
									</th>

									<th scope="col" class="table-header">
										Program Department
									</th>

									<th scope="col" class="table-header">
										Role
									</th>

									<th scope="col" class="table-header">
										Status
									</th>

									<th scope="col" class="relative py-3.5 px-4" width="7%">
										<span class="sr-only">Action</span>
									</th>
								</tr>
							</thead>
							<tbody class="table-body">
								<tr v-for="user in fakeUsers.filter((user) => user.type === 'user')" :key="user.id">
									<td class="table-data">
										<div class="flex items-center gap-2">
											<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-10 h-10 flex justify-center items-center text-sm font-semibold dark:bg-gray-600 dark:text-gray-300">
												<img class="avatar avatar-sm rounded-full" :src="user.avatar" alt="">
											</div>
											<NuxtLink to="/admin/employees/edit" class="font-medium text-gray-800 capitalize hover:underline dark:text-white">
												{{ user.name }}
											</NuxtLink>
										</div>
									</td>
									<td class="table-data">
										{{ user.username }}
									</td>
									<td class="table-data">
										{{ user.department }}
									</td>
									<td class="table-data">
										{{ user.role }}
									</td>
									<td class="table-data">
										<span class="badge badge-primary" v-if="user.status === 'Active'">Active</span>
										<span class="badge badge-danger" v-else>Inactive</span>
									</td>

									<td class="table-data">
										<div class="relative" data-te-dropdown-ref>
											<button class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700" type="button" id="dropdownMenuButton1d" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
												<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
													<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
													<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
													<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												</svg>
											</button>
											<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1d" data-te-dropdown-menu-ref>
												<li>
													<NuxtLink to="/admin/employees/edit" class="dropdown-link" data-te-dropdown-item-ref>
														Edit
													</NuxtLink>
												</li>
												<li>
													<button data-te-target="#changePasswordModal" data-te-toggle="modal" type="button" class="dropdown-link" data-te-dropdown-item-ref>
														Change Password
													</button>
												</li>
												<hr class="dropdown-divider" />
												<li v-if="user.status === 'Inactive'">
													<button data-te-target="#activateModal" data-te-toggle="modal" type="button" class="dropdown-link" data-te-dropdown-item-ref>
														Activate
													</button>
												</li>
												<li v-else>
													<button data-te-target="#deactivateModal" data-te-toggle="modal" type="button" class="dropdown-link" data-te-dropdown-item-ref>
														Deactivate
													</button>
												</li>
												<hr class="dropdown-divider" />
												<li>
													<button data-te-target="#deleteModal" data-te-toggle="modal" type="button" class="dropdown-link" data-te-dropdown-item-ref>
														Delete
													</button>
												</li>
											</ul>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

	<ModalsDelete />
	<ModalsChangePassword />
	<ModalsDeactivate />
	<ModalsActivate />
</template>

<style scoped></style>
