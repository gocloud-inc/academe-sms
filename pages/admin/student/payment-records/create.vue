<script setup>
    definePageMeta({
        layout: "admin"
    })

    useSeoMeta({
		title: 'Cruz, Juan Dela - Add Payment Record',
	});
</script>

<template>
    <div class="container">
		<div class="flex flex-col mb-6">
			<div class="flex items-center overflow-x-auto whitespace-nowrap">
				<NuxtLink to="/admin/student/fees" class="inline-flex items-center gap-2 -ms-1 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                    <IconsChevronLeft />

					Back
				</NuxtLink>
			</div>
			<h4 class="text-xl lg:text-2xl font-medium text-gray-700 mt-1 dark:text-gray-300">Cruz, Juan Dela - Add Payment Record</h4>
		</div>

		<div class="space-y-6">
			<StudentProfileCard />

            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div class="col-span-12 md:col-span-4 space-y-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Payment Record Form</h5>

                            <form action="" class="space-y-4">
                                <div class="form-group">
                                    <label for="amount" class="form-label">Amount</label>
                                    <input id="amount" type="text" class="form-control" placeholder="0.00" required>
                                </div>
                                <div class="form-group">
                                    <label for="or_number" class="form-label">OR Number</label>
                                    <div class="relative flex items-center justify-between">
                                        <input id="or_number" type="text" placeholder="Number" class="form-control-icon-end" />

                                        <span class="absolute right-0 m-1">
                                           <button type="button" class="button button-secondary button-sm">Generate</button>
                                        </span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="date" class="form-label">Date Of Payment</label>
                                    <input id="date" type="date" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label for="remarks" class="form-label">Remarks</label>
                                   <textarea id="remarks" class="form-control" cols="30" rows="3"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="payment_type" class="form-label">Type of Payment</label>
                                    <select id="payment_type" class="form-control" required>
                                        <option value="Cash">Cash</option>
                                        <option value="Check / Cheque">Check / Cheque</option>
                                        <option value="Bank Transfer / Deposit">Bank Transfer / Deposit</option>
                                    </select>
                                </div>

                                <button type="submit" class="button button-primary">Save Record</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-8 space-y-6">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto">
                            <div class="inline-block min-w-full align-middle space-y-6">
                                <div class="table-responsive">
                                    <table class="table">
                                        <caption class="table-caption">
                                            Payment Records
                                        </caption>
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col" class="table-header">
                                                    O.R
                                                </th>

                                                <th scope="col" class="table-header">
                                                    Date
                                                </th>

                                                <th scope="col" class="table-header">
                                                    Type
                                                </th>

                                                <th scope="col" class="table-header w-32">
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td class="table-data">
                                                    334664
                                                </td>
                                                <td class="table-data">
                                                    10-27-2023
                                                </td>
                                                <td class="table-data">
                                                    Bank Transfer/Deposit
                                                </td>
                                                <td class="table-data">
                                                    ₱5,000.00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="table-responsive">
                                    <table class="table">
                                        <caption class="table-caption">
                                            Tuition Payment Plan (Full Payment)
                                        </caption>
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col" class="table-header">
                                                    Type
                                                </th>

                                                <th scope="col" class="table-header">
                                                    Amortization
                                                </th>

                                                <th scope="col" class="table-header">
                                                    Applied
                                                </th>

                                                <th scope="col" class="table-header">
                                                    Penalty
                                                </th>

                                                <th scope="col" class="table-header w-32 bg-danger-50 dark:bg-danger-950">
                                                    Balance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td class="table-data">
                                                    Downpayment
                                                </td>
                                                <td class="table-data">
                                                    7,464.1	
                                                </td>
                                                <td class="table-data">
                                                    5,246.41	
                                                </td>
                                                <td class="table-data">
                                                    -
                                                </td>
                                                <td class="table-data bg-danger-50 dark:bg-danger-950">
                                                    2,217.69
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>