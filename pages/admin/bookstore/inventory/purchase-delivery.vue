<script setup>
    import { storeToRefs } from 'pinia'
    import { useInventoryItemsStore } from '@/stores/bookstore/stores/inventory-items'

    definePageMeta({
        layout: 'admin'
    })

    useSeoMeta({
      	title: 'Purchase Delivery - Inventory Bookstore'
    })

    const store = useInventoryItemsStore()
    const { inventoryItems } = storeToRefs(store)
</script>

<template>
    <div class="container">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center gap-x-3">
					<h2 class="text-xl font-medium text-gray-800 dark:text-white">Purchase Delivery</h2>

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

					Add new item
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
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="yearLevel" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
						All Department
					</button>
					<ul class="dropdown-menu" aria-labelledby="yearLevel" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								All
							</a>
						</li>
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
										Purchase Delivery No.
									</th>

									<th scope="col" class="table-header">
										D.R No.
									</th>
								</tr>
							</thead>
							<tbody class="table-body">
								<tr>
									<td class="table-data">
										PD-0001
									</td>
									<td class="table-data">
										Bandolin Enterprise 090535
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