<script setup>
	import { Modal, initTE } from "tw-elements";

	definePageMeta({
		layout: "enrollment",
		colorMode: "light"
	})

	useSeoMeta({
		title: 'Payment Plan - Enrollment',
	})

	onMounted(() => {
		initTE({ Modal });
	})
</script>

<template>
  	<form class="space-y-6 pb-6" action="">
		<div class="table-responsive">
			<table class="table">
				<caption class="table-caption">
					Summary of Assessment
				</caption>
				<thead class="table-head">
					<tr>
						<th scope="col" class="table-header">
							Name
						</th>

						<th scope="col" class="table-header">
						Program
						</th>

						<th scope="col" class="table-header">
							Ref #
						</th>

						<th scope="col" class="table-header">
							Year Level
						</th>

						<th scope="col" class="table-header">
							Status
						</th>
					</tr>
				</thead>
				<tbody class="table-body">
					<tr>
						<td class="table-data">
							Juan Dela Cruz
						</td>

						<td class="table-data">
							Bachelor of Science in Computer Science (BSCS)
						</td>

						<td class="table-data">
							7778
						</td>

						<td class="table-data">
							1st Year
						</td>

						<td class="table-data">
							<span class="badge badge-success">New</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="table-responsive">
			<table class="table">
				<caption class="table-caption">
					Summary of Assessment
				</caption>
				<thead class="table-head">
					<tr>
						<th scope="col" class="table-header">
							Total Number of Course/Schedule
						</th>

						<th scope="col" class="table-header">
							Total Number of Units
						</th>

						<th scope="col" class="table-header">
							Total Amount
						</th>
					</tr>
				</thead>
				<tbody class="table-body">
					<tr>
						<td class="table-data">
							1
						</td>

						<td class="table-data">
							6
						</td>

						<td class="table-data">
							6 141.10
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="flex flex-col items-center gap-6 justify-center space-y-6 md:items-end md:space-y-0 md:flex-row">
			<div class="w-full px-6 py-6 transition-colors duration-300 transform rounded-lg bg-white shadow-sm border dark:bg-gray-800">
				<p class="text-lg font-medium text-gray-800 dark:text-gray-100">Full Payment</p>
				<h4 class="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">₱6,141.10</h4>
				<p class="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

				<div class="mt-8 space-y-8">
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Downpayment</span>
					</div>
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Prelims</span>
					</div>
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Midterms</span>
					</div>
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Finals</span>
					</div>
				</div>

				<button type="button" class="button button-primary button-lg w-full mt-6" data-te-toggle="modal" data-te-target="#fullPaymentModal">
					Choose Full Payment
				</button>
			</div>
			
			<div class="w-full px-6 py-6 transition-colors duration-300 transform rounded-lg bg-white shadow-sm border dark:bg-gray-800">
				<p class="text-lg font-medium text-gray-800 dark:text-gray-100">Installment</p>
				<h4 class="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">₱6,141.10</h4>
				<p class="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p>

				<div class="mt-8 space-y-8">
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Downpayment</span>
					</div>
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Prelims</span>
					</div>
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Midterms</span>
					</div>
					<div class="flex items-center">
						<svg class="text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"/></svg>

						<span class="mx-4 text-gray-700 dark:text-gray-300">Finals</span>
					</div>
				</div>

				<button type="button" class="button button-primary button-lg w-full mt-6" data-te-toggle="modal" data-te-target="#installmentModal">
					Choose Installment
				</button>
			</div>
		</div>
	</form>

	<div data-te-modal-init class="modal" id="fullPaymentModal" tabindex="-1" aria-labelledby="fullPaymentModalTitle" aria-modal="true" role="dialog">
		<div data-te-modal-dialog-ref class="modal-container">
			<div class="modal-body">
				<h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
					Full Payment
				</h3>

				<form class="space-y-6 mt-6" action="" method="POST">
					<div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
						<dl class="-my-3 divide-y divide-gray-100 text-sm">
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Name</dt>
								<dd class="text-gray-700 sm:col-span-2">Juan Dela Cruz</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Program</dt>
								<dd class="text-gray-700 sm:col-span-2">Bachelor of Science in Computer Science (BSCS)</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Reference Number</dt>
								<dd class="text-gray-700 sm:col-span-2">7778</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Year Level</dt>
								<dd class="text-gray-700 sm:col-span-2">1st Year</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Payment Plan</dt>
								<dd class="text-gray-700 sm:col-span-2">Full Payment</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Status</dt>
								<dd class="badge badge-success w-fit text-gray-700 sm:col-span-2">New</dd>
							</div>
						</dl>
					</div>


					<p class="text-sm text-gray-600">I hereby affirm that all information supplied herein is complete and accurate. Withholding false information will make me ineligible for admission or subject to dismissal. If admitted, I agree to abide by the policies, rules and regulations of School Information Management System.</p>

					<div class="mt-4 sm:flex sm:items-center justify-end sm:-mx-2 gap-2">
						<button type="button" class="button button-secondary" data-te-modal-dismiss>
							Maybe later
						</button>

						<button type="submit" class="button button-primary">
							Save and finish
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div data-te-modal-init class="modal" id="installmentModal" tabindex="-1" aria-labelledby="installmentModalTitle" aria-modal="true" role="dialog">
		<div data-te-modal-dialog-ref class="modal-container">
			<div class="modal-body">
				<h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
					Installment
				</h3>

				<form class="space-y-6 mt-6" action="" method="POST">
					<div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
						<dl class="-my-3 divide-y divide-gray-100 text-sm">
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Name</dt>
								<dd class="text-gray-700 sm:col-span-2">Juan Dela Cruz</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Program</dt>
								<dd class="text-gray-700 sm:col-span-2">Bachelor of Science in Computer Science (BSCS)</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Reference Number</dt>
								<dd class="text-gray-700 sm:col-span-2">7778</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Year Level</dt>
								<dd class="text-gray-700 sm:col-span-2">1st Year</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Payment Plan</dt>
								<dd class="text-gray-700 sm:col-span-2">Installment</dd>
							</div>
							<div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
								<dt class="font-medium text-gray-900">Status</dt>
								<dd class="badge badge-success w-fit text-gray-700 sm:col-span-2">New</dd>
							</div>
						</dl>
					</div>


					<p class="text-sm text-gray-600">I hereby affirm that all information supplied herein is complete and accurate. Withholding false information will make me ineligible for admission or subject to dismissal. If admitted, I agree to abide by the policies, rules and regulations of School Information Management System.</p>

					<div class="mt-4 sm:flex sm:items-center justify-end sm:-mx-2 gap-2">
						<button type="button" class="button button-secondary" data-te-modal-dismiss>
							Maybe later
						</button>

						<button type="submit" class="button button-primary">
							Save and finish
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
