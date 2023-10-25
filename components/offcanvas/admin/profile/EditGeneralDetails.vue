<template>
	<div class="offcanvas" tabindex="-1" id="editGeneralDetails" aria-labelledby="editGeneralDetailsLabel" data-te-offcanvas-init>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="editGeneralDetailsLabel">
				Edit General Details
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
					<label for="name" class="form-label">Full Name</label>
					<input id="name" type="text" placeholder="e.g Juan Dela Cruz" class="form-control" autocomplete="name" autofocus />
				</div>
				<div class="form-group">
					<label for="birthdate" class="form-label">Date of Birth</label>
					<input id="birthdate" type="date" class="form-control" autocomplete="birthday" autofocus />
				</div>
				<div class="form-group">
					<label for="birthplace" class="form-label">Place of Birth</label>
					<input id="birthplace" type="text" placeholder="e.g Metro Manila" class="form-control" autocomplete="address" autofocus />
				</div>
				<div class="form-group">
					<label for="gender" class="form-label">Gender</label>
					<FormsSelect name="gender" id="gender">
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</FormsSelect>
				</div>
				<div class="form-group">
					<label for="nationality" class="form-label">Nationality</label>
					<input id="nationality" type="text" placeholder="e.g Filipino" class="form-control" autofocus />
				</div>
				<div class="form-group">
					<label for="civil_status" class="form-label">Civil Status</label>
					<FormsSelect name="civil_status" id="civil_status">
						<option value="Single">Single</option>
						<option value="Married">Married</option>
						<option value="Widowed">Widowed</option>
						<option value="Divorced">Divorced</option>
					</FormsSelect>
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
