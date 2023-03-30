<template>
    <label 
        :for="forInput"
        class="block text-sm font-medium text-gray-700"
    ><slot></slot></label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LabelComponent',
    props: {
        forInput: {
            type: String,
            required: true,
        }
    },
});

// HOW TO USE: <LabelComponent for-input="firstName">Your first name</LabelComponent>
</script>
