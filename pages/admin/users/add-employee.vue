<script setup>
  	definePageMeta({
		layout: "admin",
	});

	useSeoMeta({
		title: 'Add New Employee',
	});
</script>

<template>
	<form>
		<div class="container">
			<div class="sm:flex sm:items-center sm:justify-between mb-6">
				<div>
					<div class="flex items-center gap-x-3">
						<h2 class="text-xl font-medium text-gray-800 dark:text-white">Add new employee</h2>
					</div>
			
					<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p>
				</div>
			
				<div class="flex items-center mt-4 gap-x-3">
					<NuxtLink to="/admin/users/employee" class="button button-secondary">
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
								<h5 class="card-title">Personal Information</h5>

								<div class="space-y-4">
									<div class="form-group">
										<label for="name" class="form-label">Full Name</label>
										<input id="name" type="text" placeholder="e.g Juan Dela Cruz" class="form-control" autocomplete="name" required />
									</div>
									<div class="form-group">
										<label for="birthdate" class="form-label">Date of Birth</label>
										<input id="birthdate" type="date" class="form-control" autocomplete="birthday" required />
									</div>
									<div class="form-group">
										<label for="birthplace" class="form-label">Place of Birth (optional)</label>
										<input id="birthplace" type="text" placeholder="e.g Metro Manila" class="form-control" autocomplete="address" />
									</div>
									<div class="form-group">
										<label for="gender" class="form-label">Gender (optional)</label>
										<FormsSelect name="gender" id="gender">
											<option value="Male">Male</option>
											<option value="Female">Female</option>
										</FormsSelect>
									</div>
									<div class="form-group">
										<label for="nationality" class="form-label">Nationality (optional)</label>
										<input id="nationality" type="text" placeholder="e.g Filipino" class="form-control" />
									</div>
									<div class="form-group">
										<label for="civil_status" class="form-label">Civil Status (optional)</label>
										<FormsSelect name="civil_status" id="civil_status">
											<option value="Single">Single</option>
											<option value="Married">Married</option>
											<option value="Widowed">Widowed</option>
											<option value="Divorced">Divorced</option>
										</FormsSelect>
									</div>
								</div>
							</div>
						</div>

						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Contact Information</h5>

								<div class="space-y-4">
									<div class="form-group">
										<label for="mobile_number" class="form-label">Mobile Number (optional)</label>
										<input id="mobile_number" type="text" placeholder="e.g (+63) 912-2342-563" class="form-control" autocomplete="phone" />
									</div>
									<div class="form-group">
										<label for="telephone" class="form-label">Telephone (optional)</label>
										<input id="telephone" type="tel" class="form-control" autocomplete="tel" />
									</div>
									<div class="form-group">
										<label for="email" class="form-label">Email (optional)</label>
										<input id="email" type="email" placeholder="e.g juandelacruz@gmail.com" class="form-control" autocomplete="email" />
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
										<label for="employee_id" class="form-label">Employee ID</label>
										<input id="employee_id" type="text" class="form-control" placeholder="e.g Juan Dela Cruz" required />
									</div>
									<div class="form-group">
										<label for="account_type" class="form-label">Account Type</label>
										<FormsSelect name="account_type" id="account_type" required>
											<option value="System Administrator">System Administrator</option>
										</FormsSelect>
									</div>
									<div class="form-group">
										<label for="employee_status" class="form-label">Employee Status (optional)</label>
										<FormsSelect name="employee_status" id="employee_status">
											<option value="Employed">Employed</option>
										</FormsSelect>
									</div>
									<div class="form-group">
										<label for="program_department" class="form-label">Program Department (optional)</label>
										<FormsSelect name="program_department" id="program_department">
										</FormsSelect>
									</div>
									<div class="form-group">
										<label for="program_category" class="form-label">Program Category (optional)</label>
										<FormsSelect name="program_category" id="program_category">
											<option value="College">College</option>
										</FormsSelect>
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
