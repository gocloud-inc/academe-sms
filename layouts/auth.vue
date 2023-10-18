<template>
 	<div class="bg-white dark:bg-gray-900">
		<div class="flex justify-center h-screen">
			<div class="hidden bg-cover lg:block lg:w-2/3 relative" style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
				<div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
					<div>
						<h1 class="text-2xl font-bold text-white sm:text-6xl">School Workspace</h1>

						<p class="max-w-xl text-lg mt-3 text-gray-100">
							Be equipped to make well-informed business decisions and increase data processing efficiency.
						</p>

						<div class="mt-6 max-w-md flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-800">
							<div class="bg-gray-100 rounded-xl w-12 h-12 p-4 text-lg uppercase text-primary font-semibold flex items-center justify-center dark:bg-gray-700 dark:text-primary-300">
								LV
							</div>
							<div class="flex flex-col">
								<div class="text-sm text-gray-500">School</div>
								<div class="text-base text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100">La Verdad Christian College</div>
							</div>
						</div>

						<p class="text-white text-xs font-light absolute bottom-6">&copy; 2023 GOCLOUD INC. All Rights Reserved.</p>

						<div class="absolute bottom-6 right-6">
							<img class="w-auto h-7 grayscale invert" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
						</div>
					</div>
				</div>
			</div>

			<div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
