<template>
    <div class="page page-add__post">
        <div class="container">
            <div class="title flex gap-4 items-center mb-8">
                <ButtonComponent to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgba(255,255,255,1)"/></svg>
                    Retour
                </ButtonComponent>
                <h1 class="text-4xl font-bold">Ajouter un article</h1>
            </div>
            <form class="add" @submit.prevent="handleSubmit">
                <!-- Title -->
                <FieldComponent :has-child="true" type="text" name="title" placeholder="Titre de l'article">Titre</FieldComponent>
                <!-- Author -->
                <FieldComponent :has-child="true" type="number" name="author" placeholder="Auteur de l'article">Auteur</FieldComponent>
                <!-- Content -->
                <FieldComponent type="text" name="title" placeholder="Titre de l'article">
                    <LabelComponent for-input="content">Contenu</LabelComponent>
                    <InputComponent :is-text-area="true" name="content" placeholder="Contenu de l'article"/>
                </FieldComponent>
                <!-- Submit -->
                <ButtonComponent type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="rgba(255,255,255,1)"/></svg>
                    Ajouter
                </ButtonComponent>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment-timezone';

export default Vue.extend({
    name: 'AddPostPage',
    transition: 'page',
    data() {
        return {
            post: Array
        }
    },
    methods: {
        async handleSubmit(e: any) {

            const title = e.target.elements.title.value;
            const author = e.target.elements.author.value;
            const content = e.target.elements.content.value;
            const date = moment.utc().local().format('YYYY-MM-DD H:mm:ss');

            const newPost = {
                title,
                author,
                content,
                date
            }

            const res = await this.$services.posts.create(newPost);

            if(res.status === 200) {
                console.log(res.data);
                //TODO Show notification

                // Redirect to posts list
                this.$router.push('/');
            } else {
                console.log('error', 'Cannot create record, please retry.');
            }
        }
    }
});
</script>
