<template>
    <Card>
        <CardHeader>
            <CardTitle class="font-medium flex gap-2 items-center">
                <Calendar 
                    color="#C26A16"
                    :width="18"
                />
                {{ props.data.label }}
            </CardTitle>
        </CardHeader>
        <CardContent>
            Business Hours - {{ props.data.timezone }}
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
import { Calendar } from 'lucide-vue-next';

const props = defineProps<NodeProps<NodeData>>()

</script>

<style scoped>

</style>