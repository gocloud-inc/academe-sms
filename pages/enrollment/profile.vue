<script setup>
	definePageMeta({
		layout: "enrollment",
		colorMode: "light"
	})

	useSeoMeta({
		title: 'Profile - Enrollment',
	})
</script>

<template>
  	<form class="max-w-4xl mx-auto space-y-6 pb-6" action="">
		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Student Profile Information
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="form-group">
							<label for="lrn" class="form-label">LRN (optional)</label>
							<input type="text" id="lrn" class="form-control" maxlength="12" placeholder="e.g 501142300721">
						</div>

						<div class="form-group">
							<label for="student_type" class="form-label">Student Type</label>
							<FormsSelect name="student_type" id="student_type" required>
								<option value="Regular">Regular</option>
								<option value="Irregular">Irregular</option>
							</FormsSelect>
						</div>
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="form-group">
							<label for="previous_track" class="form-label">Senior High Previous Track</label>
							<FormsSelect  name="previous_track" id="previous_track" required>
								<option value="Academic">Academic</option>
								<option value="Sports">Sports</option>
								<option value="Arts & Design">Arts & Design</option>
								<option value="Technical-Vocational Livelihood">Technical-Vocational Livelihood</option>
							</FormsSelect>
						</div>

						<div class="form-group">
							<label for="previous_strand" class="form-label">Senior High Previous Strand</label>
							<FormsSelect  name="previous_strand" id="previous_strand" required>
								<option value="Accountancy, Business and Management">Accountancy, Business and Management</option>
								<option value="Humanities and Social Sciences">Humanities and Social Sciences</option>
								<option value="Science, Technology, Engineering, and Mathematics">Science, Technology, Engineering, and Mathematics</option>
								<option value="General Academic Strand">General Academic Strand</option>
							</FormsSelect>
						</div>
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="fullname" class="form-label">First Name</label>
							<input type="text" id="fullname" class="form-control" placeholder="e.g Juan" autocomplete="name" required>
						</div>
						<div class="form-group">
							<label for="fullname" class="form-label">Middle Name</label>
							<input type="text" id="fullname" class="form-control" placeholder="e.g Dela" autocomplete="name" required>
						</div>
						<div class="form-group">
							<label for="fullname" class="form-label">Last Name</label>
							<input type="text" id="fullname" class="form-control" placeholder="e.g Cruz" autocomplete="name" required>
						</div>
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="form-group">
							<label for="birthdate" class="form-label">Birthdate</label>
							<input type="date" id="birthdate" class="form-control" autocomplete="bday" required>
						</div>

						<div class="form-group">
							<label for="birthplace" class="form-label">Place of Birth</label>
							<input type="text" id="birthplace" class="form-control" placeholder="e.g Metro Manila" autocomplete="address-level1" required>
						</div>
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="gender" class="form-label">Gender</label>
							<FormsSelect  name="gender" id="gender" required>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</FormsSelect>
						</div>

						<div class="form-group">
							<label for="mobile_number" class="form-label">Mobile Number</label>
							<input type="text" id="mobile_number" class="form-control" placeholder="e.g 0912 3456 789" autocomplete="mobile" required>
						</div>

						<div class="form-group">
							<label for="email" class="form-label">Email</label>
							<input type="email" id="email" class="form-control" placeholder="e.g juandelacruz@gmail.com" autocomplete="email" required>
						</div>
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="nationality" class="form-label">Nationality</label>
							<FormsSelect  name="nationality" id="nationality" required>
								<option value="Filipino">Filipino</option>
							</FormsSelect>
						</div>

						<div class="form-group">
							<label for="civil_status" class="form-label">Civil Status</label>
							<FormsSelect  name="civil_status" id="civil_status" required>
								<option value="Single">Single</option>
								<option value="Married">Married</option>
								<option value="Widowed">Widowed</option>
								<option value="Divorced">Divorced</option>
							</FormsSelect>
						</div>

						<div class="form-group">
							<label for="living_with" class="form-label">Living with</label>
							<FormsSelect  name="living_with" id="living_with" required>
								<option value="Parents">Parents</option>
								<option value="Relatives">Relatives</option>
								<option value="Guardian">Guardian</option>
								<option value="Spouse">Spouse</option>
								<option value="Alone">Alone</option>
							</FormsSelect>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Address Information
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="street" class="form-label">Street (optional)</label>
						<input type="text" id="street" class="form-control" placeholder="e.g Street Block 1 Lot 1" autocomplete="street-address">
					</div>

					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="province" class="form-label">Province</label>
							<FormsSelect  name="province" id="province" required>
								<option value="Regular">Regular</option>
							</FormsSelect>
						</div>

						<div class="form-group">
							<label for="city" class="form-label">City/Municipality</label>
							<FormsSelect  name="city" id="city" required>
								<option value="Academic">Academic</option>
							</FormsSelect>
						</div>

						<div class="form-group">
							<label for="barangay" class="form-label">Barangay</label>
							<FormsSelect  name="barangay" id="barangay" required>
								<option value="Accountancy, Business and Management">Accountancy, Business and Management</option>
							</FormsSelect>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Father's Information
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="father_name" class="form-label">Father's Name</label>
						<input type="text" id="father_name" class="form-control" required>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="form-group">
							<label for="father_occupation" class="form-label">Occupation</label>
							<input type="text" id="father_occupation" class="form-control" required>
						</div>

						<div class="form-group">
							<label for="father_contact" class="form-label">Contact</label>
							<input type="text" id="father_contact" class="form-control" required>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Mother's Information
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="father_name" class="form-label">Name</label>
						<input type="text" id="mother_name" class="form-control" required>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="mother_occupation" class="form-label">Occupation (optional)</label>
							<input type="text" id="mother_occupation" class="form-control">
						</div>

						<div class="form-group">
							<label for="mother_contact" class="form-label">Contact (optional)</label>
							<input type="text" id="mother_contact" class="form-control">
						</div>

						<div class="form-group">
							<label for="no_of_children" class="form-label">No of Children (optional)</label>
							<input type="text" id="no_of_children" class="form-control">
						</div>
					</div>

					<div class="form-group">
						<label for="currently_enrolled" class="form-label">Brother/Sister currently enrolled or graduate of this school (optional)</label>
						<input type="text" id="currently_enrolled" class="form-control" placeholder="Name / Year & section or year graduated">
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Guardian's Information
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="guardian_name" class="form-label">Name (optional)</label>
						<input type="text" id="guardian_name" class="form-control">
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div class="form-group">
							<label for="guardian_relationship" class="form-label">Relationship (optional)</label>
							<input type="text" id="guardian_relationship" class="form-control">
						</div>

						<div class="form-group">
							<label for="guardian_contact" class="form-label">Contact (optional)</label>
							<input type="text" id="guardian_contact" class="form-control">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Grade I to VI
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="school_name" class="form-label">School Name</label>
						<input type="text" id="school_name" class="form-control" required>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="inclusive_year" class="form-label">Inclusive Year</label>
							<input type="text" id="inclusive_year" class="form-control" required>
						</div>

						<div class="form-group">
							<label for="honor_award" class="form-label">Honor / Award (optional)</label>
							<input type="text" id="honor_award" class="form-control">
						</div>

						<div class="form-group">
							<label for="gwa" class="form-label">G.W.A (optional)</label>
							<input type="text" id="gwa" class="form-control">
						</div>
					</div>
					<div class="form-group">
						<label for="location" class="form-label">Location</label>
						<input type="text" id="location" class="form-control" required>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Grade 7 to 10
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="school_name" class="form-label">School Name</label>
						<input type="text" id="school_name" class="form-control" required>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="inclusive_year" class="form-label">Inclusive Year</label>
							<input type="text" id="inclusive_year" class="form-control" required>
						</div>

						<div class="form-group">
							<label for="honor_award" class="form-label">Honor / Award (optional)</label>
							<input type="text" id="honor_award" class="form-control">
						</div>

						<div class="form-group">
							<label for="gwa" class="form-label">G.W.A (optional)</label>
							<input type="text" id="gwa" class="form-control">
						</div>
					</div>
					<div class="form-group">
						<label for="location" class="form-label">Location</label>
						<input type="text" id="location" class="form-control" required>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					College (Transferees)
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="school_name" class="form-label">School Name</label>
						<input type="text" id="school_name" class="form-control" required>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="inclusive_year" class="form-label">Inclusive Year</label>
							<input type="text" id="inclusive_year" class="form-control" required>
						</div>

						<div class="form-group">
							<label for="honor_award" class="form-label">Honor / Award (optional)</label>
							<input type="text" id="honor_award" class="form-control">
						</div>

						<div class="form-group">
							<label for="gwa" class="form-label">G.W.A (optional)</label>
							<input type="text" id="gwa" class="form-control">
						</div>
					</div>
					<div class="form-group">
						<label for="location" class="form-label">Location</label>
						<input type="text" id="location" class="form-control" required>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					College (2nd Courser)
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="school_name" class="form-label">School Name</label>
						<input type="text" id="school_name" class="form-control" required>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="inclusive_year" class="form-label">Inclusive Year</label>
							<input type="text" id="inclusive_year" class="form-control" required>
						</div>

						<div class="form-group">
							<label for="honor_award" class="form-label">Honor / Award (optional)</label>
							<input type="text" id="honor_award" class="form-control">
						</div>

						<div class="form-group">
							<label for="gwa" class="form-label">G.W.A (optional)</label>
							<input type="text" id="gwa" class="form-control">
						</div>
					</div>
					<div class="form-group">
						<label for="location" class="form-label">Location</label>
						<input type="text" id="location" class="form-control" required>
					</div>
				</div>
			</div>
		</div>

		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Vocational Course
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="school_name" class="form-label">School Name</label>
						<input type="text" id="school_name" class="form-control" required>
					</div>
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
						<div class="form-group">
							<label for="gwa" class="form-label">Location</label>
							<input type="text" id="gwa" class="form-control" required>
						</div>

						<div class="form-group">
							<label for="inclusive_year" class="form-label">Inclusive Year</label>
							<input type="text" id="inclusive_year" class="form-control" required>
						</div>

						<div class="form-group">
							<label for="honor_award" class="form-label">Honor / Award (optional)</label>
							<input type="text" id="honor_award" class="form-control">
						</div>
					</div>
					<div class="form-group">
						<label for="reason" class="form-label">Please state reason/s in choosing this school (optional)</label>
						<input type="text" id="reason" class="form-control">
					</div>
				</div>
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="card">
			<div class="card-body space-y-6">
				<p class="text-sm text-gray-600">I hereby affirm that all information supplied herein is complete and accurate. Withholding false information will make me ineligible for admission or subject to dismissal. If admitted, I agree to abide by the policies, rules and regulations of School Information Management System.</p>
				<div class="flex flex-wrap justify-between gap-4">
					<button @click="$router.back()" type="button" class="button button-secondary button-lg">Back</button>
					<NuxtLink to="/enrollment/course" class="button button-primary button-lg">Save and Continue</NuxtLink>
				</div>
			</div>
		</div>
	</form>
</template>

<style scoped></style>
