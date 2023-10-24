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
