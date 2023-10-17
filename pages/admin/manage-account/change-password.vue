<script>
	export default {
		setup() {
			definePageMeta({
				layout: "admin",
			})
			
			useSeoMeta({
				title: 'Change Password',
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
	<div class="container">
		<div class="space-y-6">
			<ClientOnly>
				<AdminProfileCard />

				<template #fallback>
					<SkeletonAdminProfileCard />
				</template>
			</ClientOnly>

			<div class="card">
				<div class="card-body">
					<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-300">Change Password</h2>
					<p class="text-sm text-gray-500 dark:text-gray-400">Ensure your account is using a long, random password to stay secure.</p>

					<form class="mt-4 space-y-4 form" action="#" method="POST">
						<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
							<div class="form-group">
								<label for="current_password" class="form-label">Current Password</label>
								<div class="relative">
									<input id="current_password" class="form-control password" type="password" name="current_password" required autofocus autocomplete="current-password" />
									<div class="absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer dark:text-gray-100">
										<span class="password-icon">Show</span>
									</div>
								</div>
							</div>

							<div class="form-group">
								<label for="new_password" class="form-label">New Password</label>
								<input id="new_password" class="form-control password" type="password" name="new_password" required autofocus autocomplete="new-password" />
							</div>

							<div class="form-group">
								<label for="new_password_confirmation" class="form-label">Confirm New Password</label>
								<input id="new_password_confirmation" class="form-control password" type="password" name="new_password_confirmation" required autofocus autocomplete="new-password" />
							</div>
						</div>

						<button type="submit" class="button button-primary" disabled>Update password</button>
					</form>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped></style>
