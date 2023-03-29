<template>
    <div class="page page-home">
        <div class="container">
            <h1 class="text-4xl font-bold mb-8">Liste des articles</h1>
            <PostListComponent :posts="posts"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'HomePage',
    async asyncData(ctx: any) {
        const datas = await ctx.app.$services.posts.findAll();

        return {
            posts: datas.data,
        }
    }
});
</script>
