<script setup>
	definePageMeta({
		layout: "auth",
	})

	useSeoMeta({
        title: 'Login - Academe SMS',
    })
</script>

<template>
	<div class="flex-1">
		<div class="text-start">
			<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h2>
			<p class="mt-3 text-gray-500 dark:text-gray-300">Enter details to access your account</p>
		</div>

		<div class="mt-8">
			<form class="space-y-6">
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input id="email" type="email" placeholder="email@example.com" class="form-control form-control-lg" autocomplete="email" autofocus required />
				</div>

				<div class="form-group">
					<label for="password" class="form-label">Password</label>
					<input id="password" type="password" placeholder="********" class="form-control form-control-lg" autocomplete="new-password" autofocus required />
				</div>

				<NuxtLink to="/auth/forgot-password" class="inline-block my-4 text-sm text-primary-500 capitalize hover:underline dark:text-primary-400">
					Forgot your password?
				</NuxtLink>

				<NuxtLink to="/admin/dashboard" class="button button-primary button-lg w-full">
					Login
				</NuxtLink>
			</form>
			
			<div class="mt-6 text-center">
				<a href="#" class="text-sm text-primary-500 hover:underline dark:text-primary-400">
					Not enrolled yet? Admission
				</a>
			</div>
		</div>
	</div>

</template>

<style scoped></style>
