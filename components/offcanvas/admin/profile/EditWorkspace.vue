<template>
	<div class="offcanvas" tabindex="-1" id="editWorkspace" aria-labelledby="editWorkspaceLabel" data-te-offcanvas-init>
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="editWorkspaceLabel">
				Edit workspace
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
					<label for="employee_id" class="form-label">Employee ID</label>
					<input id="employee_id" type="text" class="form-control" placeholder="e.g Juan Dela Cruz" />
				</div>
				<div class="form-group">
					<label for="account_type" class="form-label">Account Type</label>
					<FormsSelect name="account_type" id="account_type">
						<option value="System Administrator">System Administrator</option>
					</FormsSelect>
				</div>
				<div class="form-group">
					<label for="employee_status" class="form-label">Employee Status</label>
					<FormsSelect name="employee_status" id="employee_status">
						<option value="Employed">Employed</option>
					</FormsSelect>
				</div>
				<div class="form-group">
					<label for="program_department" class="form-label">Program Department</label>
					<FormsSelect name="program_department" id="program_department">
					</FormsSelect>
				</div>
				<div class="form-group">
					<label for="program_category" class="form-label">Program Category</label>
					<FormsSelect name="program_category" id="program_category">
						<option value="College">College</option>
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
