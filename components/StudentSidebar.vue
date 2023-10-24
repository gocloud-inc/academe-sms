<script setup>
	import { Dropdown, PerfectScrollbar, Tooltip, initTE } from "tw-elements";

	const sidebarToggler = document.getElementById('student-sidebar-toggler');
	const asideEl = ref(null);
	let bodyOverflow = '';
	let asideDivOverlay = null;

	onMounted(() => {
		initTE({ Dropdown, PerfectScrollbar, Tooltip });

		asideEl.value = document.getElementById('student-aside');

		if (sidebarToggler) {
			sidebarToggler.addEventListener('click', () => {
				if (asideEl.value.classList.contains('show')) {
					asideEl.value.classList.remove('show');
					removeOverlay();
				} else {
					asideEl.value.classList.add('show');
					createOverlay();
				}
			});
		}

		// Handle click events on the links within the aside
		const links = asideEl.value.querySelectorAll('a');
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
			asideEl.value.classList.remove('show');
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
		asideEl.value.classList.remove('show');
		removeOverlay();
	}
</script>

<template>
  	<div id="student-aside" ref="asideEl" class="col-span-1 hidden xl:flow-root">
		<div class="sticky top-20 overflow-y-auto bg-white xl:bg-transparent p-3 xl:p-0 w-72 xl:w-auto dark:bg-gray-800">
			<ul class="divide-y divide-gray-200 dark:divide-gray-700">
				<li class="pb-2">
					<div class="flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-700 dark:border-gray-800">
						<div class="bg-gray-100 rounded-xl p-2 w-12 h-12 text-lg uppercase text-gray-400 font-semibold flex items-center justify-center dark:bg-gray-600">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.22 3a1.75 1.75 0 0 0-1.347.633l-3.58 4.32C.616 8.766 1.195 10 2.253 10h19.492c1.059 0 1.638-1.233.963-2.048l-3.581-4.319A1.75 1.75 0 0 0 17.78 3H6.22ZM3 11.5v7.25a2.5 2.5 0 0 0 2.5 2.5h13a2.5 2.5 0 0 0 2.5-2.5V11.5H3Zm6 3.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Zm3 1.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm5.5-1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"/></svg>
						</div>
						<div class="flex flex-col">
							<div class="text-xs text-gray-500 dark:text-gray-400">School</div>
							<div class="text-sm text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100">La Verdad Christian College</div>
						</div>
					</div>
				</li>
				<li class="py-2">
					<ul class="space-y-1">
						<li> 
							<NuxtLink to="/student/dashboard" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-20">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72l6.75-5.692Zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573l-6.75-5.692Z"/></svg>
								<span class="text-sm font-medium">Dashboard</span>
							</NuxtLink>
						</li>
						<li> 
							<NuxtLink to="/student/profile" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.249 2.249 0 0 1 6.253 14h11.502Zm0 1.5H6.252a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"/></svg>
								<span class="text-sm font-medium">My Profile</span>
							</NuxtLink>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719l.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88l2.358-4.778Zm1.21.937L9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734l3.654 3.562c.318.31.463.757.388 1.195l-.862 5.029l4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.375l-.862-5.03a1.35 1.35 0 0 1 .388-1.194l3.654-3.562l-5.05-.734a1.35 1.35 0 0 1-1.016-.739L11.998 4.04Z"/></svg>
								<span class="text-sm font-medium">My Grades</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z"/></svg>
								<span class="text-sm font-medium">My Schedule</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 3.75a.75.75 0 0 0-1.5 0v14A3.25 3.25 0 0 0 6.25 21h14a.75.75 0 0 0 0-1.5h-14a1.75 1.75 0 0 1-1.75-1.75v-14ZM14.75 6a.75.75 0 0 0 0 1.5h3.19l-4.69 4.69l-1.97-1.97a.75.75 0 0 0-1.06 0l-3.75 3.75a.75.75 0 1 0 1.06 1.06l3.22-3.22l1.97 1.97a.75.75 0 0 0 1.06 0l5.222-5.22v3.195a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-.75-.75H14.75Z"/></svg>
								<span class="text-sm font-medium">My Attendance</span>
							</a>
						</li>
					</ul>
				</li>
				
				<li class="py-2">
					<ul class="space-y-1">
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.497 4.627L18.5 6.75V15h-1V4.25A2.25 2.25 0 0 0 15.25 2h-9A2.25 2.25 0 0 0 4 4.25v4.129c-.603.404-1 1.09-1 1.871v8.5A3.25 3.25 0 0 0 6.25 22h2.367c.046.003.092.004.139.004h6.494c.068 0 .135-.001.202-.004h2.298A3.25 3.25 0 0 0 21 18.75v-1.5c0-.78-.397-1.467-1-1.871V6.75a2.25 2.25 0 0 0-1.503-2.123ZM5.5 8V4.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75V15h-.096a.75.75 0 0 1-.55-.24l-5.61-6.04A2.25 2.25 0 0 0 8.097 8H5.5Zm-1 2.25a.75.75 0 0 1 .75-.75h2.846a.75.75 0 0 1 .55.24l5.61 6.041a2.25 2.25 0 0 0 1.648.719h2.846a.75.75 0 0 1 .75.75v1.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-8.5Z"/></svg>
								<span class="text-sm font-medium">My Transcript</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5.75A2.75 2.75 0 0 1 4.75 3h14.5A2.75 2.75 0 0 1 22 5.75v9.5A2.75 2.75 0 0 1 19.25 18H10v-1c.12-.16.23-.326.331-.5h8.919c.69 0 1.25-.56 1.25-1.25v-9.5c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v3.919a5.025 5.025 0 0 0-1.5 1.33V5.75ZM6.75 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75Zm6 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM6 10a4 4 0 1 0 0 8.001A4 4 0 0 0 6 10Zm3 8.001c-.835.628-1.874 1-3 1a4.978 4.978 0 0 1-3-.998v3.246c0 .57.605.92 1.09.669l.09-.055L6 20.591l1.82 1.272a.75.75 0 0 0 1.172-.51L9 21.249L9.001 18Z"/></svg>
								<span class="text-sm font-medium">My Clearance</span>
							</a>
						</li>
						<li> 
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 5.25A2.25 2.25 0 0 1 5.25 3h9.5A2.25 2.25 0 0 1 17 5.25V14h4v3.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V5.25ZM17 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H17v4ZM5.25 4.5a.75.75 0 0 0-.75.75v12.5c0 .966.784 1.75 1.75 1.75h9.25V5.25a.75.75 0 0 0-.75-.75h-9.5Zm2 2.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM7.25 15a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"/></svg>
								<span class="text-sm font-medium">My Fees</span>
							</a>
						</li>
					</ul>
				</li>

				<li class="py-2">
					<ul class="space-y-1">
						<li>
							<a href="#" class="group flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<div class="flex items-center gap-3">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.212 2.237a.75.75 0 0 0-1.423-.474l-.75 2.249a.75.75 0 0 0 1.423.474l.75-2.249Zm4.568-.017a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM9.076 4.318a2.325 2.325 0 0 1 3.795-.577l7.006 7.506a2.325 2.325 0 0 1-.758 3.712l-3.42 1.516a4 4 0 0 1-7.314 3.24l-1.417.628a1.8 1.8 0 0 1-1.964-.336L3.565 18.65a1.8 1.8 0 0 1-.387-2.091l5.898-12.24Zm.682 14.789a2.5 2.5 0 0 0 4.569-2.024l-4.57 2.024Zm2.016-14.342a.825.825 0 0 0-1.346.204L4.53 17.21a.3.3 0 0 0 .064.349l1.439 1.356a.3.3 0 0 0 .327.056l12.151-5.383a.825.825 0 0 0 .27-1.317l-7.007-7.506ZM19 8.249a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"/></svg>
									<span class="text-sm font-medium">Announcements</span>
								</div>

								<span class="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
									3
								</span>
							</a>
						</li>
						<li>
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.25 4A2.25 2.25 0 0 0 2 6.25v2.5A2.25 2.25 0 0 0 4.25 11h2.5A2.25 2.25 0 0 0 9 8.75v-2.5A2.25 2.25 0 0 0 6.75 4h-2.5ZM3.5 6.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-2.5ZM11.25 5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm-7 5A2.25 2.25 0 0 0 2 15.25v2.5A2.25 2.25 0 0 0 4.25 20h2.5A2.25 2.25 0 0 0 9 17.75v-2.5A2.25 2.25 0 0 0 6.75 13h-2.5Zm-.75 2.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-2.5ZM11.25 14a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-10Zm0 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z"/></svg>
								<span class="text-sm font-medium">Curriculum</span>
							</a>
						</li>
						<li>
							<a href="#" class="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.4-.615a.75.75 0 0 1 .85.174a9.793 9.793 0 0 1 2.205 3.792a.75.75 0 0 1-.272.825l-1.241.916a1.38 1.38 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826a9.798 9.798 0 0 1-2.204 3.792a.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.926 1.114l-.17 1.526a.75.75 0 0 1-.571.647a9.518 9.518 0 0 1-4.406 0a.75.75 0 0 1-.572-.647l-.169-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.406.616a.75.75 0 0 1-.85-.175a9.798 9.798 0 0 1-2.203-3.796a.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826a9.793 9.793 0 0 1 2.205-3.792a.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65a10.72 10.72 0 0 1 2.201-.252Zm0 1.5a9.136 9.136 0 0 0-1.354.117l-.11.977A2.886 2.886 0 0 1 6.526 7.17l-.899-.394A8.293 8.293 0 0 0 4.28 9.092l.797.587a2.881 2.881 0 0 1 .001 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.109.984c.89.15 1.799.15 2.688 0l.11-.984a2.881 2.881 0 0 1 4.018-2.322l.904.396a8.299 8.299 0 0 0 1.348-2.318l-.798-.588a2.88 2.88 0 0 1-.001-4.643l.797-.587a8.293 8.293 0 0 0-1.348-2.317l-.897.393a2.884 2.884 0 0 1-4.023-2.324l-.109-.976a8.99 8.99 0 0 0-1.334-.117ZM12 8.25a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5Z"/></svg>
								<span class="text-sm font-medium">Settings</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>

			<div class="p-4 my-4 rounded-lg bg-primary-50 dark:bg-primary-900" role="alert">
				<div class="flex items-center mb-3">
					<span class="bg-warning-100 text-warning-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-warning-200 dark:text-warning-900">Notice</span>
				</div>
				<p class="mb-3 text-sm text-primary-800 dark:text-primary-400">
					We encourage you to upload documents to use the system. Just click the button below.
				</p>
				<a class="text-sm text-primary-800 underline font-medium hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300" href="#">
					Upload documents
				</a>
			</div>

			<p class="text-gray-400 text-xs mt-3">&copy; 2023. Gocloud Inc. All Rights Reserved.</p>
		</div>
	</div>
</template>

<style lang="postcss" scoped>
[aria-current="page"] {
	@apply bg-primary-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100;
}
</style>
