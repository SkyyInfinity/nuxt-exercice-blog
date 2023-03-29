<template>
    <div class="posts">
        <ul class="posts-list grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <li v-for="post in posts" :key="post.id" class="post bg-white rounded-lg overflow-hidden border border-slate-200 hover:scale-[1.02] transition">
                <NuxtLink :to="`/posts/${post.id}`">
                    <div class="post-thumbs w-full h-[200px]">
                        <img class="w-full h-full object-cover" src="https://placehold.co/600x300" alt="Placeholder image" loading="lazy">
                    </div>
                    <div class="post-details p-8 grid gap-2">
                        <h2 class="post-details__title font-bold text-xl">{{ post.title }}</h2>
                        <p class="post-details__content text-ellipsis-multiline leading-6 opacity-70">{{ post.content }}</p>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostListComponent',
    props: {
        posts: {
            type: Array,
            required: true,
        },
    }
});
</script>
