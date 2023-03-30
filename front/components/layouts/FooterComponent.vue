<template>
    <footer class="mt-auto py-4 bg-white border-t border-slate-200">
        <p class="text-center text-sm">&copy;{{ year }} Blog | All rights reserved.</p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FooterComponent',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
})
</script>
