<script lang="ts" setup></script>

<template>
	<div class="offcanvas" tabindex="-1" id="editGovernmentID" aria-labelledby="editGovernmentIDLabel" data-te-offcanvas-init>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="editGovernmentIDLabel">
				Edit Government ID
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
					<label for="sss_number" class="form-label">SSS Number</label>
					<input id="sss_number" type="text" class="form-control" autofocus />
				</div>
				<div class="form-group">
					<label for="pagibig_number" class="form-label">Pag-ibig Number</label>
					<input id="pagibig_number" type="text" class="form-control" autofocus />
				</div>
				<div class="form-group">
					<label for="philhealth_number" class="form-label">PhilHealth Number</label>
					<input id="philhealth_number" type="text" class="form-control" autofocus />
				</div>
				<div class="form-group">
					<label for="tin" class="form-label">TIN</label>
					<input id="tin" type="text" class="form-control" autofocus />
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
