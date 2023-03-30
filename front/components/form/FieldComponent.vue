<template>
    <div v-if="hasChild" :class="classes">
        <LabelComponent :for-input="name"><slot></slot></LabelComponent>
        <InputComponent :type="type" :name="name" :placeholder="placeholder"/>
    </div>
    <div v-else :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FieldComponent',
    props: {
        hasChild: {
            type: Boolean,
            default: false,
            required: false,
        },
        type: {
            type: String,
            default: 'text',
            required: false
        },
        name: {
            type: String,
            default: 'name',
            required: false
        },
        placeholder: {
            type: String,
            default: 'Your Name',
            required: false
        },
    },
    data() {
        return {
            classes: 'field mb-4 flex flex-col gap-1 text-sm font-medium text-gray-700'
        }
    },
});

// HOW TO USE: <FieldComponent :has-child="true" type="password" name="plainPassword" placeholder="Your Password">Your Password !</FieldComponent>
</script>
