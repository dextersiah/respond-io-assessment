<script setup lang="ts">
import NodeDetails from '@/components/Node/Details.vue';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from '@/components/ui/sheet';
import { VisuallyHidden } from 'radix-vue';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';


/**
 * Composables
 */
const route = useRoute();
const router = useRouter()


/**
 * State
 */
const sheetState = ref(true);


/**
 * Watchers
 */
watch(() => route.query, () => {
    sheetState.value = true;
});

watch(sheetState, (value) => {
    if (!value) {
        setTimeout(() => {
            router.push({ name: 'home' });
        }, 500);
    }
});



</script>

<template>
    <Sheet v-model:open="sheetState">
        <SheetContent>
            <VisuallyHidden>
                <SheetHeader>
                    <SheetTitle>Node Details</SheetTitle>
                    <SheetDescription>
                        This is the node details sheet. It contains information about the node.
                    </SheetDescription>
                </SheetHeader>
            </VisuallyHidden>
            <NodeDetails />
        </SheetContent>
    </Sheet>
</template>