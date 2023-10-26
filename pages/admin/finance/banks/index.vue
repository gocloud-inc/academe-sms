<script setup>
	import { faker } from '@faker-js/faker';

	definePageMeta({
		layout: "admin",
	});

	useSeoMeta({
		title: 'Banks',
	});

	const generateFakeData = (type) => {
		switch (type) {
			case "bank":
			return {
				id: faker.string.uuid(),
				code: faker.finance.bic(),
                name: faker.finance.creditCardIssuer(),
				type: "bank",
			};
			default:
			return {};
		}
	}

	const fakeBanks = [];
	for (let i = 0; i < 10; i++) {
		fakeBanks.push(generateFakeData("bank"));
	}
</script>

<template>
  	<div class="container">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center gap-x-3">
					<h2 class="text-xl font-medium text-gray-800 dark:text-white">Banks</h2>

					<span class="badge badge-primary">10 total</span>
				</div>

				<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These students are officiallty enrolled in the current school year.</p>
			</div>

			<div class="flex items-center mt-4 gap-x-3">
				<button type="button" class="button button-primary">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75Z"/></svg>

					<span>Add bank</span>
				</button>
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
			
						<input id="search" type="text" name="q" placeholder="Search bank name, or code" class="form-control-icon-start" />
					</div>
				</div>
			</form>

			<div class="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
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
								Name
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Code
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
									<th scope="col" class="table-header w-1/3">
										Bank Code
									</th>

									<th scope="col" class="table-header w-1/2">
										Bank Name
									</th>

									<th scope="col" class="relative py-3.5 px-4">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="table-body">
								<tr v-for="bank in fakeBanks.filter((bank) => bank.type === 'bank')" :key="bank.id">
									<td class="table-data">
										{{ bank.code }}
									</td>
									<td class="table-data">
										{{ bank.name }}
									</td>

									<td class="table-data">
										<div class="button-group">
                                            <button class="button-group-link">
                                                Edit
                                            </button>

                                            <button class="button-group-link bg-danger-50 !text-danger">
                                                Delete
                                            </button>
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
