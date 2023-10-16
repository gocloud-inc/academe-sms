import { Dropdown, Modal, Offcanvas, PerfectScrollbar, Select, ScrollSpy, initTE } from "tw-elements";

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== "undefined") {
        nuxtApp.initTE = initTE({ Dropdown, Modal, Offcanvas, PerfectScrollbar, Select, ScrollSpy });
    }
})
