<template>
    <Card>
        <CardHeader>
            <CardTitle class="font-medium flex gap-2 items-center">
                <Zap 
                    color="#c22262"
                    :width="18"
                />
                {{ props.data.label }}
            </CardTitle>
        </CardHeader>
        <CardContent>
            Conversation Opened
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

import type { NodeProps } from '@vue-flow/core';
import { Zap } from 'lucide-vue-next';

const props = defineProps<NodeProps>()
 
</script>

<style scoped>

</style>