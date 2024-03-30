<template>
    <Chip 
        class="capitalize" 
        foreground-color="#6b9cff"
        background-color="#e1ebff"
    >
        {{ props.data.connectorType }}
        <Handle :id="props.id" type="source" :position="Position.Bottom" />
        <Handle :id="props.id" type="target" :position="Position.Top" />
    </Chip>
</template>

<script setup lang="ts">

import Chip from '@/components/Global/Chip.vue';
import type { NodeData } from '@/types/NodeData';
import { Handle, Position, type NodeProps } from '@vue-flow/core';

const props = defineProps<NodeProps<NodeData>>()

</script>

<style scoped>

</style>