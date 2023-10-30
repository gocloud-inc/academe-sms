<script lang="ts" setup>
    import { faker } from '@faker-js/faker';

    const options = ref({
        chart: {
            sparkline: {
                enabled: false,
            },
            type: "bar",
            toolbar: {
                show: false,
            }
        },
        fill: {
            opacity: 1,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: "100%",
                borderRadiusApplication: "end",
                borderRadius: 6,
                dataLabels: {
                    position: "top",
                },
            },
        },
        legend: {
            show: true,
            position: "bottom",
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            shadanger: true,
            intersect: false,
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
            },
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            }
        },
        grid: {
            show: true,
            strokeDashArray: 4,
        },
        fill: {
            opacity: 1,
        }
    });

    const fakeCollections = Array.from({ length: 12 }, () =>
        faker.finance.amount(1000, 10000, true)
    );

    const fakeReceivables = Array.from({ length: 12 }, () =>
        faker.finance.amount(1000, 10000, true)
    );

	const series = ref([
        {
            name: "Collections",
            color: "#31C48D",
            data: fakeCollections,
        },
        {
            name: "Receivables",
            color: "#F05252",
            data: fakeReceivables,
        }
	]);
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
                <dl>
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Total Collection</dt>
                    <dd class="leading-none text-3xl font-bold text-gray-900 dark:text-white">₱5,405</dd>
                </dl>
                <div>
                    <span class="bg-success-100 text-success-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-success-900 dark:text-success-300">
                        <svg class="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                        </svg>
                        Profit rate 23.5%
                    </span>
                </div>
            </div>
        
            <div class="grid grid-cols-2 py-3">
                <dl>
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Collections</dt>
                    <dd class="leading-none text-xl font-bold text-success-500 dark:text-success-400">₱23,635</dd>
                </dl>
                <dl>
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Receivable</dt>
                    <dd class="leading-none text-xl font-bold text-danger-600 dark:text-danger-500">₱18,230</dd>
                </dl>
            </div>
        
            <apexchart
                :key="series"
                height="500"
                width="100%"
                :options="options"
                :series="series"
            />
        </div>
    </div>
</template>