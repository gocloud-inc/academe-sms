<template>
 	<div class="bg-white dark:bg-gray-900">
		<div class="flex justify-center h-screen">
			<div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
				<div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
					<div>
						<h1 class="text-2xl font-bold text-white sm:text-6xl">School Workspace</h1>

						<p class="max-w-xl text-lg mt-3 text-gray-300">
							Be equipped to make well-informed business decisions and increase data processing efficiency.
						</p>

						<div class="bg-white p-3 rounded-lg inline-flex mt-5">
							<img class="w-auto h-7 sm:h-8" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
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
