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
								<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera-plus text-white relative opacity-100" width="64" height="64" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"></path>
									<path d="M16 19h6"></path>
									<path d="M19 16v6"></path>
									<path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
								</svg>
							</div>
						</div>
					</div>
					
					<div class="modal-action">
						<button type="button" class="button button-secondary" data-te-modal-dismiss>
							Cancel
						</button>

						<button type="submit" class="button button-primary">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
