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
            <GlobalText 
                tag="p" v-for="payload in textPayload"
                :key="payload.text" 
            >
                {{ payload.text }}
            </GlobalText>
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

import GlobalText from '@/components/Global/Text.vue';
import type { NodeData } from '@/types/NodeData';
import { Handle, Position, type NodeProps } from '@vue-flow/core';
import { Calendar } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps<NodeProps<NodeData>>()


const textPayload = computed(() => {
    return props?.data?.payload?.filter((item) => item.type === 'text')
})

</script>

<style scoped>

</style>