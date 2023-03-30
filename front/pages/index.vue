<template>
    <div class="page page-home">
        <div class="container">
            <div class="title flex justify-between gap-4 items-center mb-8">
                <h1 class="text-4xl font-bold">Liste des articles</h1>
                <ButtonComponent to="/posts/add">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="rgba(255,255,255,1)"/></svg>
                    Ajouter
                </ButtonComponent>
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
