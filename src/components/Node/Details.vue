<template>
    <div class="flex flex-col h-[inherit]">
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
        
        <Button 
            variant="destructive" 
            class="w-full mt-auto" 
            @click="deleteNodeHandler"
        >
            Delete Node
        </Button>
    </div>
</template>


<script lang="ts">
export const NODES_INJECTION_KEY = Symbol() as InjectionKey<NODES_INJECT_PARAMS>
</script>

<script setup lang="ts">
import GlobalText from '@/components/Global/Text.vue';
import { SHEET_INJECTION_KEY } from '@/pages/Node/index.vue';
import { useFlowChart } from '@/stores/flowchart';
import type { NODES_INJECT_PARAMS, SHEET_INJECT_PARAMS } from '@/types/InjectionParams';
import type { NodeData } from '@/types/NodeData';
import type { Node } from '@vue-flow/core';
import { computed, defineAsyncComponent, inject, provide, ref, type InjectionKey } from 'vue';
import { useRoute } from 'vue-router';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import DetailsDialog from './DetailsDialog.vue';

const route = useRoute();
const { getNodeById, deleteNode } = useFlowChart()

const node = ref<Node<NodeData> | undefined>(getNodeById(route.params.id as string))

provide(NODES_INJECTION_KEY, {
    // TODO: Temporary fix for reactivity issue
    nodeData: JSON.parse(JSON.stringify(node.value?.data)) as NodeData,
    formCallback: () => {
        node.value = getNodeById(route.params.id as string);
    }
})

const injectSheet = inject<SHEET_INJECT_PARAMS>(SHEET_INJECTION_KEY)

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

const deleteNodeHandler = () => {
    deleteNode(route.params.id as string)
    injectSheet?.hideSheet()
}

</script>

<style scoped>

</style>