<template>
    <div>
        <DailyBusinessHours 
            v-for="time in injectedNodeDetails?.nodeData?.times || []" 
            :key="time.day"
            :time="time"
            ref="businessHoursRef"
        />

        <Button 
            class="mt-5" 
            @click="onSaveChangesClickHandler"
        >
            Save Changes
        </Button>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { SHEET_INJECTION_KEY } from '@/pages/Node/index.vue';
import { useFlowChart } from '@/stores/flowchart';
import type { NODES_INJECT_PARAMS, SHEET_INJECT_PARAMS } from '@/types/InjectionParams';
import { inject, ref } from 'vue';
import { useRoute } from 'vue-router';
import { NODES_INJECTION_KEY } from '../Details.vue';
import DailyBusinessHours from './DailyBusinessHours.vue';


const { updateSpecificNodeData } = useFlowChart()
const route= useRoute()

const injectedNodeDetails = inject<NODES_INJECT_PARAMS>(NODES_INJECTION_KEY)
const injectSheet = inject<SHEET_INJECT_PARAMS>(SHEET_INJECTION_KEY)

const businessHoursRef = ref<InstanceType<typeof DailyBusinessHours>[] | null>(null)

const onSaveChangesClickHandler = () => {
    if (businessHoursRef.value) {
        const times = businessHoursRef.value.map(bh => bh.timeData)

        updateSpecificNodeData(route.params.id as string, { 
            times
        })

        injectSheet?.hideSheet()
    }
}

</script>

<style scoped>

</style>