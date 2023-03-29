<template>
    <div class="page page-add__post">
        <form class="add" @submit.prevent="handleSubmit">
            <div class="field">
                <label for="title">Titre</label>
                <input id="title" type="text" placeholder="Titre de l'article">
            </div>
            <div class="field">
                <label for="author">Auteur</label>
                <input id="author" type="number" placeholder="Auteur de l'article">
            </div>
            <div class="field">
                <label for="content">Contenu</label>
                <textarea id="content" name="story" rows="5" cols="33" placeholder="Contenu de l'article"></textarea>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'AddPostPage',
    transition: 'page',
    data() {
        return {
            post: Array
        }
    },
    methods: {
        handleSubmit(e: any) {
            console.log(e.target.elements);
        }
    }
});
</script>
