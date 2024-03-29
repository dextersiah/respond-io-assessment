
<script setup lang="ts">
import { useFlowChart } from '@/stores/flowchart';
import { Background } from '@vue-flow/background';
import { VueFlow } from '@vue-flow/core';
import AddCommentNode from './Nodes/AddCommentNode.vue';
import BusinessHoursNode from './Nodes/BusinessHoursNode.vue';
import DateTimeConnector from './Nodes/DateTimeConnector.vue';
import MessageNode from './Nodes/MessageNode.vue';
import TriggerNode from './Nodes/TriggerNode.vue';


// State
const flowChart = useFlowChart()

</script>

<template>
    <VueFlow
        v-if="flowChart.nodes.length"
        :nodes="flowChart.nodes"
        :edges="flowChart.edges"
        :fit-view-on-init="true"
    >
        <template #node-trigger="props">
            <TriggerNode v-bind="props" />
        </template>

        <template #node-dateTime="props">
            <BusinessHoursNode v-bind="props" />
        </template>

        <template #node-dateTimeConnector="props">
            <DateTimeConnector v-bind="props" />
        </template>

        <template #node-sendMessage="props">
            <MessageNode v-bind="props" />
        </template>

        <template #node-addComment="props">
            <AddCommentNode v-bind="props" />
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