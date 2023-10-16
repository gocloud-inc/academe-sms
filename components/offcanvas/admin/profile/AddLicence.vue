<script lang="ts" setup></script>

<template>
	<div class="offcanvas" tabindex="-1" id="addLicence" aria-labelledby="addLicenceLabel" data-te-offcanvas-init>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="addLicenceLabel">
				Add licence
			</h5>
			<button type="button" class="offcanvas-button-dismiss" data-te-offcanvas-dismiss>
				<span
					class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12" />
					</svg>
				</span>
			</button>
		</div>
		<div class="offcanvas-body">
			<form class="space-y-6">
				<div class="form-group">
					<label for="licence_name" class="form-label">Licence name</label>
					<input id="licence_name" type="text" placeholder="e.g Driver Licence" class="form-control" autofocus />
				</div>
				<div class="form-group">
					<label for="rating" class="form-label">Rating</label>
					<input id="rating" type="number" placeholder="e.g 1.5" class="form-control" autofocus />
				</div>
				<div class="form-group">
					<label for="date_examination" class="form-label">Date of Examination</label>
					<input id="date_examination" type="date" class="form-control" autofocus />
				</div>

				<div class="offcanvas-action">
					<button type="button" class="button button-secondary button-lg" data-te-offcanvas-dismiss>Cancel</button>
					<button type="submit" class="button button-primary button-lg">Save Changes</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped></style>
