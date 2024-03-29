<template>
    <Card>
        <CardHeader>
            <CardTitle>{{ props.title }}</CardTitle>
        </CardHeader>
        <CardContent>
            
        </CardContent>
    </Card>
    <Handle 
        :id="props.id" 
        :position="props.nodeHandlePosition"
        :type="props.nodeType"
    />
</template>

<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

import type { HandleType, Position } from '@vue-flow/core';
import { Handle } from '@vue-flow/core';


const props = defineProps<{
    id?: string,
    position?: { x?: number, y?: number },
    icon?: string,
    title?: string,
    description?: string,
    nodeHandlePosition?: Position,
    nodeType?: HandleType
}>()
</script>

<style scoped>

</style>