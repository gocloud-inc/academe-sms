<script setup>
	definePageMeta({
		layout: "enrollment",
		colorMode: "light"
	})

	useSeoMeta({
		title: 'Program - Enrollment',
	})
</script>

<template>
	<form class="max-w-4xl mx-auto space-y-6 pb-6" action="">
		<div class="card p-2">
			<div class="card-body">
				<h1 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
					Select your program
				</h1>
		
				<div class="w-full space-y-4 mt-6">
					<div class="form-group">
						<label for="year_level" class="form-label">Year Level</label>
						<FormsSelect name="year_level" id="year_level" required>
							<option value="1st Year">1st Year</option>
							<option value="2nd Year">2nd Year</option>
							<option value="3rd Year">3rd Year</option>
							<option value="4th Year">4th Year</option>
							<option value="PEC">Profession Education Courses (PEC)</option>
						</FormsSelect>
					</div>

					<div class="form-group">
						<label for="course" class="form-label">Course</label>
						<FormsSelect name="course" id="course" required>
							<option value="Bachelor of Elementary Education">Bachelor of Elementary Education</option>
							<option value="Bachelor of Science in Accountancy">Bachelor of Science in Accountancy</option>
							<option value="Bachelor of Science in Business Administration">Bachelor of Science in Business Administration</option>
							<option value="Bachelor of Science in Computer Science">Bachelor of Science in Computer Science</option>
							<option value="Profession Education Courses">Profession Education Courses</option>
						</FormsSelect>
					</div>

					<div class="form-group">
					<label for="course" class="form-label">Major</label>
					<FormsSelect name="course" id="course" required>
						<option value="Bachelor of Elementary Education">Bachelor of Elementary Education</option>
					</FormsSelect>
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
					<NuxtLink to="/enrollment/profile" class="button button-primary button-lg">Save and Continue</NuxtLink>
				</div>
			</div>
		</div>
	</form>
</template>

<style scoped></style>
