<template>
    <VueDatePicker
        time-picker
        hide-input-icon
        :clearable="false"
        :model-value="formatDateForDatePicker"
        @update:modelValue="onModelValueUpdate"
    >
    </VueDatePicker>
</template>
  
<script setup lang="ts">
import type { TimeModel } from '@vuepic/vue-datepicker';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { computed } from 'vue';

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const formatDateForDatePicker = computed(() => {
    const [hours, minutes] = props.modelValue.split(':')
    return {
        hours: Number(hours),
        minutes: Number(minutes)
    }
})

const formatDateToParent = (date: TimeModel) => {
    return `${date.hours}:${date.minutes}`
}

const onModelValueUpdate = (value: TimeModel) => {
    emit('update:modelValue', formatDateToParent(value))
}

</script>

<style>
:root {
    --dp-input-padding: 6px
}
</style>