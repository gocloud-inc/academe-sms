<script setup>
    import { storeToRefs } from 'pinia'
    import { useInventoryItemsStore } from '@/stores/bookstore/stores/inventory-items'

    definePageMeta({
        layout: 'admin'
    })

    useSeoMeta({
      	title: 'Sales Order - Bookstore'
    })

    const store = useInventoryItemsStore()
    const { inventoryItems } = storeToRefs(store)
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

				<NuxtLink to="/admin/employees/create" class="button button-primary">
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
								<tr>
									<td class="table-data">
										SO-08934
									</td>
									<td class="table-data">
										<div class="flex items-center gap-2">
											<div class="uppercase bg-gray-100 text-gray-500 rounded-full w-8 h-8 flex justify-center items-center text-sm font-semibold dark:bg-gray-600 dark:text-gray-300">
												JD
											</div>
											<NuxtLink to="/admin/student/profile" class="font-medium text-gray-800 capitalize hover:underline dark:text-white">
												Juan Dela Cruz
											</NuxtLink>
										</div>
									</td>
									<td class="table-data">
										Nov. 03, 2023
									</td>
									<td class="table-data">
										250
									</td>
                                    <td class="table-data">
										-
									</td>
									<td class="table-data">
										<span class="badge badge-success">
											Paid
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