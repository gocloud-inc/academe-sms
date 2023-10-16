<script lang="ts" setup></script>

<template>
  	<div data-te-modal-init class="modal" id="profilePhotoModal" tabindex="-1" aria-labelledby="profilePhotoModalTitle" aria-modal="true" role="dialog">
		<div data-te-modal-dialog-ref class="modal-container">
			<div class="modal-body">
				<form class="mt-4" action="#" method="POST" enctype="multipart/form-data">
					<div class="flex justify-center">
						<div class="dropzone relative uppercase bg-gray-100 text-gray-500 rounded-full w-56 h-56 flex justify-center items-center text-5xl font-semibold group">
							<input name="file" type="file" class="dropzone-file-input absolute left-0 right-0 top-0 bottom-0 h-full w-full opacity-0 cursor-pointer z-10" accept="image/*" />
							<div class="dropzone-image-preview h-full w-full uppercase bg-gray-100 text-gray-500 rounded-full p-4 flex justify-center items-center text-7xl font-semibold dark:bg-gray-700 dark:text-gray-400">
								MP
							</div>
							<div class="absolute bottom-0 left-0 right-0 text-xs bg-gray-900 w-56 h-56 rounded-full hidden group-hover:flex justify-center items-center">
								<span class="material-symbols-rounded msr-filled text-white relative opacity-100 text-5xl">add_a_photo</span>
							</div>
						</div>
					</div>
					
					<div class="mt-10 sm:flex sm:items-center justify-center sm:-mx-2 gap-2">
						<button type="button" class="button button-secondary button-lg" data-te-modal-dismiss>
							Cancel
						</button>

						<button type="submit" class="button button-primary button-lg">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
