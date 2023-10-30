<script setup>
  let navbar;

  setTimeout(() => {
    navbar = document.querySelector(".navbar");

    // Add an event listener to the window for when it is scrolled
    window.addEventListener('scroll', function() {
      // Check if the page has been scrolled more than 20 pixels
      if (window.scrollY > 20) {
        // Add the "sticky" class to the navbar
        navbar.classList.add("stay-sticky");
      } else {
        // Remove the "sticky" class from the navbar
        navbar.classList.remove("stay-sticky");
      }
    });
  }, 0);
</script>

<template>
    <header class="fixed top-0 right-0 left-0 z-10">
        <nav class="navbar relative py-10">
            <div class="container">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex items-center justify-between">
                        <a href="#">
                            <img class="w-auto h-8 sm:h-10 dark:grayscale dark:invert" src="https://gocloudgroup.com/media/products/logo-academe-sms.png" alt="">
                        </a>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <div class="hidden lg:block">
                        <div class=" flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">News</a>
                            <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Events</a>
                            <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Careers</a>
                            <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer class="bg-white dark:bg-gray-800">
        <div class="container">
            <div class=" flex flex-col items-center justify-between p-6 space-y-4 sm:space-y-0 sm:flex-row">
                <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                    <NuxtLink to="/" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
                        Workspaces
                    </NuxtLink>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
                        About
                    </a>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
                        Careers
                    </a>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
                        Help
                    </a>

                    <a href="#" class="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
                        Privacy
                    </a>
                </div>
    
                <p class="text-sm text-gray-600 dark:text-gray-300 text-center">© Copyright 2023. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<style lang="postcss" scoped>
    nav.stay-sticky {
        @apply bg-white py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900;
    }
</style>