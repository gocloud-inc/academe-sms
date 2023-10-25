<script setup>
	definePageMeta({
		layout: "auth",
		colorMode: "light"
	})

	useSeoMeta({
		title: 'Login',
	})

	onMounted(() => {
		const passwordEls = Array.from(document.querySelectorAll('.password'));
		const passwordBtns = Array.from(document.querySelectorAll('.password-btn'));
		const passwordIcons = Array.from(document.querySelectorAll('.password-icon'));
		
		passwordBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				const isPasswordVisible = passwordEls[0].type === 'text';
		
				passwordEls.forEach(passwordEl => {
					passwordEl.type = isPasswordVisible ? 'password' : 'text';
				});
		
				passwordIcons.forEach(icon => {
					icon.textContent = isPasswordVisible ? 'Show' : 'Hide';
				});
			});
		});
	})
	
	const user = ref({
		email: 'mpcaneda.gca@gmail.com',
		password: 'asdasdad',
	})

	const login = async () => {
		navigateTo('/admin/dashboard')
	}
</script>

<template>
	<div class="w-full max-w-md">
		<div>
            <div class="text-start">
                <img class="w-auto h-12" src="/logo.png" alt="">
                <h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Academe 2.0 School Management System</h2>
                <p class="mt-3 text-gray-500 dark:text-gray-300">To begin this journey, tell us what type of account you'd be opening.</p>

                <div class="mt-4 max-w-md flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-800">
                    <div class="bg-gray-100 rounded-xl p-2 w-12 h-12 text-lg uppercase text-gray-400 font-semibold flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.22 3a1.75 1.75 0 0 0-1.347.633l-3.58 4.32C.616 8.766 1.195 10 2.253 10h19.492c1.059 0 1.638-1.233.963-2.048l-3.581-4.319A1.75 1.75 0 0 0 17.78 3H6.22ZM3 11.5v7.25a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5V11.5H3Zm6 3.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm3 1.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm5.5-1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"/></svg>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-sm text-gray-500">School</div>
                        <div class="text-base text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100">La Verdad Christian College</div>
                    </div>
                </div>
            </div>

            <h3 class="mb-3 mt-6 text-lg font-semibold text-gray-500 capitalize dark:text-white">Workspaces</h3>
    
            <div class="space-y-4">
                <NuxtLink to="/auth/login" class="card group hover:bg-primary-50 hover:border-primary-500">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <svg class="text-gray-400 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 3.5A1.75 1.75 0 0 0 4.5 5.25v2.5c0 .966.784 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75v-2.5A1.75 1.75 0 0 0 8.75 3.5h-2.5Zm7.25 1.75v2.5c0 .966.784 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75v-2.5a1.75 1.75 0 0 0-1.75-1.75h-2.5a1.75 1.75 0 0 0-1.75 1.75ZM15.25 5h2.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25ZM6.5 11.5a4.5 4.5 0 1 0 0 9h5.232a6.472 6.472 0 0 1-.721-3.373a1.5 1.5 0 0 1 .708-2.601a6.525 6.525 0 0 1 3.277-3.026H6.5Zm.5 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm16 0a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Zm-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708Z"/></svg>
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">Login</div>
                                <p class="text-sm text-gray-500">Admin, student, and academic staff access.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <a href="/" class="card group hover:bg-primary-50 hover:border-primary-500 hidden">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <svg class="text-gray-400 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.088 6.412a2.844 2.844 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.839 2.839 0 0 0 16.5 1.774l.011-.034l.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.835 2.835 0 0 0 1.799 1.796l1.377.448l.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.839 2.839 0 0 0-1.798 1.796l-.448 1.377a.544.544 0 0 1-1.026 0l-.448-1.377a2.837 2.837 0 0 0-.45-.848Zm7.695 3.801l-.766-.248a1.577 1.577 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.576 1.576 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.578 1.578 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.576 1.576 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57l-.015-.004ZM9.909 3.7a3.874 3.874 0 0 1 2.818-.544a1.65 1.65 0 0 0-.447.413a1.57 1.57 0 0 0 0 1.79c.165.285.418.51.72.64l1.4.46c.27.091.516.242.72.44l.18.1c.126.166.224.352.29.55l.41 1.45c.106.31.305.579.57.77c.261.181.572.279.89.28c.236.003.47-.052.68-.16a1.28 1.28 0 0 0-.18.66c-.002.27.082.532.24.75c.155.221.376.389.63.48l.54.171l-5.25 3.431a3.875 3.875 0 0 1-4.24 0L3 10.886v5.364a.75.75 0 0 1-1.5 0V10c0-.088.015-.172.043-.25a.75.75 0 0 1 .302-.881l8.064-5.17ZM5 17.75v-3.766l4.06 2.653a5.375 5.375 0 0 0 5.88 0L19 13.984v3.766a.75.75 0 0 1-.15.45l-.001.001l-.001.002l-.003.004l-.009.01l-.012.016l-.013.017l-.086.101a5.325 5.325 0 0 1-.317.33c-.277.267-.69.614-1.25.958C16.037 20.329 14.339 21 12 21c-2.339 0-4.036-.67-5.159-1.361a7.433 7.433 0 0 1-1.25-.957a5.313 5.313 0 0 1-.427-.464l-.009-.01l-.003-.005v-.002A.755.755 0 0 1 5 17.75Z"/></svg>
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">Student Portal</div>
                                <p class="text-sm text-gray-500">Student information, fees, schedules, and grades.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                            </div>
                        </div>
                    </div>
                </a>

                <NuxtLink to="/admission/applicant-type" class="card group hover:bg-primary-50 hover:border-primary-500">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <svg class="text-gray-400 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.08 6.63c-.07-.1-.15-.19-.23-.27h-.01a2.85 2.85 0 0 0-1.11-.69l-1.38-.45c-.1-.04-.2-.11-.26-.2a.5.5 0 0 1-.1-.31a.5.5 0 0 1 .1-.31c.06-.09.15-.16.26-.2l1.38-.45c.42-.14.79-.38 1.1-.69c.29-.3.52-.67.67-1.07v-.03l.45-1.38c.04-.1.11-.2.2-.26a.5.5 0 0 1 .31-.1c.11 0 .22.04.31.1c.09.06.16.15.2.26l.45 1.38c.14.42.38.8.69 1.11c.31.32.69.55 1.11.69l1.38.45h.03c.1.04.19.11.26.2c.07.09.1.2.1.31a.5.5 0 0 1-.1.31c-.06.09-.15.16-.26.2l-1.38.45c-.42.14-.8.38-1.11.69c-.32.31-.55.69-.69 1.11l-.46 1.38v.03c-.04.09-.11.17-.19.23a.5.5 0 0 1-.31.1a.5.5 0 0 1-.31-.1a.524.524 0 0 1-.2-.26l-.45-1.38c-.1-.31-.25-.6-.45-.85Zm7.7 3.8l-.77-.24c-.24-.08-.45-.21-.62-.38c-.17-.18-.3-.39-.38-.62l-.25-.76a.327.327 0 0 0-.11-.15a.272.272 0 0 0-.34 0c-.05.04-.09.09-.11.15l-.25.76c-.07.23-.2.44-.37.61c-.17.17-.38.3-.61.38l-.77.25c-.06.02-.11.06-.15.11a.272.272 0 0 0 0 .34c.04.05.09.09.15.11l.77.25c.23.07.45.21.62.38c.17.17.3.39.38.62l.25.76c.02.06.06.11.11.15a.272.272 0 0 0 .34 0c.05-.04.09-.09.11-.15l.25-.76c.08-.24.21-.45.38-.62c.18-.17.39-.3.62-.38l.77-.25c.06-.02.11-.06.15-.11c.04-.05.05-.11.05-.17c0-.06-.01-.12-.05-.17c-.04-.05-.106-.08-.17-.11Zm-4.24 2.28l.26.8c.05.14.12.25.2.37v6.08c0 1.24-1.01 2.25-2.25 2.25H6.25C5.01 22.21 4 21.2 4 19.96V4.46c0-1.24 1.01-2.25 2.25-2.25h8.26c-.07.04-.15.08-.22.11l-1.42.46c-.4.15-.75.4-.99.75a2 2 0 0 0-.38 1.18c0 .43.13.84.37 1.18c.078.112.178.202.275.289l.045.041H7.75c-.41 0-.75.34-.75.75s.34.75.75.75h7.24l.035.058a.96.96 0 0 1 .085.162l.46 1.41c.14.4.4.74.75.99c.35.24.76.37 1.18.37c0 .37.11.73.33 1.04c.22.31.52.53.91.67l.8.29Zm-11.79 5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75Zm0-5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75Z"/></svg>
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">Admission</div>
                                <p class="text-sm text-gray-500">Student online application for enrollment.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <NuxtLink to="/enrollment" class="card group hover:bg-primary-50 hover:border-primary-500">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <svg class="text-gray-400 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m18.5 6.75l-.003-2.123A2.25 2.25 0 0 1 20 6.75v7.5a3.24 3.24 0 0 0-1.25-.25h-.25V6.75ZM4 4.25v3A3.24 3.24 0 0 1 5.25 7h2.846a3.25 3.25 0 0 1 2.381 1.039L16.014 14H17.5V4.25A2.25 2.25 0 0 0 15.25 2h-9A2.25 2.25 0 0 0 4 4.25ZM5.25 8A2.25 2.25 0 0 0 3 10.25v8.5A3.25 3.25 0 0 0 6.25 22h11.5A3.25 3.25 0 0 0 21 18.75v-1.5A2.25 2.25 0 0 0 18.75 15h-2.846a.75.75 0 0 1-.55-.24l-5.61-6.04A2.25 2.25 0 0 0 8.097 8H5.25Z"/></svg>
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">Enrollment</div>
                                <p class="text-sm text-gray-500">Students enrolled in the previous school year.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <a href="/" class="card group hover:bg-primary-50 hover:border-primary-500 hidden">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <svg class="text-gray-400 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.49 17.865L16.356 14H6.253a2.249 2.249 0 0 0-2.25 2.25v.919c0 .572.18 1.13.511 1.596c1.388 1.947 3.57 3.01 6.486 3.204c-.004-.183.016-.37.064-.561l.457-1.83c.162-.649.497-1.24.97-1.713ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm7.1 10.665l-5.903 5.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67Z"/></svg>
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">New Student Enrollment</div>
                                <p class="text-sm text-gray-500">Enrollment portal for new students only.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="/" class="card group hover:bg-primary-50 hover:border-primary-500 hidden">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <svg class="text-gray-400 group-hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17.5a6.47 6.47 0 0 1 1.022-3.5h-7.77a2.249 2.249 0 0 0-2.248 2.25v.919c0 .572.178 1.13.51 1.596C4.056 20.929 6.58 22 10 22c.931 0 1.796-.08 2.593-.238A6.475 6.475 0 0 1 11 17.5ZM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10ZM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Zm-4.646-2.853a.5.5 0 0 0-.707.707L19.293 17H15a.5.5 0 1 0 0 1h4.293l-1.646 1.647a.5.5 0 0 0 .707.707l2.5-2.5a.497.497 0 0 0 .146-.345V17.5a.498.498 0 0 0-.15-.357l-2.496-2.496Z"/></svg>
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">Continuing Student</div>
                                <p class="text-sm text-gray-500">Enrollment for students enrolled in the previous school year.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
		</div>

		<div class="flex flex-col items-center justify-center gap-1 mt-6">
			<img class="w-24" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
			<div class="text-sm text-gray-500">&copy; 2023 Gocloud Inc. All Rights Reserved.</div>
		</div>
	</div>
</template>

<style scoped></style>
