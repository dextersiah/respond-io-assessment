<template>
    <img 
        :src="props.src" 
        :alt="props.src"
        width="200"
    >
</template>

<script setup lang="ts">
const props = defineProps<{
    src: string,
}>()
</script>

<style scoped>

</style>