<template>
    <Card>
        <CardHeader>
            <CardTitle class="font-medium flex gap-2 items-center">
                <MessageSquareMore 
                    color="#1D77EA"
                    :width="18"
                />
                {{ props.data.label }}
            </CardTitle>
        </CardHeader>
        <CardContent>
            {{ props.data.comment }}
        </CardContent>
        <Handle :id="props.id" type="source" :position="Position.Bottom" />
        <Handle :id="props.id" type="target" :position="Position.Top" />
    </Card>

</template>

<script setup lang="ts">
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';

import type { NodeData } from '@/types/NodeData';
import { Handle, Position, type NodeProps } from '@vue-flow/core';
import { MessageSquareMore } from 'lucide-vue-next';

const props = defineProps<NodeProps<NodeData>>()

</script>

<style scoped>

</style>