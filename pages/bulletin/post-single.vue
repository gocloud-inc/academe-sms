<script setup>
    import { faker } from '@faker-js/faker';

    definePageMeta({
        layout: "bulletin"
    })

    useSeoMeta({
		title: 'Post Single - Bulletin',
	})

    const generateFakeData = (type) => {
		switch (type) {
			case "news":
			return {
				id: faker.string.uuid(),
				thumbnail: faker.image.urlPicsumPhotos(),
                title: faker.lorem.sentence(),
                description: faker.lorem.paragraph(),
				type: "news",
			};

            case "events":
			return {
				id: faker.string.uuid(),
				thumbnail: faker.image.urlPicsumPhotos(),
                title: faker.lorem.sentence(),
                description: faker.lorem.paragraph(),
				type: "events",
			};

            case "postTags":
			return {
				id: faker.string.uuid(),
                name: faker.lorem.word(),
				type: "postTags",
			};

            case "jobs":
			return {
				id: faker.string.uuid(),
                thumbnail: faker.image.avatarLegacy(),
                title: faker.lorem.word(),
                description: faker.lorem.paragraph(),
				type: "jobs",
			};
			default:
			return {};
		}
	}

	const fakeDatum = [];
	for (let i = 0; i < 3; i++) {
		fakeDatum.push(generateFakeData("news"));
		fakeDatum.push(generateFakeData("events"));
	}

    for (let i = 0; i < 6; i++) {
		fakeDatum.push(generateFakeData("jobs"));
		fakeDatum.push(generateFakeData("postTags"));
	}
</script>

<template>
    <section class="py-24 px-3 md:px-0 bg-white dark:bg-gray-900">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
                <div class="lg:col-span-8">
                    <div class="flex items-center overflow-x-auto whitespace-nowrap">
                        <NuxtLink to="/bulletin" class="text-sm text-gray-600 dark:text-gray-200 hover:underline">
                            Home
                        </NuxtLink>

                        <span class="mx-3 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>

                        <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline">
                            Events
                        </a>

                        <span class="mx-3 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>

                        <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline">
                            {{ faker.lorem.word() }}
                        </a>
                    </div>

                    <article class="relative group overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-6">
                        <img alt="Office" :src=" faker.image.urlPicsumPhotos()" class="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-125" />

                        <div class="relative h-full bg-gradient-to-t from-gray-900/80 to-gray-900/20 pt-32 sm:pt-48 lg:pt-64">
                            <div class="p-4 sm:p-6">
                                <span class="badge badge-primary dark:bg-gray-300 dark:text-gray-700 absolute top-4 md:top-6">{{ faker.lorem.word() }}</span>

                                <time datetime="2022-10-10" class="block text-xs text-white/90">
                                    10th Oct 2022
                                </time>

                                <h3 class="mt-0.5 text-2xl text-white font-semibold line-clamp-2">
                                    {{ faker.lorem.sentence() }}
                                </h3>

                                <div class="flex flex-wrap items-center gap-4 mt-2">
                                    <span class="block text-xs text-white/90">By Bulletin</span>
                                    <span class="block text-xs text-white/90">2 minutes read</span>
                                    <span class="block text-xs text-white/90">1.4k views</span>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div class="mt-8">
                        <p class="text-gray-700 leading-relaxed dark:text-gray-200">{{ faker.lorem.paragraph() }}</p>
                        <p class="text-gray-700 leading-relaxed dark:text-gray-200 mt-3">{{ faker.lorem.paragraphs(5) }}</p>
                        <p class="text-gray-700 leading-relaxed dark:text-gray-200 mt-3">{{ faker.lorem.paragraphs(6) }}</p>
                    </div>
                </div>
                <div class="lg:col-span-4 space-y-6">

                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
                            Related News
                        </h2>

                        <article v-for="post in fakeDatum.filter((post) => post.type === 'news')" :key="post.id" class="flex overflow-hidden bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800">
                            <div class="w-1/3 bg-cover" :style="`background-image: url('${post.thumbnail}')`"></div>
    
                            <div class="w-2/3 p-4 md:p-4">
                                <NuxtLink to="/bulletin/post-single">
                                    <h4 class="text-base font-semibold text-gray-800 dark:text-white line-clamp-2 leading-tight hover:underline">
                                        {{ post.title }}
                                    </h4>
                                </NuxtLink>
    
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Oct 31, 2023</p>
                            </div>
                        </article>
                    </div>

                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
                            Latest Events
                        </h2>

                        <article v-for="event in fakeDatum.filter((event) => event.type === 'events')" :key="event.id" class="flex overflow-hidden bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800">
                            <div class="w-1/3 bg-cover" :style="`background-image: url('${event.thumbnail}')`"></div>
    
                            <div class="w-2/3 p-4 md:p-4">
                                <NuxtLink to="/bulletin/post-single">
                                    <h4 class="text-base font-semibold text-gray-800 dark:text-white line-clamp-2 leading-tight hover:underline">
                                        {{ event.title }}
                                    </h4>
                                </NuxtLink>
    
                                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Oct 31, 2023</p>
                            </div>
                        </article>
                    </div>

                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold text-gray-800 capitalize dark:text-white">
                            Tags
                        </h2>

                        <div class="flex flex-wrap gap-1">
                            <nuxt-link to="/bulletin/post-single" v-for="tag in fakeDatum.filter((tag) => tag.type === 'postTags')" :key="tag.id" class="badge badge-primary bg-gray-200 text-gray-700 text-sm">
                                {{ tag.name }}
                            </nuxt-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="py-24 px-3 md:px-0">
        <div class="container">
            <div class="text-left">
                <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Jobs</h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 mt-8">
                <div class="card" v-for="job in fakeDatum.filter((job) => job.type === 'jobs')" :key="job.id">
                    <div class="card-body">
                        <div class="flex items-center justify-between">
                            <span class="text-sm font-light text-gray-800 dark:text-gray-400">Full-time</span>
                            <span class="badge badge-primary">psychology</span>
                        </div>

                        <div class="mb-2">
                            <h1 class="mt-2 text-lg font-semibold capitalize text-gray-800 dark:text-white">
                                {{ job.title }}
                            </h1>
                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                                {{ job.description }}
                            </p>
                        </div>

                        <a href="#" class="text-sm text-primary-600 dark:text-primary-400 hover:underline" tabindex="0" role="link">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>