<script>
	export default {
		setup() {
			definePageMeta({
				layout: "auth",
			})
		
			useSeoMeta({
				title: 'Login - Academe SMS',
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
			});
		}
	}
</script>

<template>
	<div class="flex-1">
		<div class="text-start">
			<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h2>
			<p class="mt-3 text-gray-500 dark:text-gray-300">Enter details to access your account</p>
		</div>

		<div class="mt-8">
			<form class="space-y-6">
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input id="email" type="email" placeholder="email@example.com" class="form-control form-control-lg" autocomplete="email" autofocus required />
				</div>

				<div class="form-group">
					<label for="password" class="form-label">Password</label>
					<div class="relative">
						<input id="current_password" class="form-control password" type="password" name="current_password" required autofocus autocomplete="current-password" />
						<div class="absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer">
							<span class="password-icon">Show</span>
						</div>
					</div>
				</div>

				<NuxtLink to="/auth/forgot-password" class="inline-block my-4 text-sm text-primary-500 capitalize hover:underline dark:text-primary-400">
					Forgot your password?
				</NuxtLink>

				<NuxtLink to="/admin/dashboard" class="button button-primary button-lg w-full">
					Login
				</NuxtLink>
			</form>
			
			<div class="mt-6 text-center">
				<a href="#" class="text-sm text-primary-500 hover:underline dark:text-primary-400">
					Not enrolled yet? Admission
				</a>
			</div>
		</div>
	</div>

</template>

<style scoped></style>
