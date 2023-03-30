<template>
    <input 
        v-if="!isTextArea"
        :id="name" 
        :class="classes" 
        :type="type" 
        :name="name" 
        :placeholder="placeholder"
    >
    <textarea v-else :id="name" :class="classes" :placeholder="placeholder" :name="name" cols="30" rows="10"></textarea>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputComponent',
    props: {
        type: {
            type: String,
            default: 'text',
            required: false,
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: undefined,
            required: false
        },
        isTextArea: {
            type: Boolean,
            default: undefined,
            required: false
        }
    },
    data() {
        return {
            classes: 'border border-slate-200 rounded-lg p-2 w-full'
        }
    }
});

// HOW TO USE: <InputComponent type="text" name="firstName" placeholder="Your first name"/>
</script>
