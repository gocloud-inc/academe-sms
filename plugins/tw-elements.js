import { Dropdown, Modal, PerfectScrollbar, Select, initTE } from "tw-elements";

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.initTE = initTE({ Dropdown, Modal, PerfectScrollbar, Select });
    }
})
