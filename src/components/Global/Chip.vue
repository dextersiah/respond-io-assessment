<template>
    <div class='text-sm rounded py-2 px-4 flex items-center font-bold leading-6' :style="{
        color: props.foregroundColor,
        backgroundColor: props.backgroundColor,
    }">
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    foregroundColor: string,
    backgroundColor: string,
}>()
</script>

<style scoped>

</style>