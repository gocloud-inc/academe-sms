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
		<div class="card">
			<div class="card-body">
				<div class="text-start">
					<img class="w-auto h-8 sm:h-12" src="/logo.png" alt="">
					<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h2>
					<p class="mt-3 text-gray-500 dark:text-gray-300">Enter details to access your account</p>
				</div>
		
				<div class="mt-8">
					<form @submit.prevent="login" class="space-y-6">
						<div class="form-group">
							<label for="email" class="form-label">Email</label>
							<input v-model="user.email" id="email" type="email" placeholder="email@example.com" class="form-control form-control-lg" autocomplete="email" autofocus required />
						</div>
		
						<div class="form-group">
							<label for="password" class="form-label">Password</label>
							<div class="relative">
								<input v-model="user.password" id="password" class="form-control password" type="password" name="password" required autofocus autocomplete="current-password" />
								<div class="absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer">
									<span class="password-icon">Show</span>
								</div>
							</div>
						</div>
		
						<NuxtLink to="/auth/forgot-password" class="inline-block my-4 text-sm text-primary-500 hover:underline dark:text-primary-400">
							Forgot password?
						</NuxtLink>
		
						<button type="submit" class="button button-primary button-lg w-full">
							Login
						</button>
					</form>
					
					<div class="mt-6 text-center">
						<NuxtLink to="/admission/applicant-type" class="text-sm text-primary-500 hover:underline dark:text-primary-400">
							Not enrolled yet? Admission
						</NuxtLink>
					</div>
					<p class="mt-6 text-sm text-gray-600 dark:text-gray-400">
						By clicking “Login” above, you acknowledge that you have read and understood, and agree to Our <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white">Term & Conditions</a> and <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white"> Privacy Policy.</a>
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center gap-1 mt-6">
			<img class="w-24" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
			<div class="text-sm text-gray-500">&copy; 2023 Gocloud Inc. All Rights Reserved.</div>
		</div>
	</div>
</template>

<style scoped></style>
