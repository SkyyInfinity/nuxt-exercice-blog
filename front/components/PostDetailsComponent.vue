<template>
    <div class="post relative">
        <div class="post-thumbs w-full h-[300px]">
            <img class="w-full h-full object-cover" src="https://placehold.co/600x300" alt="Placeholder image" loading="lazy"/>
        </div>
        <div class="container py-8">
            <div class="title flex flex-col gap-3 mb-8">
                <ButtonComponent to="/" title="Retour">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgba(255,255,255,1)"/></svg>
                    
                </ButtonComponent>
                <h1 class="text-4xl font-bold">{{ post.title }}</h1>
            </div>
            <p class="post-details__content leading-6 opacity-70">{{ post.content }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PostDetailsComponent',
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
})
</script>
