<template>
 	<div class="bg-white dark:bg-gray-900">
		<svg class="fixed min-h-screen" id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#ffffff"></rect><defs><linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%"><stop offset="14.444444444444446%" stop-color="#bfe3f7" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#bfe3f7" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%"><stop offset="14.444444444444446%" stop-color="#bfe3f7" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#ffffff" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%"><stop offset="14.444444444444446%" stop-color="#bfe3f7" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#bfe3f7" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%"><stop offset="14.444444444444446%" stop-color="#ffffff" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#bfe3f7" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(960, 0)"><path d="M0 459C-88.8 451.9 -177.7 444.9 -229.5 397.5C-281.3 350.1 -296.1 262.5 -328.2 189.5C-360.3 116.5 -409.7 58.3 -459 0L0 0Z" fill="#e0f1fb"></path><path d="M0 229.5C-44.4 226 -88.8 222.4 -114.7 198.8C-140.7 175.1 -148.1 131.2 -164.1 94.8C-180.2 58.3 -204.8 29.1 -229.5 0L0 0Z" fill="#bfe3f7"></path></g><g transform="translate(0, 540)"><path d="M0 -459C79.9 -446.8 159.9 -434.6 229.5 -397.5C299.1 -360.4 358.4 -298.4 394.9 -228C431.4 -157.6 445.2 -78.8 459 0L0 0Z" fill="#e0f1fb"></path><path d="M0 -229.5C40 -223.4 79.9 -217.3 114.7 -198.8C149.6 -180.2 179.2 -149.2 197.5 -114C215.7 -78.8 222.6 -39.4 229.5 0L0 0Z" fill="#bfe3f7"></path></g></svg>

		<!-- <div class="flex justify-center h-screen">
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
			</div> -->

			<!-- <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
				<slot></slot>
			</div> -->

		<div class="container flex items-center justify-center min-h-screen lg:px-6 py-12 mx-auto relative">
			<slot />
		</div>
	</div>
</template>

<style scoped></style>
