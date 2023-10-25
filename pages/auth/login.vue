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
					<NuxtLink to="/" class="bg-gray-200 text-gray-600 rounded-full flex items-center justify-center p-1 w-10 h-10">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58a.754.754 0 0 0 .001.289a.995.995 0 0 0 .3.579l7.419 7.067Z"/></svg>
					</NuxtLink>
					<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h2>
					<p class="mt-3 text-gray-500 dark:text-gray-300">Enter details to access your account</p>
				</div>
		
				<div class="mt-8">
					<form @submit.prevent="login" class="space-y-6">
						<div class="form-group">
							<label for="email" class="form-label">Email</label>
							<input v-model="user.email" id="email" type="email" placeholder="email@example.com" class="form-control form-control-lg" autocomplete="email" required />
						</div>
		
						<div class="form-group">
							<label for="password" class="form-label">Password</label>
							<div class="relative">
								<input v-model="user.password" id="password" class="form-control password" type="password" name="password" required autocomplete="current-password" />
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
					
					<p class="mt-6 text-sm text-gray-600 dark:text-gray-400">
						By clicking “Login” above, you acknowledge that you have read, understood, and agreed to Academe's <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white">Term & Conditions</a> and <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white"> Privacy Policy.</a>
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
