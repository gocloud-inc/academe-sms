<script setup>
	import { faker } from '@faker-js/faker';

	definePageMeta({
		layout: "admin",
	});

	useSeoMeta({
		title: 'Officially Enrolled',
	});

	const programs = [
		'Bachelor of Elementary Education',
		'Bachelor of Science in Accountancy',
		'Bachelor of Science in Business Administration',
		'Bachelor of Science in Computer Science',
		'Bachelor of Science in Hotel and Restaurant Management',
		'Professional Education Courses',
	];

	const years = [
		'1st Year',
		'2nd Year',
		'3rd Year',
		'4th Year',
		'5th Year',
	];

	const generateFakeData = (type) => {
		switch (type) {
			case "student":
			return {
				id: faker.string.uuid(),
				studentId: faker.helpers.replaceCreditCardSymbols('SID-1234-[4-9]'),
				name: faker.person.fullName(),
				birthdate: faker.date.birthdate({ min: 15, max: 65, mode: 'age' }),
				program: faker.helpers.arrayElement(programs),
				year: faker.helpers.arrayElement(years),
				avatar: faker.image.avatarGitHub(),
				type: "student",
			};
			default:
			return {};
		}
	}

	const fakeStudents = [];
	for (let i = 0; i < 10; i++) {
		fakeStudents.push(generateFakeData("student"));
	}
</script>

<template>
  	<div class="container">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center gap-x-3">
					<h2 class="text-xl font-medium text-gray-800 dark:text-white">Officially Enrolled</h2>

					<span class="badge badge-primary">10 students</span>
				</div>

				<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These students are officiallty enrolled in the current school year.</p>
			</div>

			<div class="flex items-center mt-4 gap-x-3">
				<button class="button button-primary">
					<Icon name="fluent:arrow-download-24-regular" size="24" />
					Export
				</button>
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
			
						<input id="search" type="text" name="q" placeholder="Search a student" class="form-control-icon-start" />
					</div>
				</div>
			</form>

			<div class="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="type" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
						All Type
					</button>
					<ul class="dropdown-menu" aria-labelledby="type" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								New
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Cross-Enrollee
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Transferee
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Old
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								2nd Courser
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Shifter
							</a>
						</li>
					</ul>
				</div>
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="yearLevel" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
						All Year
					</button>
					<ul class="dropdown-menu" aria-labelledby="yearLevel" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								1st Year
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								2nd Year
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								3rd Year
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								4th Year
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								PEC
							</a>
						</li>
					</ul>
				</div>
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="programCourse" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
						All Programs
					</button>
					<ul class="dropdown-menu" aria-labelledby="programCourse" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Bachelor of Elementary Education
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Bachelor of Science in Accountancy
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Bachelor of Science in Business Administration
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Bachelor of Science in Computer Science
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Bachelor of Science in Hotel and Restaurant Management
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Professional Education Courses
							</a>
						</li>
					</ul>
				</div>
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="sortBy" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsArrowSort class="w-4 h-4" />
						Sort By
					</button>
					<ul class="dropdown-menu" aria-labelledby="sortBy" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Name
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Date Enrolled
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Student ID
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Birth Date
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Year Level
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Course
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
										Year
									</th>

									<th scope="col" class="table-header">
										Program
									</th>

									<th scope="col" class="table-header">
										Date of Birth
									</th>

									<th scope="col" class="relative py-3.5 px-4" width="7%">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="table-body">
								<tr v-for="student in fakeStudents.filter((student) => student.type === 'student')" :key="student.id">
									<td class="table-data">
										<div class="flex items-center gap-2">
											<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-10 h-10 flex justify-center items-center text-sm font-semibold dark:bg-gray-600 dark:text-gray-300">
												<img class="avatar avatar-sm rounded-full" :src="student.avatar" alt="">
											</div>
											<div>
												<NuxtLink to="/admin/student/profile" class="font-medium text-gray-800 hover:underline dark:text-white">
													{{ student.name }}
												</NuxtLink>
												<p class="text-sm font-normal text-gray-600 dark:text-gray-400">
													{{ student.studentId }}
												</p>
											</div>
										</div>
									</td>
									<td class="table-data">
										{{ student.year }}
									</td>
									<td class="table-data">
										<div>
											<h4 class="text-gray-700 dark:text-gray-200">
												{{ student.program }}
											</h4>
											<p class="text-gray-500 dark:text-gray-400">Major in Hardware</p>
										</div>
									</td>
									<td class="table-data">
										{{ student.birthdate.toLocaleDateString('en-US', { format: 'MM/dd/yyyy' }) }}
									</td>

									<td class="table-data">
										<div class="relative" data-te-dropdown-ref>
											<button class="inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700" type="button" id="dropdownMenuButton1d" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
												<IconsMore />
											</button>
											<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1d" data-te-dropdown-menu-ref>
												<li>
													<NuxtLink to="/admin/student/profile" class="dropdown-link" data-te-dropdown-item-ref>
														View Profile
													</NuxtLink>
												</li>
												<li>
													<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
														Course Schedule
													</a>
												</li>
												<li>
													<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
														Grades
													</a>
												</li>
												<hr class="dropdown-divider" />
												<li>
													<NuxtLink to="/admin/student/fees" class="dropdown-link" data-te-dropdown-item-ref>
														Official Fees
													</NuxtLink>
												</li>
												<li>
													<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
														Other Fees
													</a>
												</li>
												<hr class="dropdown-divider" />
												<li>
													<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
														Transcript
													</a>
												</li>
												<li>
													<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
														Clearance
													</a>
												</li>
												<hr class="dropdown-divider" />
												<li>
													<a class="dropdown-link text-danger bg-danger-100" href="#" data-te-dropdown-item-ref>
														Withdraw
													</a>
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
</template>

<style scoped></style>
