
<script setup lang="ts">
import { initialData } from '@/lib/constants';
import { Background } from '@vue-flow/background';
import { Position, VueFlow } from '@vue-flow/core';
import { ref } from 'vue';
import CustomNode from './Nodes/CustomNode.vue';

const initialNodes = ref(initialData)

</script>

<template>
    <VueFlow 
        v-model="initialNodes"
        :fit-view-on-init="true"
    >
        <template #node-trigger="props">
            <CustomNode
                :id="props.id"
                icon="🚀"
                :title="props.data.label"
                :node-handle-position="Position.Bottom"
            />
        </template>

        <template #node-dateTime="props">
            <CustomNode
                :id="props.id"
                icon="🚀"
                :title="props.data.label"
                :node-handle-position="Position.Bottom"
            />
        </template>

        <template #node-dateTimeConnector="props">
            <CustomNode
                :id="props.id"
                icon="🚀"
                :title="props.data.label"
                :node-handle-position="Position.Bottom"
            />
        </template>

        <template #node-sendMessage="props">
            <CustomNode
                :id="props.id"
                icon="🚀"
                :title="props.data.label"
                :node-handle-position="Position.Bottom"
            />
        </template>

        <template #node-addComment="props">
            <CustomNode
                :id="props.id"
                icon="🚀"
                :title="props.data.label"
                :node-handle-position="Position.Bottom"
            />
        </template>


        <Background  />
    </VueFlow>  
</template>


<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';

/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';
</style>