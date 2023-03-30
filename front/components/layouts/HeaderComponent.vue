<template>
    <header class="py-4 bg-white border-b border-slate-200">
        <div class="container flex justify-between gap-4">
            <h1 class="font-bold text-2xl">Logo</h1>
            <ul class="flex items-center gap-2">
                <li>
                    <NuxtLink to="/">Accueil</NuxtLink>
                </li>
            </ul>
            <ul class="flex items-center gap-2">
                <li>
                    <ButtonComponent to="/login">Connexion</ButtonComponent>
                </li>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderComponent'
})
</script>
