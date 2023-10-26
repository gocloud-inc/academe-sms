<script lang="ts" setup></script>

<template>
	<div data-te-modal-init class="modal" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalTitle" aria-hidden="true" aria-modal="true" role="dialog">
		<div data-te-modal-dialog-ref class="modal-container">
			<div class="modal-body">
				<h3 class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
					Delete Confirmation
				</h3>
				<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
					Are you sure you want to delete this item? This action cannot be undone.
				</p>

				<form class="mt-4" id="delete-url" action="" method="POST">
					<div class="modal-action">
						<button type="button" class="button button-secondary" data-te-modal-dismiss>
							No, cancel
						</button>

						<button type="submit" class="button button-danger">
							Delete
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
