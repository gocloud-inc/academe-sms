<script setup>
	definePageMeta({
		layout: "enrollment",
		colorMode: "light"
	})

	useSeoMeta({
		title: 'Course - Enrollment',
	})

	const router = useRouter()
</script>

<template>
  	<form class="space-y-6 pb-6" action="">
		<div class="table-responsive">
			<table class="table">
				<caption class="table-caption">
					Course Selection
				</caption>
				<thead class="table-head">
					<tr>
						<th scope="col" class="table-header">
							<div class="flex items-center gap-2">
								<div class="form-check">
									<input id="select-all" type="checkbox" value="" class="form-check-control">
								</div>
								Program
							</div>
						</th>

						<th scope="col" class="table-header">
							Course
						</th>

						<th scope="col" class="table-header">
							Units
						</th>

						<th scope="col" class="table-header">
							Lec
						</th>
						
						<th scope="col" class="table-header">
							Instructor
						</th>

						<th scope="col" class="table-header">
							Load
						</th>

						<th scope="col" class="table-header">
							Year
						</th>
					</tr>
				</thead>
				<tbody class="table-body">
					<tr>
						<td class="table-data">
							<div class="flex items-start gap-2">
								<div class="form-check">
									<input id="course-1" type="checkbox" value="" class="form-check-control">
								</div>
								<div>
									<h2 class="font-medium text-gray-800 dark:text-white">BSCS</h2>
									<p class="text-sm font-normal text-gray-600 dark:text-gray-400">13854</p>
								</div>
							</div>
						</td>

						<td class="table-data">
							<div>
								<h4 class="text-gray-700 dark:text-gray-200">Discrete Mathematics</h4>
								<p class="text-gray-500 dark:text-gray-400">CS 221</p>
							</div>
						</td>

						<td class="table-data">
							3
						</td>

						<td class="table-data">
							3
						</td>

						<td class="table-data">
							<div>
								<h4 class="text-gray-700 dark:text-gray-200">LEC Doe, John</h4>
								<p class="text-gray-500 dark:text-gray-400">LEC MW Room 101</p>
							</div>
						</td>
						
						<td class="table-data">
							2/30
						</td>

						<td class="table-data">
							2nd Year
						</td>
					</tr>
					<tr>
						<td class="table-data">
							<div class="flex items-start gap-2">
								<div class="form-check">
									<input id="course-2" type="checkbox" value="" class="form-check-control">
								</div>
								<div>
									<h2 class="font-medium text-gray-800 dark:text-white">BSA</h2>
									<p class="text-sm font-normal text-gray-600 dark:text-gray-400">13853</p>
								</div>
							</div>
						</td>

						<td class="table-data">
							<div>
								<h4 class="text-gray-700 dark:text-gray-200">Art Appreciation</h4>
								<p class="text-gray-500 dark:text-gray-400">GE 6</p>
							</div>
						</td>

						<td class="table-data">
							3
						</td>

						<td class="table-data">
							3
						</td>

						<td class="table-data">
							<div>
								<h4 class="text-gray-700 dark:text-gray-200">LEC Doe, John</h4>
								<p class="text-gray-500 dark:text-gray-400">LEC MW Room 101</p>
							</div>
						</td>
						
						<td class="table-data">
							0/30
						</td>

						<td class="table-data">
							2nd Year
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<!-- Action Buttons -->
		<div class="card">
			<div class="card-body space-y-6">
				<p class="text-sm text-gray-600">I hereby affirm that all information supplied herein is complete and accurate. Withholding false information will make me ineligible for admission or subject to dismissal. If admitted, I agree to abide by the policies, rules and regulations of School Information Management System.</p>
				<div class="flex flex-wrap justify-between gap-4">
					<button @click="$router.back()" type="button" class="button button-secondary button-lg">Back</button>
					<NuxtLink href="/enrollment/payment-plan" class="button button-primary button-lg">Save and Continue</NuxtLink>
				</div>
			</div>
		</div>
	</form>
</template>

<style scoped></style>
