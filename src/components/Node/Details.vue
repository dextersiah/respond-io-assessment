<template>
    <ScrollArea class="scroll-height">
        <div class="flex flex-col px-1 scroll-height">
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

            <component :is="nodeDetailsComponent" class="mb-10" />
        
          
            <AlertDialog>
                <AlertDialogTrigger as-child>
                    <Button 
                        variant="destructive" 
                        class="w-full mt-auto"
                    >
                        Delete Node
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your node.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction @click="deleteNodeHandler">Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    </ScrollArea>
</template>


<script lang="ts">
export const NODES_INJECTION_KEY = Symbol() as InjectionKey<NODES_INJECT_PARAMS>
</script>

<script setup lang="ts">
import GlobalText from '@/components/Global/Text.vue';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useNode } from '@/composables/node';
import { SHEET_INJECTION_KEY } from '@/pages/Node/index.vue';
import { useFlowChart } from '@/stores/flowchart';
import type { NODES_INJECT_PARAMS, SHEET_INJECT_PARAMS } from '@/types/InjectionParams';
import type { NodeData, NodeWithData } from '@/types/NodeData';
import { computed, defineAsyncComponent, inject, provide, ref, type InjectionKey } from 'vue';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import DetailsDialog from './DetailsDialog.vue';

const { currentNodeId } = useNode();
const { getNodeById, deleteNode } = useFlowChart()

const node = ref<NodeWithData| undefined>(getNodeById(currentNodeId.value))

provide(NODES_INJECTION_KEY, {
    nodeData: node.value?.data as NodeData,
    formCallback: () => {
        node.value = getNodeById(currentNodeId.value);
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
    deleteNode(currentNodeId.value)
    injectSheet?.hideSheet()
}

</script>

<style scoped lang="scss">
.scroll-height {
    height: calc(100vh - 3rem);
}
</style>