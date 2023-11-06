<script setup>
  	definePageMeta({
		layout: "admin",
	});

	useSeoMeta({
		title: 'Add New Item',
	});
</script>

<template>
	<form>
		<div class="container">
			<div class="sm:flex sm:items-center sm:justify-between mb-6">
				<div>
					<div class="flex items-center gap-x-3">
						<h2 class="text-xl font-medium text-gray-800 dark:text-white">Add new item</h2>
					</div>
			
					<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p>
				</div>
			
				<div class="flex items-center mt-4 gap-x-3">
					<NuxtLink to="/admin/bookstore/inventory/items" class="button button-secondary">
						Cancel
					</NuxtLink>
					<button type="submit" class="button button-primary">
						Submit
					</button>
				</div>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
				<div class="lg:col-span-8">
					<div class="space-y-6">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Information</h5>

								<div class="space-y-4">
									<div class="form-group">
										<label for="code" class="form-label">Item Code</label>
										<input id="code" type="text" placeholder="e.g IC-09238" class="form-control" required />
									</div>
									<div class="form-group">
										<label for="name" class="form-label">Item Name</label>
										<input id="name" type="text" class="form-control" required />
									</div>
									<div class="form-group">
										<label for="category" class="form-label">Category</label>
										<FormsSelect name="category" id="category" required>
											<option value="Textbook">Textbook</option>
											<option value="Uniform">Uniform</option>
										</FormsSelect>
									</div>
                                    <div class="form-group">
										<label for="grade_level" class="form-label">Grade Level (optional)</label>
										<FormsSelect name="grade_level" id="grade_level">
											<option value="All">All</option>
											<option value="1st Year">1st Year</option>
										</FormsSelect>
									</div>
                                    <div class="form-group">
                                        <label for="type" class="form-label">Type</label>
                                        <FormsSelect name="type" id="type">
                                            <option value="PE Uniform">PE Uniform</option>
                                            <option value="School Uniform">School Uniform</option>
                                            <option value="Supplies">Supplies</option>
                                        </FormsSelect>
                                    </div>
									<div class="form-group">
										<label for="author" class="form-label">Textile / Author (optional)</label>
										<input id="author" type="text" class="form-control" />
									</div>
                                    <div class="form-group">
										<label for="description" class="form-label">Description</label>
										<textarea id="description" type="text" class="form-control" cols="20" rows="3" required></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="lg:col-span-4">
					<div class="space-y-6">
						<div class="card">
							<div class="card-body">
								<div class="space-y-4">
									<div class="form-group">
										<label for="department" class="form-label">Department</label>
										<FormsSelect name="department" id="department" required>
											<option value="College">College</option>
										</FormsSelect>
									</div>
									<div class="form-group">
										<label for="size" class="form-label">Size (optional)</label>
										<FormsSelect name="size" id="size">
											<option value="XSmall">XSmall</option>
											<option value="Small">Small</option>
											<option value="Medium">Medium</option>
											<option value="Large">Large</option>
											<option value="XLarge">XLarge</option>
											<option value="XXLarge">XXLarge</option>
											<option value="XXXLarge">XXXLarge</option>
										</FormsSelect>
									</div>
									<div class="form-group">
										<label for="publisher" class="form-label">Cut / Publisher (optional)</label>
										<input id="publisher" type="text" class="form-control" />
									</div>
									<div class="form-group">
										<label for="reordering_level" class="form-label">Reordering Level</label>
										<input id="reordering_level" type="number" class="form-control" required />
									</div>
                                    <div class="form-group">
										<label for="critical_level" class="form-label">Critical Level</label>
										<input id="critical_level" type="number" class="form-control" required />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<style scoped></style>
