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
  	<div data-te-modal-init class="modal" id="changePasswordModal" tabindex="-1" aria-labelledby="changePasswordModalTitle" aria-hidden="true" aria-modal="true" role="dialog">
		<div data-te-modal-dialog-ref class="modal-container">
			<div class="modal-body">
				<h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
					Create New Password
				</h3>

				<form class="mt-4" id="url" action="" method="POST">
					<div class="flex items-center gap-1 mb-6">
						<div class="form-group w-9/12">
							<label for="new_password" class="form-label sr-only">Create New Password</label>
							<div class="relative">
								<input id="new_password" class="form-control password" type="password" name="new_password" required autofocus autocomplete="new-password" />
								<div class="absolute top-0 end-0 my-2 mx-4 password-btn text-sm cursor-pointer dark:text-gray-100">
									<span class="password-icon">Show</span>
								</div>
							</div>
						</div>
						<button type="button" class="button button-secondary w-fit">
							Generate
						</button>
					</div>

					<div class="modal-action">
						<button type="button" class="button button-secondary" data-te-modal-dismiss>
							No, cancel
						</button>

						<button type="submit" class="button button-primary">
							Save changes
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
