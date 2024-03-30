<template>
    <div>
        <img :src="currentImage" :alt="currentImage" :width="300">
        <ul class="gallery-row">
            <li v-for="(image, index) in props.images" :key="image">
                <button @click="currentImageIndex = index">
                    <img :src="image" :alt="image" :width="80" :height="50">
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue';

const props = defineProps<{
    images: string[]
}>()

const currentImageIndex = shallowRef(0)

const currentImage = computed(() => props.images[currentImageIndex.value])
</script>

<style scoped lang="scss"> 
.gallery-row {
    @apply flex gap-2 w-full overflow-auto mt-2;

    li {
        @apply w-20 flex-shrink-0;
    }
}
</style>