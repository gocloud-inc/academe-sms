<script lang="ts" setup>
    import { faker } from '@faker-js/faker';

    const options = ref({
        chart: {
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },    
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0
            },
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
            },
            categories: ["2023-2024 (1st)", "2023-2024 (2nd)"],
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
    });

    const fakeEnrollees = Array.from({ length: 2 }, () =>
        faker.number.int(1000)
    );

	const series = ref([
        {
            name: "Population",
            color: "#31C48D",
            data: fakeEnrollees,
        },
	]);
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="flex justify-between">
                <dl>
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Enrollment Count</dt>
                    <dd class="leading-none text-3xl font-bold text-gray-900 dark:text-white">357</dd>
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