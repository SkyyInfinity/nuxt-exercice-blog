<template>
    <div class="page page-home">
        <div class="container">
            <div class="title flex justify-between gap-4 items-center mb-8">
                <h1 class="text-4xl font-bold">Liste des articles</h1>
                <ButtonComponent to="/posts/add">Ajouter</ButtonComponent>
            </div>
            <PostListComponent :posts="posts"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'HomePage',
    transition: 'page',
    async asyncData(ctx: any) {
        const datas = await ctx.app.$services.posts.findAll();

        return {
            posts: datas.data,
        }
    }
});
</script>
