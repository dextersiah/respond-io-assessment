<template>
    <div class="row gap-3 items-center">
        <GlobalText tag="p" weight="bold" class="capitalize">
            {{props.time.day}}
        </GlobalText>
        
        <GlobalTimePicker 
            v-model="timeData.startTime" 
            label="Open" 
            class="mt-2"
        />

        <GlobalText tag="span" class="capitalize text-center">
            to
        </GlobalText>

        <GlobalTimePicker 
            v-model="timeData.endTime" 
            label="Open" 
            class="mt-2"
        />

    </div>
</template>

<script setup lang="ts">
import GlobalText from '@/components/Global/Text.vue';
import GlobalTimePicker from '@/components/Global/TimePicker.vue';
import type { Time } from '@/types/NodeData';
import { ref } from 'vue';


const props = defineProps<{
    time: Time
}>()

const timeData = ref<Time>(props.time)

defineExpose({ timeData })

</script>

<style scoped lang="scss">
.row {
    @apply grid items-center;
    grid-template-columns: 40px 100px 20px 100px;
}
</style>