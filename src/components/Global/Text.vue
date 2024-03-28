<template>
    <component :is="props.tag" :class="computeClass">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface TextProps {
    tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'small',
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold',
}

const props = withDefaults(defineProps<TextProps>(), {
    weight: 'normal'
})

const computeClass = computed(() => {
    return {
        'text-h1': props.tag === 'h1',
        'text-h2': props.tag === 'h2',
        'text-h3': props.tag === 'h3',
        'text-h4': props.tag === 'h4',
        'text-h5': props.tag === 'h5',
        'text-h6': props.tag === 'h6',
        'text-p': props.tag === 'p',
        'text-span': props.tag === 'span',
        'text-light': props.weight === 'light',
        'text-normal': props.weight === 'normal',
        'text-medium': props.weight === 'medium',
        'text-semibold': props.weight === 'semibold',
        'text-bold': props.weight === 'bold',
        'text-extrabold': props.weight === 'extrabold'
    }
})

</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/mixins' as *;

.text-h1{
    @apply text-3xl;
}

.text-h2{
    @apply text-2xl;
}

.text-h3{
    @apply text-xl;
}

.text-h4{
    @apply text-lg;
}

.text-h5 {
    @apply text-base;
}

.text-h6{
    @apply text-sm;
}

.text-p {
    @apply text-sm;
}

.text-span {
    @apply text-xs;
}

.text-light{
    @apply font-light;
    display: block;
}

.text-normal {
    @apply font-normal;
}

.text-medium {
    @apply font-medium;
}

.text-semibold {
    @apply font-semibold;
}

.text-bold {
    @apply font-bold;
}

.text-extrabold {
    @apply font-extrabold;
}

/**
    Responsive
*/

@include responsive(md) {
    .text-h1 {
        @apply text-4xl;
    }

    .text-h2 {
        @apply text-3xl;
    }

    .text-h3 {
        @apply text-2xl;
    }

    .text-h4 {
        @apply text-xl;
    }

    .text-h5 {
        @apply text-lg;
    }

    .text-h6 {
        @apply text-base;
    }

    .text-p {
        @apply text-base;
    }

    .text-span {
        @apply text-sm;
    }
}

@include responsive(lg) {
    .text-h1 {
        @apply text-5xl;
    }

    .text-h2 {
        @apply text-4xl;
    }

    .text-h3 {
        @apply text-3xl;
    }

    .text-h4 {
        @apply text-2xl;
    }

    .text-h5 {
        @apply text-xl;
    }

    .text-h6 {
        @apply text-lg;
    }

    .text-p {
        @apply text-base;
    }

    .text-span {
        @apply text-sm;
    }
}

</style>