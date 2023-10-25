<script setup>
	const enrollmentSidebarToggler = document.getElementById('enrollment-sidebar-toggler');
	const enrollmentAsideEl = ref(null);
	let bodyOverflow = '';
	let asideDivOverlay = null;

	onMounted(() => {

		enrollmentAsideEl.value = document.getElementById('enrollment-aside');

		if (enrollmentSidebarToggler) {
			enrollmentSidebarToggler.addEventListener('click', () => {
				if (enrollmentAsideEl.value.classList.contains('show')) {
					enrollmentAsideEl.value.classList.remove('show');
					removeOverlay();
				} else {
					enrollmentAsideEl.value.classList.add('show');
					createOverlay();
				}
			});
		}

		// Handle click events on the links within the aside
		const links = enrollmentAsideEl.value.querySelectorAll('a');
		links.forEach(link => {
			link.addEventListener('click', handleLinkClick);
		});

		// Remove an overlay when the page loads
		removeOverlay();
	});

	const createOverlay = () => {
		asideDivOverlay = document.createElement('div');
		asideDivOverlay.className = 'sidebar-overlay';
		document.body.appendChild(asideDivOverlay);

		// Add a click event listener to remove the overlay when clicked
		asideDivOverlay.addEventListener('click', () => {
			enrollmentAsideEl.value.classList.remove('show');
			removeOverlay();
		});
	};

	const removeOverlay = () => {
		if (asideDivOverlay && asideDivOverlay.parentElement) {
			document.body.style.overflow = bodyOverflow;
			document.body.removeChild(asideDivOverlay);
		}
	};

	const handleLinkClick = (event) => {
		event.preventDefault();
		enrollmentAsideEl.value.classList.remove('show');
		removeOverlay();
	}
</script>

<template>
  	<div id="enrollment-aside" ref="enrollmentAsideEl" class="col-span-3 hidden xl:flow-root">
		<div class="sticky top-20 overflow-y-auto bg-white xl:bg-transparent p-3 xl:p-0 w-72 xl:w-auto">
			<div class="flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-800">
				<div class="bg-gray-100 rounded-xl p-2 w-12 h-12 text-lg uppercase text-gray-400 font-semibold flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.22 3a1.75 1.75 0 0 0-1.347.633l-3.58 4.32C.616 8.766 1.195 10 2.253 10h19.492c1.059 0 1.638-1.233.963-2.048l-3.581-4.319A1.75 1.75 0 0 0 17.78 3H6.22ZM3 11.5v7.25a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5V11.5H3Zm6 3.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm3 1.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm5.5-1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"/></svg>
				</div>
				<div class="flex flex-col">
					<div class="text-xs text-gray-500">School</div>
					<div class="text-sm text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100">La Verdad Christian College</div>
				</div>
			</div>

			<ul class="divide-y divide-gray-200 dark:divide-gray-700">
				<li class="py-2">
					<ul class="space-y-3">
						<li> 
							<a href="#" class="flex items-start gap-3 rounded-lg px-4 py-2 text-base font-semibold text-gray-700 dark:text-primary-300 dark:bg-primary-900 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<div class="bg-success text-white rounded-full flex items-center justify-center p-1">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z"/></svg>
								</div>
								<div class="flex flex-col">
									<span class="font-medium">Program</span>
									<p class="text-sm font-normal text-gray-500">Select your program and specialization</p>
								</div>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<div class="bg-gray-200 text-gray-700 rounded-full flex items-center justify-center p-1 w-8 h-8">
									2
								</div>
								<span class="font-medium">Profile</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<div class="bg-gray-200 text-gray-700 rounded-full flex items-center justify-center p-1 w-8 h-8">
									3
								</div>
								<span class="font-medium">Courses</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<div class="bg-gray-200 text-gray-700 rounded-full flex items-center justify-center p-1 w-8 h-8">
									4
								</div>
								<span class="font-medium">Assessment</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<div class="bg-gray-200 text-gray-700 rounded-full flex items-center justify-center p-1 w-8 h-8">
									5
								</div>
								<span class="font-medium">Payment Plan</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<div class="bg-gray-200 text-gray-700 rounded-full flex items-center justify-center p-1 w-8 h-8">
									6
								</div>
								<span class="font-medium">Finish</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped></style>
