<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div :class="cn('flex flex-col gap-y-1.5 py-2 pl-4 pr-5', props.class)">
        <slot />
    </div>
</template>
