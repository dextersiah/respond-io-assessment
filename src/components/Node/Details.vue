<template>
    <div class="mt-5">
        <div class="flex justify-between items-center">
            <div class="space-y-3">
                <GlobalText tag="h4" weight="bold">
                    {{ node?.data?.label }}
                </GlobalText>

                <GlobalText tag="span">
                    {{ node?.data?.payload?.find((item) => item.type === 'text')?.text }}
                </GlobalText>
            </div>
            <DetailsDialog />
        </div>

        <Separator class="my-5"/>

        <component :is="nodeDetailsComponent" />
    </div>
</template>

<script setup lang="ts">
import GlobalText from '@/components/Global/Text.vue';
import { useFlowChart } from '@/stores/flowchart';
import type { NodeData } from '@/types/NodeData';
import type { Node } from '@vue-flow/core';
import { computed, defineAsyncComponent, provide, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Separator } from '../ui/separator';
import DetailsDialog from './DetailsDialog.vue';

const route = useRoute();
const { getNodeById } = useFlowChart()

const node = ref<Node<NodeData> | undefined>(getNodeById(route.params.id as string))

provide('nodeData', {
    nodeData: node?.value?.data,
    formCallback: () => {
        node.value = getNodeById(route.params.id as string);
    }
})


const nodeDetailsComponent = computed(() => {
    switch (node.value?.type) {
    case 'dateTime':
        return defineAsyncComponent(() => import('@/components/Node/Form/BusinessHours.vue'))
    case 'sendMessage':
        return defineAsyncComponent(() => import('@/components/Node/Form/SendMessage.vue'))
    case 'addComment':
        return defineAsyncComponent(() => import('@/components/Node/Form/AddComments.vue'))
    default:
        return null;
    }
})

</script>

<style scoped>

</style>