<script setup>
    import { storeToRefs } from 'pinia'
    import { useInventoryItemsStore } from '@/stores/bookstore/stores/inventory-items'

    definePageMeta({
        layout: 'admin'
    })

    useSeoMeta({
      	title: 'Items - Inventory Bookstore'
    })

    const store = useInventoryItemsStore()
    const { inventoryItems } = storeToRefs(store)
</script>

<template>
    <div class="container">
		<div class="sm:flex sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center gap-x-3">
					<h2 class="text-xl font-medium text-gray-800 dark:text-white">Inventory Items</h2>

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

					Add new items
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
					<button class="button button-secondary" type="button" id="category" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
						All Category
					</button>
					<ul class="dropdown-menu" aria-labelledby="category" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								All
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Textbook
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Uniform
							</a>
						</li>
					</ul>
				</div>
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="type" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
						All Type
					</button>
					<ul class="dropdown-menu" aria-labelledby="type" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								All
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								PE Uniform
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								School Uniform
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								Supplies
							</a>
						</li>
					</ul>
				</div>
				<div class="relative" data-te-dropdown-ref>
					<button class="button button-secondary" type="button" id="department" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
						<IconsChevronDown class="w-4 h-4" />
						All Department
					</button>
					<ul class="dropdown-menu" aria-labelledby="department" data-te-dropdown-menu-ref>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								All
							</a>
						</li>
						<li>
							<a class="dropdown-link" href="#" data-te-dropdown-item-ref>
								College
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
										Item Code
									</th>

									<th scope="col" class="table-header">
										Category
									</th>

									<th scope="col" class="table-header">
										Department
									</th>

									<th scope="col" class="table-header">
										Size
									</th>

									<th scope="col" class="table-header">
										Stock
									</th>
								</tr>
							</thead>
							<tbody class="table-body">
								<tr v-for="item in inventoryItems" :key="item.code">
									<td class="table-data">
										{{ item.code }}
									</td>
									<td class="table-data">
										{{ item.category }}
									</td>
									<td class="table-data">
										{{ item.department }}
									</td>
									<td class="table-data">
										{{ item.size }}
									</td>
									<td class="table-data">
										<span class="badge badge-primary">
											{{ item.stock }}
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