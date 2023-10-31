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
					<IconsPrint />

					Print
				</button>

				<NuxtLink to="/admin/employees/create" class="button button-primary">
					<IconsAdd />

					Add Employee
				</NuxtLink>
			</div>
		</div>

		<div class="mt-6 md:flex md:items-center md:justify-between">
			<form class="">
				<div class="form-group">
					<label for="search" class="form-label sr-only">Search</label>
					
					<div class="relative flex items-center">
						<span class="absolute">
							<IconsSearch class="mx-3 text-gray-400 dark:text-gray-600" />
						</span>
			
						<input id="search" type="text" name="q" placeholder="Search employee" class="form-control-icon-start" />
					</div>
				</div>
			</form>

			<div class="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="type" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
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
						<IconsChevronDown class="w-4 h-4" />
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
						<IconsArrowSort class="w-5 h-5" />
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
												<IconsMore />
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
