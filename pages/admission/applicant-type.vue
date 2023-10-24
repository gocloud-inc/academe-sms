<script setup>
	definePageMeta({
		layout: "auth",
		colorMode: "light",
	})

	useSeoMeta({
		title: 'Applicant Type',
	})
</script>

<template>
	<div class="w-full max-w-md">
		<div class="card">
			<div class="card-body">
				<div class="text-start">
					<img class="w-auto h-8 sm:h-12" src="/logo.png" alt="">
					<h2 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Applicant Type</h2>
					<p class="mt-3 text-gray-500 dark:text-gray-300">Tell us what type of account you'd be opening.</p>
				</div>
		
				<div class="mt-8">
					<div class="space-y-3 mb-3">
						<NuxtLink to="/admission/new-student/program" class="card group hover:bg-primary-50 hover:border-primary-500 scale-100 transition-all duration-300 hover:scale-[1.05] ease-in-out">
							<div class="card-body relative">
								<div class="text-gray-700 font-semibold capitalize">New Student</div>
								<div class="hidden absolute right-5 top-5 text-primary group-hover:inline-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                                </div>
							</div>
						</NuxtLink>
						<NuxtLink to="/" class="card group hover:bg-primary-50 hover:border-primary-500 scale-100 transition-all duration-300 hover:scale-[1.05] ease-in-out">
							<div class="card-body relative">
								<div class="text-gray-700 font-semibold capitalize">Transferee Student</div>
								<div class="hidden absolute right-5 top-5 text-primary group-hover:inline-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                                </div>
							</div>
						</NuxtLink>
						<NuxtLink to="/" class="card group hover:bg-primary-50 hover:border-primary-500 scale-100 transition-all duration-300 hover:scale-[1.05] ease-in-out">
							<div class="card-body relative">
								<div class="text-gray-700 font-semibold capitalize">Cross Student</div>
								<div class="hidden absolute right-5 top-5 text-primary group-hover:inline-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"/></svg>
                                </div>
							</div>
						</NuxtLink>
					</div>
					
					<p class="mt-6 text-sm text-gray-600 dark:text-gray-400">
						By continuing, you acknowledge that you have read and understood, and agree to Our <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white">Term & Conditions</a> and <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white"> Privacy Policy.</a>
					</p>
				</div>
			</div>
		</div>

		<div class="flex justify-between mt-2">
			<div class="text-sm uppercase text-gray-500">S.Y 2023-2024</div>
			<div class="text-sm text-gray-500">1st Semester</div>
		</div>

		<div class="flex flex-col items-center justify-center gap-1 mt-6">
			<img class="w-24" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
			<div class="text-sm text-gray-500">&copy; 2023 Gocloud Inc. All Rights Reserved.</div>
		</div>
	</div>
</template>

<style scoped></style>
