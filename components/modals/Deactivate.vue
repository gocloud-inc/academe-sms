<script lang="ts" setup></script>

<template>
	<div data-te-modal-init class="modal" id="deactivateModal" tabindex="-1" aria-labelledby="deactivateModalTitle" aria-hidden="true" aria-modal="true" role="dialog">
		<div data-te-modal-dialog-ref class="modal-container">
			<div class="modal-body">
				<h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
					Confirmation
				</h3>
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
					Are you sure you want to deactivate <b>Globe Support Team</b>? This action cannot be undone.
				</p>

				<form class="mt-4" id="url" action="" method="POST">
					<div class="modal-action">
						<button type="button" class="button button-secondary" data-te-modal-dismiss>
							No, cancel
						</button>

						<button type="submit" class="button button-danger">
							Deactivate
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
