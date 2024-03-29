<script setup lang="ts">
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div :class="cn('p-6 pt-0', props.class)">
        <Separator class="mb-3" />
        <slot />
    </div>
</template>
