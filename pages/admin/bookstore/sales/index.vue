<script setup>
    import { faker } from '@faker-js/faker';

    definePageMeta({
        layout: 'admin'
    })

    useSeoMeta({
      	title: 'Sales Order - Bookstore'
    })

    const generateFakeData = (type) => {
		switch (type) {
			case "sale":
			return {
				id: faker.string.uuid(),
				orderNo: faker.helpers.replaceCreditCardSymbols('SO-122-[4-9]'),
				name: faker.person.fullName(),
				avatar: faker.image.avatarGitHub(),
				amount: faker.commerce.price(),
				status: faker.helpers.arrayElement(['Released', 'Paid', 'Pending']),
				type: "sale",
			};
			default:
			return {};
		}
	}

	const fakeSales = [];
	for (let i = 0; i < 10; i++) {
		fakeSales.push(generateFakeData("sale"));
	}
</script>

<template>
    <div class="container">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center gap-x-3">
					<h2 class="text-xl font-medium text-gray-800 dark:text-white">Sales Order</h2>

					<span class="badge badge-primary">10 total</span>
				</div>

				<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These students are officiallty enrolled in the current school year.</p>
			</div>

			<div class="flex items-center mt-4 gap-x-3">
				<button class="button button-secondary">
					<IconsPrint />

					Print
				</button>

				<NuxtLink to="/admin/bookstore/sales/create" class="button button-primary">
					<IconsAdd />

					Add new order
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
			
						<input id="search" type="text" name="q" placeholder="Search" class="form-control-icon-start" />
					</div>
				</div>
			</form>

			<div class="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
				<div class="button-group">
                    <button type="button" class="button-group-link active">All</button>
                    <button type="button" class="button-group-link">Released</button>
                    <button type="button" class="button-group-link">Paid</button>
                    <button type="button" class="button-group-link">Pending</button>
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
										Order No.
									</th>

									<th scope="col" class="table-header">
										Student
									</th>

									<th scope="col" class="table-header">
										Order Date
									</th>

									<th scope="col" class="table-header">
										Amount
									</th>

									<th scope="col" class="table-header">
										Balance
									</th>

                                    <th scope="col" class="table-header">
										Status
									</th>
								</tr>
							</thead>
							<tbody class="table-body">
								<tr v-for="data in fakeSales.filter((data) => data.type === 'sale')" :key="data.id">
									<td class="table-data">
										{{ data.orderNo }}
									</td>
									<td class="table-data">
										<div class="flex items-center gap-2">
											<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-8 h-8 flex justify-center items-center text-sm font-semibold dark:bg-gray-600 dark:text-gray-300">
												<img class="avatar avatar-sm rounded-full" :src="data.avatar" :alt="data.name">
											</div>
											<NuxtLink to="/admin/bookstore/sales/view" class="font-medium text-gray-800 capitalize hover:underline dark:text-white">
												{{ data.name }}
											</NuxtLink>
										</div>
									</td>
									<td class="table-data">
										Nov. 03, 2023
									</td>
									<td class="table-data">
										{{ data.amount }}
									</td>
                                    <td class="table-data">
										-
									</td>
									<td class="table-data">
										<span class="badge badge-primary" v-if="data.status == 'Released'">
											Released
										</span>
										<span class="badge badge-success" v-else-if="data.status == 'Paid'">
											Paid
										</span>
										<span class="badge badge-warning" v-else>
											Pending
										</span>
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