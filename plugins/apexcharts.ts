import VueApexCharts from "vue3-apexcharts";

export default defineNuxtPlugin((nuxtApp) => {
    if (window) {
        nuxtApp.vueApp.use(VueApexCharts);
    }
});