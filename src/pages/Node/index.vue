<script setup lang="ts">
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from '@/components/ui/sheet';
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
            <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
</template>