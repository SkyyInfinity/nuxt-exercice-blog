<template>
    <div class="posts">
        <div>
            <TransitionGroup 
                tag="ul" 
                class="posts-list grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" 
                name="list"
                :css="false"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @leave="onLeave"
            >
                <li v-for="(post, index) in posts" :key="post.id" :data-index="index" class="post bg-white rounded-lg overflow-hidden border border-slate-200 hover:scale-[1.02] transition">
                    <NuxtLink :to="`/posts/${post.id}`">
                        <div class="post-thumbs w-full h-[200px]">
                            <img class="w-full h-full object-cover" src="https://placehold.co/600x300" alt="Placeholder image" loading="lazy">
                        </div>
                        <div class="post-details p-8 grid gap-2">
                            <h2 class="post-details__title font-bold text-xl">{{ post.title }}</h2>
                            <p class="post-details__content text-sm text-ellipsis-multiline leading-6 opacity-70">{{ post.content }}</p>
                        </div>
                    </NuxtLink>
                </li>
            </TransitionGroup>
        </div>
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
    },
    methods: {
        onBeforeEnter(el: any, done: any) {
            this.$gsap.set(el, {
                opacity: 0,
                height: 0,
            });
            done();
        },
        onEnter(el: any, done: any) {
            this.$gsap.to(el, {
                opacity: 1,
                height: '1.6em',
                delay: el.dataset.index * 0.9,
                onComplete: done
            });
        },
        onLeave(el: any, done: any) {
            this.$gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index * 0.3,
                onComplete: done
            });
        }
    }
});
</script>

<style>
    /* .list-move,
    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .list-leave-active {
        position: absolute;
    } */
</style>
