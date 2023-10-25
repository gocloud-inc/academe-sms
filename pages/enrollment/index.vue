<script setup>
	definePageMeta({
		layout: "auth",
		colorMode: "light"
	})

	useSeoMeta({
		title: 'Enrollment Portal',
	})

	const router = useRouter()

	const program = async () => {
		navigateTo('/enrollment/program')
	}
</script>

<template>
	<div class="w-full max-w-md">
		<div class="card">
			<div class="card-body">
				<div class="text-start">
					<img class="w-auto h-8 sm:h-12" src="/logo.png" alt="">
					<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Enrollment Portal</h2>
					<p class="mt-3 text-gray-500 dark:text-gray-300">Enrollment for students enrolled in the previous school year.</p>
				</div>
		
				<div class="mt-8">
					<form @submit.prevent="program" class="space-y-6">
						<div class="form-group">
                            <label for="first_name" class="form-label">First Name</label>
                            <input type="text" id="first_name" name="first_name" class="form-control form-control-lg" placeholder="Enter your first name" autocomplete="name" required>
                        </div>
        
                        <div class="form-group">
                            <label for="last_name" class="form-label">Last Name</label>
                            <input type="text" id="last_name" name="last_name" class="form-control form-control-lg" placeholder="Enter your last name" autocomplete="name" required>
                        </div>

                        <div class="form-group">
                            <label for="birthdate" class="form-label">Birthdate</label>
                            <input type="date" id="birthdate" name="birthdate" class="form-control form-control-lg" autocomplete="birthday" required>
                        </div>

                        <div class="form-group">
                            <label for="student_id" class="form-label">Student ID</label>
                            <input type="text" id="student_id" name="student_id" class="form-control form-control-lg" placeholder="Enter your student id" required>
                        </div>
					   
						<div class="flex justify-between">
							<button @click="$router.back()" type="button" class="button button-secondary button-lg">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58a.754.754 0 0 0 .001.289a.995.995 0 0 0 .3.579l7.419 7.067Z"/></svg>
								Back
							</button>
							<button type="submit" class="button button-primary button-lg">
								Continue
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.267 4.209a.75.75 0 0 0-1.034 1.086l6.251 5.955H3.75a.75.75 0 0 0 0 1.5h14.734l-6.251 5.954a.75.75 0 0 0 1.034 1.087l7.42-7.067a.996.996 0 0 0 .3-.58a.758.758 0 0 0-.001-.29a.995.995 0 0 0-.3-.578l-7.419-7.067Z"/></svg>
							</button>
						</div>
                    </form>
					<p class="mt-6 text-sm text-gray-600 dark:text-gray-400">
						By clicking “Login” above, you acknowledge that you have read, understood, and agreed to Academe's <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white">Term & Conditions</a> and <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white"> Privacy Policy.</a>
					</p>
				</div>
			</div>
		</div>

		<div class="flex justify-between mt-2">
			<div class="text-sm uppercase text-gray-500">S.Y 2023-2024</div>
			<div class="text-sm text-gray-500">1st Semester</div>
		</div>

		<div class="flex flex-col items-center justify-center gap-1 mt-6">
			<img class="w-24" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
			<div class="text-sm text-gray-500">&copy; 2023 Gocloud Inc. All Rights Reserved.</div>
		</div>
	</div>
</template>

<style scoped></style>
