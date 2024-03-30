<template>
    <Card class="max-w-[200px]">
        <CardHeader>
            <CardTitle class="font-medium flex gap-2 items-center">
                <SendHorizonal 
                    color="#1DC616"
                    :width="18"
                />
                {{ props.data.label }}
            </CardTitle>
        </CardHeader>
        <CardContent class="space-y-5">
            <template
                v-for="message in props.data.payload" 
                :key="message.text"
            >
                <NodeContentImage
                    v-if="message.type === 'attachment' && message.attachment"
                    :src="message.attachment"
                />

                <NodeContentMessage
                    v-if="message.type === 'text'">
                    {{ message.text }}
                </NodeContentMessage>   
            </template>
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
import { SendHorizonal } from 'lucide-vue-next';
import NodeContentImage from '../NodeContentImage.vue';
import NodeContentMessage from '../NodeContentMessage.vue';

const props = defineProps<NodeProps<NodeData>>()
 
</script>

<style scoped>

</style>