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
import FormNodeDetails from './Form/NodeDetails.vue';
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button variant="link" size="sm">
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
            <FormNodeDetails />
        </DialogContent>
    </Dialog>
</template>