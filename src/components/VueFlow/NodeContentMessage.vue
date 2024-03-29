<template>
    <div>
        <GlobalText tag="span" class="line-clamp-3">
            <slot></slot>
        </GlobalText>
    </div>
</template>

<script setup lang="ts">
import GlobalText from '@/components/Global/Text.vue';
</script>

<style scoped>

</style>