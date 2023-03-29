<template>
    <NuxtLink v-if="to" :to="to" :class="classes"><slot></slot></NuxtLink>
    <button v-else :class="classes" :type="type ? type : undefined"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonComponent',
    props: {
        to: {
            type: String,
            default: null,
            required: false,
        },
        type: {
            type: String as () => 'submit' | 'reset' | 'button',
            default: null,
        },
        color: {
            type: String as () => 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
            default: 'primary',
        },
    },
    data() {
        return {
            classes: 'flex gap-2 items-center w-max py-3 px-8 rounded-md text-white font-bold bg-slate-800 hover:bg-black transition'
        }
    }
});
</script>
