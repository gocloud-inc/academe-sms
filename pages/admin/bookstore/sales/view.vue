<script setup>
    definePageMeta({
        layout: 'admin'
    })

    useSeoMeta({
      	title: 'Cruz, Juan Dela - Sales Order - Bookstore'
    })
</script>

<template>
    <div class="container">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<NuxtLink to="/admin/bookstore/sales" class="inline-flex items-center gap-2 -ms-1 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                    <IconsChevronLeft />

					Back
				</NuxtLink>

				<div class="flex items-center gap-x-3">
					<h2 class="text-xl font-medium text-gray-800 dark:text-white">Cruz, Juan Dela - Sales Order</h2>

					<span class="badge badge-primary">3 total</span>
				</div>

				<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
                    2nd Year / Bachelor of Science in Computer Science
                </p>
			</div>

			<div class="flex items-center mt-4 gap-x-3">
				<NuxtLink to="/admin/bookstore/sales/create" class="button button-primary">
					<IconsAdd />

					Add new order
				</NuxtLink>
			</div>
		</div>

		<div class="flex flex-col mt-6">
			<div class="overflow-x-auto">
				<div class="inline-block min-w-full align-middle">
					<div class="table-responsive">
						<table class="table">
                            <caption class="table-caption">
                                <div class="flex flex-wrap items-center justify-between gap-2">
                                    Items
    
                                    <div class="button-group rounded-full">
                                        <button class="button-group-link">
                                            <IconsAddSquareMultiple />
                                            Add
                                        </button>
    
                                        <button class="button-group-link">
                                            <IconsPrint />
                                            Print
                                        </button>

                                        <button class="button-group-link">
                                            <IconsSave />
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </caption>
							<thead class="table-head">
								<tr>
									<th scope="col" class="table-header">
										Item Code
									</th>

									<th scope="col" class="table-header">
										Item Desc.
									</th>

									<th scope="col" class="table-header">
										Size
									</th>

									<th scope="col" class="table-header">
										Qty
									</th>

									<th scope="col" class="table-header">
										Unit Price
									</th>

                                    <th scope="col" class="table-header">
										Total Price
									</th>

                                    <th scope="col" class="relative py-3.5 px-4" width="7%">
										<span class="sr-only">Action</span>
									</th>
								</tr>
							</thead>
							<tbody class="table-body">
								<tr>
									<td class="table-data">
                                        Item-0244
									</td>
									<td class="table-data">
										Blouse
									</td>
									<td class="table-data">
										XSmall
									</td>
									<td class="table-data">
										1
									</td>
                                    <td class="table-data">
                                        570.00
									</td>
									<td class="table-data">
										570.00
									</td>
                                    <td class="table-data">
										<div class="button-group rounded-full">
                                            <button class="button-group-link">
												<IconsEdit />
                                            </button>

                                            <button class="button-group-link bg-danger-50 !text-danger dark:bg-transparent dark:!text-danger-400">
												<IconsDelete />
                                            </button>
                                        </div>
									</td>
								</tr>
                                <tr> 
                                    <td class="table-data text-gray-600 font-bold text-end" colspan="5">
                                        Total Amount
                                    </td>
                                    <td class="table-data font-bold" colspan="6">
                                        <span class="text-lg text-gray-600 font-semibold dark:text-gray-300">₱570.00</span>
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