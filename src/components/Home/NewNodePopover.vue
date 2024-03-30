<template>
    <div class="fixed top-5 right-5">
        <Popover>
            <PopoverTrigger as-child>
                <Button>
                    Create New Node
                </Button>
            </PopoverTrigger>
            <PopoverContent align="center" :collision-padding="20">
                <FormNewNode />
            </PopoverContent>   
        </Popover>
    </div>
</template>

<script setup lang="ts">
import FormNewNode from '@/components/Home/Form/NewNode.vue';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
</script>