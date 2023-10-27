<script setup>
    definePageMeta({
        layout: "admin"
    })

    useSeoMeta({
		title: 'Cruz, Juan Dela - Fees',
	});
</script>

<template>
    <div class="container">
		<div class="flex flex-col mb-6">
			<div class="flex items-center overflow-x-auto whitespace-nowrap">
				<NuxtLink to="/admin/registrar/officially-enrolled" class="inline-flex items-center gap-2 -ms-1 text-gray-600 dark:text-gray-200 hover:text-blue-600">
                    <IconsChevronLeft />

					Officially Enrolled
				</NuxtLink>
			</div>
			<h4 class="text-xl lg:text-2xl font-medium text-gray-700 mt-1 dark:text-gray-300">Cruz, Juan Dela - Fees</h4>
		</div>

		<div class="space-y-6">
			<StudentProfileCard />

            <div class="flex items-center justify-between gap-1">
                <div class="button-group">
                    <button class="button-group-link">
                        Payment Records
                    </button>

                    <button class="button-group-link">
                        Pending Checks
                    </button>

                    <button class="button-group-link">
                        Declined Checks
                    </button>
                </div>

                <div class="flex items-center gap-1">
                    <div class="relative" data-te-dropdown-ref>
                        <button type="button" class="button button-secondary" id="dropdownAdd" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
                           <IconsAddReceipt class="w-5 h-5" />
                           Add
                           <IconsChevronDown class="w-4 h-4" />
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownAdd" data-te-dropdown-menu-ref>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Tuition Payment
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    O.T.C Payment
                                </a>
                            </li>
                            <hr class="dropdown-divider" />
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Other Fees
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Old Accounts
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="relative" data-te-dropdown-ref>
                        <button type="button" class="button button-secondary" id="dropdownAdd" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false">
                           <IconsPrint class="w-5 h-5" />
                           Reports
                           <IconsChevronDown class="w-4 h-4" />
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownAdd" data-te-dropdown-menu-ref>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Statement of Account
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Print SOA
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Print Certification of Fees
                                </a>
                            </li>
                            <hr class="dropdown-divider" />
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Student Ledger
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Print Ledger
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                   Download (XLS)
                                </a>
                            </li>
                            <hr class="dropdown-divider" />
                            <li>
                                <a class="dropdown-link" href="#" data-te-dropdown-item-ref>
                                    Print Exam Permit
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div class="col-span-12 md:col-span-8 space-y-6">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto">
                            <div class="inline-block min-w-full align-middle space-y-6">
                                <div class="table-responsive">
                                    <table class="table">
                                        <caption class="table-caption">
                                            Account Summary
                                        </caption>
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col" class="table-header">
                                                    Fee
                                                </th>

                                                <th scope="col" class="table-header w-32 dark:bg-gray-950">
                                                    Amount
                                                </th>

                                                <th scope="col" class="table-header w-32 bg-success-50 dark:bg-success-950">
                                                    Paid
                                                </th>

                                                <th scope="col" class="table-header w-32 bg-warning-50 dark:bg-warning-950">
                                                    Balance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td class="table-data">
                                                    Total Tuition Fees 
                                                </td>
                                                <td class="table-data bg-gray-50 dark:bg-gray-950">
                                                    12,321.10	
                                                </td>
                                                <td class="table-data bg-success-50 dark:bg-success-950">
                                                    5,000.00	
                                                </td>
                                                <td class="table-data bg-warning-50 dark:bg-warning-950">
                                                    7,321.10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-data">
                                                    Over the Counter Fee 
                                                </td>
                                                <td class="table-data bg-gray-50 dark:bg-gray-950">
                                                    0.00
                                                </td>
                                                <td class="table-data bg-success-50 dark:bg-success-950">
                                                    0.00
                                                </td>
                                                <td class="table-data bg-warning-50 dark:bg-warning-950">
                                                    0.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-data">
                                                    Special Subject Fee
                                                </td>
                                                <td class="table-data bg-gray-50 dark:bg-gray-950">
                                                    0.00
                                                </td>
                                                <td class="table-data bg-success-50 dark:bg-success-950">
                                                    0.00
                                                </td>
                                                <td class="table-data bg-warning-50 dark:bg-warning-950">
                                                    0.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-data text-gray-600 font-bold">
                                                    Total Payables
                                                </td>
                                                <td class="table-data bg-gray-50 dark:bg-gray-950">
                                                    <span class="text-lg text-gray-600 font-semibold dark:text-gray-300">₱12,321.10</span>
                                                </td>
                                                <td class="table-data bg-success-50 dark:bg-success-950">
                                                    <span class="text-lg text-gray-600 font-semibold dark:text-success-300">₱5,000.00</span>
                                                </td>
                                                <td class="table-data bg-warning-50 dark:bg-warning-950">
                                                    <span class="text-lg text-gray-600 font-semibold dark:text-warning-300">₱3,694.10</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="table-responsive">
                                    <table class="table">
                                        <caption class="table-caption">
                                            Tuition Fee
                                        </caption>
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col" class="table-header">
                                                    Description
                                                </th>

                                                <th scope="col" class="table-header text-center w-12">
                                                    Lec
                                                </th>

                                                <th scope="col" class="table-header text-center w-12">
                                                    Lab
                                                </th>

                                                <th scope="col" class="table-header text-center w-12">
                                                    Units
                                                </th>

                                                <th scope="col" class="table-header w-24">
                                                    x Tuition
                                                </th>

                                                <th scope="col" class="table-header w-32">
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td class="table-data">
                                                    <div class="flex flex-col gap-1">
                                                        Problem Solving
                                                        <span class="text-xs text-gray-500">Math 104 (SP18)</span>
                                                    </div>
                                                </td>
                                                <td class="table-data text-center">
                                                    3
                                                </td>
                                                <td class="table-data text-center">
                                                    0
                                                </td>
                                                <td class="table-data text-center">
                                                    3
                                                </td>
                                                <td class="table-data">
                                                    x 558.00
                                                </td>
                                                <td class="table-data">
                                                    1,674.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-data text-gray-600 font-bold text-end" colspan="5">
                                                    Total
                                                </td>
                                                <td class="table-data font-bold" colspan="6">
                                                    <span class="text-lg text-gray-600 font-semibold dark:text-gray-300">₱7,254.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="table-responsive">
                                    <table class="table">
                                        <caption class="table-caption">
                                            Miscellaneous Fee
                                        </caption>
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col" class="table-header">
                                                    Description
                                                </th>
                                                <th scope="col" class="table-header w-32">
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td class="table-data">
                                                    Athletic Fee (Col)
                                                </td>
                                                <td class="table-data">
                                                    110.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-data text-gray-600 font-bold text-end">
                                                    Total
                                                </td>
                                                <td class="table-data font-bold">
                                                    <span class="text-lg text-gray-600 font-semibold dark:text-gray-300">₱1,250.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="table-responsive">
                                    <table class="table">
                                        <caption class="table-caption">
                                            Other Fees
                                        </caption>
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col" class="table-header">
                                                    Description
                                                </th>
                                                <th scope="col" class="table-header w-32">
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td class="table-data">
                                                    Internet Fee
                                                </td>
                                                <td class="table-data">
                                                    385.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="table-data text-gray-600 font-bold text-end">
                                                    Total
                                                </td>
                                                <td class="table-data font-bold">
                                                    <span class="text-lg text-gray-600 font-semibold dark:text-gray-300">₱3,817.1</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 md:col-span-4 space-y-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="flex flex-col space-y-4">
                                <div class="inline-flex items-center justify-between">
                                    <h3 class="text-lg dark:text-gray-300 font-semibold leading-5 text-gray-700">Refund</h3>

                                    <button type="button" class="button button-secondary button-sm">
                                        Add
                                    </button>
                                </div>
                                
                                <div class="flex justify-center items-center w-full gap-3 flex-col border-gray-200 border-b pb-4 divide-y-2 divide-dashed divide-gray-100 dark:border-gray-700 dark:divide-gray-700">

                                    <div class="flex items-center justify-between gap-1 w-full pt-3">
                                        <div class="flex flex-col justify-between gap-1">
                                            <p class="text-sm dark:text-white leading-4 text-gray-800 line-clamp-2">
                                                #4359 - 10-27-2023
                                            </p>
                                            <p class="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                9,063.31
                                            </p>
                                        </div>
                                        <button type="button" class="inline-flex items-center p-2 text-danger-600 transition-colors duration-200 rounded-lg dark:text-danger-300 hover:bg-danger-100 dark:hover:bg-danger-950">
                                            <IconsDelete class="w-5 h-5" />
                                        </button>
                                    </div>

                                </div>
                                
                                <div class="flex justify-between items-center w-full pt-2">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">₱9,063.31</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex flex-col space-y-4">
                                <div class="inline-flex items-center justify-between">
                                    <h3 class="text-lg dark:text-gray-300 font-semibold leading-5 text-gray-700">O.T.C Fees</h3>

                                    <button type="button" class="button button-secondary button-sm">
                                        Add
                                    </button>
                                </div>
                                
                                <div class="flex justify-center items-center w-full gap-3 flex-col border-gray-200 border-b pb-4 divide-y-2 divide-dashed divide-gray-100 dark:border-gray-700 dark:divide-gray-700">

                                    <div class="flex items-center justify-between gap-1 w-full pt-3">
                                        <div class="flex flex-col justify-between gap-1">
                                            <p class="text-sm dark:text-white leading-4 text-gray-800 line-clamp-2">
                                                Computer Fee (3 Lab)
                                            </p>
                                            <p class="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                5,709.21
                                            </p>
                                        </div>
                                        <button type="button" class="inline-flex items-center p-2 text-danger-600 transition-colors duration-200 rounded-lg dark:text-danger-300 hover:bg-danger-100 dark:hover:bg-danger-950">
                                            <IconsDelete class="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div class="flex items-center justify-between gap-1 w-full pt-3">
                                        <div class="flex flex-col justify-between gap-1">
                                            <p class="text-sm dark:text-white leading-4 text-gray-800 line-clamp-2">
                                                Energy Fee (Half)
                                            </p>
                                            <p class="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                840.00
                                            </p>
                                        </div>
                                        <button type="button" class="inline-flex items-center p-2 text-danger-600 transition-colors duration-200 rounded-lg dark:text-danger-300 hover:bg-danger-100 dark:hover:bg-danger-950">
                                            <IconsDelete class="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div class="flex items-center justify-between gap-1 w-full pt-3">
                                        <div class="flex flex-col justify-between gap-1">
                                            <p class="text-sm dark:text-white leading-4 text-gray-800 line-clamp-2">
                                                Insurance
                                            </p>
                                            <p class="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                50.00
                                            </p>
                                        </div>
                                        <button type="button" class="inline-flex items-center p-2 text-danger-600 transition-colors duration-200 rounded-lg dark:text-danger-300 hover:bg-danger-100 dark:hover:bg-danger-950">
                                            <IconsDelete class="w-5 h-5" />
                                        </button>
                                    </div>

                                </div>
                                
                                <div class="flex justify-between items-center w-full pt-2">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">₱1,230.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex flex-col space-y-4">
                                <div class="inline-flex items-center justify-between">
                                    <h3 class="text-lg dark:text-gray-300 font-semibold leading-5 text-gray-700">Deductions</h3>

                                    <button type="button" class="button button-secondary button-sm">
                                        Add
                                    </button>
                                </div>
                                
                                <div class="flex justify-center items-center w-full gap-3 flex-col border-gray-200 border-b pb-4 divide-y-2 divide-dashed divide-gray-100 dark:border-gray-700 dark:divide-gray-700">

                                    <div class="flex items-center justify-between gap-1 w-full pt-3">
                                        <div class="flex flex-col justify-between gap-1">
                                            <p class="text-sm dark:text-white leading-4 text-gray-800 line-clamp-2">
                                                Computer Fee (3 Lab)
                                            </p>
                                            <p class="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                1,230.00
                                            </p>
                                        </div>
                                        <button type="button" class="inline-flex items-center p-2 text-danger-600 transition-colors duration-200 rounded-lg dark:text-danger-300 hover:bg-danger-100 dark:hover:bg-danger-950">
                                            <IconsDelete class="w-5 h-5" />
                                        </button>
                                    </div>

                                </div>
                                
                                <div class="flex justify-between items-center w-full pt-2">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">₱1,230.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex flex-col space-y-4">
                                <div class="inline-flex items-center justify-between">
                                    <h3 class="text-lg dark:text-gray-300 font-semibold leading-5 text-gray-700">Scholarships</h3>

                                    <button type="button" class="button button-secondary button-sm">
                                        Add
                                    </button>
                                </div>
                                
                                <div class="flex justify-center items-center w-full gap-3 flex-col border-gray-200 border-b pb-4 divide-y-2 divide-dashed divide-gray-100 dark:border-gray-700 dark:divide-gray-700">

                                    <div class="flex items-center justify-between gap-1 w-full pt-3">
                                        <div class="flex flex-col justify-between gap-1">
                                            <p class="text-sm dark:text-white leading-4 text-gray-800 line-clamp-2">
                                                Scholar Ship Percentage - By : Adab,Ciceila Ocnoog
                                            </p>
                                            <p class="text-sm dark:text-gray-300 leading-4 text-gray-600">
                                                3,627.00
                                            </p>
                                        </div>
                                        <button type="button" class="inline-flex items-center p-2 text-danger-600 transition-colors duration-200 rounded-lg dark:text-danger-300 hover:bg-danger-100 dark:hover:bg-danger-950">
                                            <IconsDelete class="w-5 h-5" />
                                        </button>
                                    </div>

                                </div>
                                
                                <div class="flex justify-between items-center w-full pt-2">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">₱3,627.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>