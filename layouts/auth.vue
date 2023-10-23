<template>
 	<div class="bg-white dark:bg-gray-900">
		<svg class="fixed min-h-screen" id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#FFFFFF"></rect><defs><linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%"><stop offset="14.444444444444446%" stop-color="#ebe3f6" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#ebe3f6" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%"><stop offset="14.444444444444446%" stop-color="#ebe3f6" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#ffffff" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%"><stop offset="14.444444444444446%" stop-color="#ebe3f6" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#ebe3f6" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%"><stop offset="14.444444444444446%" stop-color="#ffffff" stop-opacity="1"></stop><stop offset="85.55555555555554%" stop-color="#ebe3f6" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(960, 0)"><path d="M0 486C-68.2 484.1 -136.4 482.2 -186 449C-235.6 415.8 -266.6 351.2 -301.2 301.2C-335.9 251.2 -374.2 215.8 -405.6 168C-437 120.2 -461.5 60.1 -486 0L0 0Z" fill="#f5f1fb"></path><path d="M0 243C-34.1 242.1 -68.2 241.1 -93 224.5C-117.8 207.9 -133.3 175.6 -150.6 150.6C-167.9 125.6 -187.1 107.9 -202.8 84C-218.5 60.1 -230.7 30.1 -243 0L0 0Z" fill="#ebe3f6"></path></g><g transform="translate(0, 540)"><path d="M0 -486C65 -477.7 129.9 -469.3 182.9 -441.6C235.9 -413.9 276.9 -366.8 323.1 -323.1C369.4 -279.5 421 -239.3 449 -186C477 -132.7 481.5 -66.3 486 0L0 0Z" fill="#f5f1fb"></path><path d="M0 -243C32.5 -238.8 65 -234.7 91.5 -220.8C117.9 -206.9 138.4 -183.4 161.6 -161.6C184.7 -139.7 210.5 -119.6 224.5 -93C238.5 -66.3 240.8 -33.2 243 0L0 0Z" fill="#ebe3f6"></path></g></svg>

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

		<div class="container flex items-center justify-center min-h-screen lg:px-6 py-24 mx-auto relative">
			<slot />
		</div>
	</div>
</template>

<style scoped></style>
