<template>
    <div class="page page-post p-0">
        <PostDetailsComponent :post="post"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'HomePage',
    transition: 'page',
    async asyncData(ctx: any) {
        const data = await ctx.app.$services.posts.find(ctx.params.id);
        
        return {
            post: data.data[0],
        }
    }
});
</script>
