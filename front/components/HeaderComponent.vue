<template>
    <header class="py-4 bg-white border-b border-slate-200">
        <div class="container flex justify-between gap-4">
            <h1 class="font-bold text-2xl">{{ title }}</h1>
            <ul class="flex gap-2">
                <li>Lien</li>
                <li>Lien</li>
                <li>Lien</li>
                <li>Lien</li>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderComponent',
    data() {
        return {
            title: 'Header',
        }
    },
})
</script>
