<script>
	export default {
		setup() {
			definePageMeta({
				layout: "auth",
				colorMode: "light"
			})
		
			useSeoMeta({
				title: 'Reset Password',
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
	<div class="w-full max-w-md">
		<div class="card">
			<div class="card-body">
				<div class="text-start">
					<img class="w-auto h-8 sm:h-12" src="/logo.png" alt="">
					<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Reset password</h2>
					<p class="mt-3 text-gray-500 dark:text-gray-300">Ensure your account is using a long, random password to stay secure.</p>
				</div>
		
				<div class="mt-8">
					<form class="space-y-6">
						<div class="form-group">
							<label for="email" class="form-label">Email</label>
							<input id="email" type="email" placeholder="email@example.com" class="form-control form-control-lg" autocomplete="email" autofocus required />
						</div>
		
						<div class="form-group">
							<label for="new_password" class="form-label">New Password</label>
							<div class="relative">
								<input id="new_password" class="form-control password" type="password" name="new_password" placeholder="********" required autofocus autocomplete="new-password" />
								<div class="absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer">
									<span class="password-icon">Show</span>
								</div>
							</div>
						</div>
		
						<div class="form-group">
							<label for="confirm_new_password" class="form-label">Confirm New Password</label>
							<input id="confirm_new_password" type="password" placeholder="********" class="form-control form-control-lg password" autocomplete="new-password" autofocus required />
						</div>
		
						<NuxtLink to="/admin/dashboard" class="button button-primary button-lg w-full">
							Reset Password
						</NuxtLink>
					</form>
					
					<div class="mt-6 text-center">
						<NuxtLink to="/" class="text-sm text-primary-500 hover:underline dark:text-primary-400">
							Already have an account? Signin
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
