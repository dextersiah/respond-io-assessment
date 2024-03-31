<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { ref } from 'vue';
import FormNodeDetails from './Form/NodeDetails.vue';

const dialogState = ref(false)
</script>

<template>
    <Dialog :open="dialogState">
        <DialogTrigger as-child>
            <Button variant="link" size="sm" @click="dialogState = true">
                Edit
            </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Edit Node Details</DialogTitle>
                <DialogDescription>
                    Update the details of the node.
                </DialogDescription>
            </DialogHeader>
            <FormNodeDetails @on-close="dialogState = false"/>
        </DialogContent>
    </Dialog>
</template>