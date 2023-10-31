<script setup>
	definePageMeta({
		layout: "auth",
		colorMode: "light"
	})

	useSeoMeta({
		title: 'Academe 2.0 School Management System',
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
		<div class="px-2 md:px-0">
            <div class="text-start">
                <img class="w-auto h-12" src="/logo.png" alt="">
                <h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Academe 2.0 School Management System</h2>
                <p class="mt-3 text-gray-500 dark:text-gray-300">To begin this journey, tell us what type of account you'd be opening.</p>

                <div class="mt-4 max-w-md flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-800">
                    <div class="bg-gray-100 rounded-xl p-2 w-12 h-12 text-lg uppercase text-gray-400 font-semibold flex items-center justify-center">
                        <Icon name="fluent:building-retail-more-24-filled" size="32" />
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
                                <Icon name="fluent:arrow-circle-right-24-filled" size="32" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <NuxtLink to="/admission/applicant-type" class="card group hover:bg-primary-50 hover:border-primary-500">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <Icon name="fluent:document-one-page-sparkle-24-filled" size="32" class="text-gray-400 group-hover:text-primary" />
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">Admission</div>
                                <p class="text-sm text-gray-500">Student online application for enrollment.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <Icon name="fluent:arrow-circle-right-24-filled" size="32" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <NuxtLink to="/enrollment" class="card group hover:bg-primary-50 hover:border-primary-500">
                    <div class="card-body">
                        <div class="flex gap-3 relative">
                            <Icon name="fluent:document-folder-24-filled" size="32" class="text-gray-400 group-hover:text-primary" />
  
                            <div class="flex flex-col">
                                <div class="text-lg text-gray-700 font-semibold capitalize">Enrollment</div>
                                <p class="text-sm text-gray-500">Students enrolled in the previous school year.</p>
                            </div>
                            <div class="hidden absolute right-0 top-2 text-primary group-hover:inline-flex">
                                <Icon name="fluent:arrow-circle-right-24-filled" size="32" />
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
		</div>

		<div class="flex flex-col items-center justify-center gap-1 mt-6">
			<img class="w-24" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
			<div class="text-sm text-gray-500">&copy; 2023 Gocloud Inc. All Rights Reserved.</div>
		</div>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6">
            <NuxtLink to="/bulletin" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Bulletin
            </NuxtLink>
            
            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Careers
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Terms
            </a>

            <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                Privacy
            </a>
        </div>
	</div>
</template>

<style scoped></style>
