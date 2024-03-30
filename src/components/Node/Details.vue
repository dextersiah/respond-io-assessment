<template>
    <div class="mt-5">
        <div class="flex justify-between items-center">
            <div class="space-y-3">
                <GlobalText tag="h4" weight="bold">
                    {{ nodeData?.label }}
                </GlobalText>

                <GlobalText tag="span">
                    {{ nodeData?.payload?.find((item) => item.type === 'text')?.text }}
                </GlobalText>
            </div>
            <DetailsDialog />
        </div>
    </div>
</template>

<script setup lang="ts">
import GlobalText from '@/components/Global/Text.vue';
import { useFlowChart } from '@/stores/flowchart';
import type { NodeData } from '@/types/NodeData';
import { provide, ref } from 'vue';
import { useRoute } from 'vue-router';
import DetailsDialog from './DetailsDialog.vue';

const route = useRoute();
const { getNodeById } = useFlowChart()

const nodeData = ref<NodeData | undefined>(getNodeById(route.params.id as string)?.data)

provide('nodeData', {
    nodeData,
    formCallback: () => {
        nodeData.value = getNodeById(route.params.id as string)?.data;
    }
})

</script>

<style scoped>

</style>