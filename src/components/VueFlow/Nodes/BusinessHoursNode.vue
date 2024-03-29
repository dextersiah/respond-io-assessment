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
import type { NodeProps } from '@vue-flow/core';
import { Calendar } from 'lucide-vue-next';

const props = defineProps<NodeProps<NodeData>>()

</script>

<style scoped>

</style>