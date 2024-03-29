import initialData from "@/lib/initialData.json";
import type { NodeData } from "@/types/NodeData";
import type { Edge, Node } from "@vue-flow/core";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

//@ts-ignore vueflow type imports causing error
export const useFlowChart = defineStore("flowchart", () => {
    const nodes = ref<Node<NodeData>[]>([]);
    const edges = ref<Edge[]>([]);

    onMounted(() => {
        nodes.value = initialData.map((node) => {
            return {
                id: node.id.toString(),
                type: node.type,
                position: node.position,
                data: {
                    label: node.name,
                    ...node.data
                },
            };
        })
    })
 

    return { 
        nodes,
        edges 
    };
});
