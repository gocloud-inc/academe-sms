<script setup>
    import { faker } from '@faker-js/faker';
    import hero from "~/assets/img/vector/bulletin-hero-bg.svg"

    definePageMeta({
        layout: "bulletin"
    })

    useSeoMeta({
		title: 'Bulletin',
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

            case "jobs":
			return {
				id: faker.string.uuid(),
                thumbnail: faker.image.avatarLegacy(),
                title: faker.lorem.word(),
                description: faker.lorem.paragraph(),
				type: "jobs",
			};

            case "faqs":
			return {
				id: faker.string.uuid(),
                question: faker.lorem.sentence(),
                answer: faker.lorem.paragraphs(),
				type: "faqs",
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
	}

    for (let i = 0; i < 5; i++) {
		fakeDatum.push(generateFakeData("faqs"));
	}

    const heroBanner = {
        backgroundImage: `url(${hero})`,
    }
</script>

<template>
    <section class="hero-section pb-40 py-48 relative bg-no-repeat bg-cover bg-center px-3 md:px-0" :style="heroBanner">
        <div class="container">

            <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">
                <div class="lg:col-span-7">
                    <h1 class="relative text-center md:text-left md:max-w-2xl flex flex-col text-3xl lg:text-5xl md:text-4xl text-gray-700 font-bold dark:text-gray-100">
                        Stay informed about upcoming events
                    </h1>
        
                    <p class="relative text-center md:text-left mt-3 md:max-w-xl text-base text-gray-700 dark:text-gray-200">
                        The bulletin board is a great place to stay in the loop with what's happening at school. Check it regularly for announcements about upcoming events, important dates, and other news.
                    </p>
        
                    <div class="relative flex flex-wrap mt-8 gap-4">
                        <NuxtLink to="/admission/applicant-type" class="button button-primary button-lg rounded-full max-sm:w-full">
                            Enroll Now
                        </NuxtLink>
        
                        <a href="tel:" class="button button-secondary button-lg rounded-full max-sm:w-full bg-transparent dark:bg-gray-200 dark:text-gray-700">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div class="lg:col-span-5">
                    <img class="hidden lg:block w-full relative" src="~/assets/img/vector/bulletin-hero.svg" alt="">
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 px-3 md:px-0 bg-white dark:bg-gray-900">
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

    <section class="py-24 px-3 md:px-0">
        <div class="container">
            <div class="text-left">
                <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Latest News</h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 mt-8">
                <article v-for="news in fakeDatum.filter((news) => news.type === 'news')" :key="news.id" class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        :src="news.thumbnail"
                        class="h-56 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6 h-full dark:bg-gray-800">
                        <time datetime="2022-10-10" class="block text-xs text-gray-500">
                            10th Oct 2022
                        </time>

                        <NuxtLink to="/bulletin/post-single">
                            <h3 class="mt-0.5 text-lg text-gray-900 font-semibold line-clamp-2 hover:underline dark:text-gray-100">
                                {{ news.title }}
                            </h3>
                        </NuxtLink>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-300">
                            {{ news.description }}
                        </p>

                        <NuxtLink to="/bulletin/post-single" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                            Find out more

                            <span aria-hidden="true"  class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </NuxtLink>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section class="py-24 px-3 md:px-0 bg-white dark:bg-gray-900">
        <div class="container">
            <div class="text-left">
                <h2 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Upcoming Events
                </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 mt-8">
                <article v-for="event in fakeDatum.filter((event) => event.type === 'events')" :key="event.id" class="relative group overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img alt="Office" :src="event.thumbnail" class="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-125" />

                    <div class="relative h-full bg-gradient-to-t from-gray-900/80 to-gray-900/20 pt-32 sm:pt-48 lg:pt-64">
                        <div class="p-4 sm:p-6">
                            <time datetime="2022-10-10" class="block text-xs text-white/90">
                                10th Oct 2022
                            </time>

                            <NuxtLink to="/bulletin/post-single">
                                <h3 class="mt-0.5 text-lg text-white font-semibold line-clamp-2">
                                    {{ event.title }}
                                </h3>
                            </NuxtLink>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                {{ event.description }}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section class="py-24 px-3 md:px-0">
        <div class="container">
            <h2 class="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white text-center">Frequently asked questions.</h2>

            <div class="mt-10 space-y-2 lg:max-w-3xl mx-auto">
                <details v-for="faq in fakeDatum.filter((faq) => faq.type === 'faqs')" :key="faq.id" class="group p-6 border bg-white rounded-xl [&_summary::-webkit-details-marker]:hidden dark:bg-gray-800 dark:border-gray-700">
                    <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-700 dark:text-gray-100">
                        <h3 class="text-base lg:text-lg font-medium">
                            {{ faq.question }}
                        </h3>

                        <span class="relative h-5 w-5 shrink-0">
                            <IconsChevronDown class="absolute inset-0 shrink-0 transition duration-300 group-open:-rotate-180" />
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700 text-sm lg:text-base dark:text-gray-200">
                        {{ faq.answer }}
                    </p>
                </details>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>