<script setup>
	definePageMeta({
		layout: "auth",
		colorMode: "light"
	})

	useSeoMeta({
        title: 'Forgot Password - Academe SMS',
    })
</script>

<template>
	<div class="flex-1">
		<div class="text-start">
			<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Forgot password</h2>
			<p class="mt-3 text-gray-500 dark:text-gray-300">Enter your email to receive password reset link</p>
		</div>

		<div class="mt-8">
			<form class="space-y-6">
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input id="email" type="email" placeholder="email@example.com" class="form-control form-control-lg" autocomplete="email" autofocus required />
				</div>

				<NuxtLink to="/auth/reset-password" class="button button-primary button-lg w-full">
					Send password reset link
				</NuxtLink>
			</form>
			
			<div class="mt-6 text-center">
				<NuxtLink to="/" class="text-sm text-primary-500 hover:underline dark:text-primary-400">
					Already have an account? Signin
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
