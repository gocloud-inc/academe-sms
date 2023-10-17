<script setup>
	definePageMeta({
		layout: "auth",
	})

	useSeoMeta({
        title: 'Reset Password - Academe SMS',
    })
</script>

<template>
	<div class="flex-1">
		<div class="text-start">
			<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Reset password</h2>
			<p class="mt-3 text-gray-500 dark:text-gray-300">Ensure your account is using a long, random password to stay secure.</p>
		</div>

		<div class="mt-8">
			<form class="space-y-6">
				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input id="email" type="email" placeholder="email@example.com" class="form-control form-control-lg" autocomplete="email" autofocus required />
				</div>

				<div class="form-group">
					<label for="new_password" class="form-label">New Password</label>
					<input id="new_password" type="password" placeholder="********" class="form-control form-control-lg" autocomplete="new-password" autofocus required />
				</div>

				<div class="form-group">
					<label for="confirm_new_password" class="form-label">Confirm New Password</label>
					<input id="confirm_new_password" type="password" placeholder="********" class="form-control form-control-lg" autocomplete="new-password" autofocus required />
				</div>

				<NuxtLink to="/admin/dashboard" class="button button-primary button-lg w-full">
					Reset Password
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
