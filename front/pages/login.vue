<template>
    <div class="page page-login">
        <div class="container">
            <div class="title flex gap-4 items-center mb-8">
                <ButtonComponent to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" fill="rgba(255,255,255,1)"/></svg>
                    Retour à l'accueil
                </ButtonComponent>
                <h1 class="text-4xl font-bold">Connexion</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LogInPage',
    transition: 'page',
});
</script>
