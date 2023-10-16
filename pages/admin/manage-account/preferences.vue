<script setup>
	definePageMeta({
		layout: "admin"
	})

	useSeoMeta({
        title: 'Preferences - Admin',
    })
</script>

<template>
	<div class="container">
		<div class="space-y-6">
			<div class="space-y-6">
				<AdminProfileCard />
				
				<div class="flex flex-col gap-2">
					<h2 class="text-lg font-semibold text-gray-700 dark:text-gray-100">Theme Preferences</h2>
					<div class="card">
						<div class="card-body">
							<ColorModePicker />
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped></style>
