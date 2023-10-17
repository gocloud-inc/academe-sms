<script setup>
	definePageMeta({
		layout: "admin",
	})

	useSeoMeta({
        title: 'Preferences - Admin',
    })
</script>

<template>
	<div class="container">
		<div class="space-y-6">
			<div class="space-y-6">
				<ClientOnly>
					<AdminProfileCard />

					<template #fallback>
						<SkeletonAdminProfileCard />
					</template>
				</ClientOnly>
				
				<div class="flex flex-col gap-2">
					<div class="card">
						<div class="card-body">
							<h2 class="font-semibold text-gray-700 text-lg dark:text-gray-300">Color Mode</h2>
							<p class="text-sm text-gray-500 dark:text-gray-400">Choose if Academe's appearance should be light or dark, or follow your computer’s settings.</p>

							<ColorModePicker />
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped></style>
