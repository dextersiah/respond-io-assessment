import type { NewNode } from "@/components/Home/Form/NewNode.vue";
import initialData from "@/lib/initialData.json";
import type { NodeData } from "@/types/NodeData";
import { Position, useVueFlow, type DefaultEdge, type Node } from "@vue-flow/core";
import { defineStore } from "pinia";
import { nextTick, onMounted, ref } from "vue";


let id = 0

const getId = () => {
    return `node_${id++}`
}

//@ts-ignore vueflow type imports causing error
export const useFlowChart = defineStore("flowchart", () => {
    const nodes = ref<Node<NodeData>[]>([]);
    const edges = ref<DefaultEdge[]>([]);

    const { addNodes, fitView, onNodesInitialized } = useVueFlow();

    /**
     * Events / Lifecycles
     */
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

        edges.value = initialData
            .filter((node) => node.parentId !== "-1")
            .map((node) => {
                return { 
                    id: node.id.toString(),
                    source: node.parentId,
                    target: node.id.toString(),
                    type: "smoothstep",
                    sourcePosition: Position.Bottom,
                    targetPosition: Position.Top,
                }
            })
    })

    onNodesInitialized(() => {
        nextTick(() => {
            fitView()
        })
    })
 

    const addNewNode = (node: NewNode) => {
        const nodeId = getId()

        addNodes({
            id: nodeId,
            position: { x: 0, y: 0 },
            type: node.nodeType,
            data: {
                label: node.title,
                payload: [
                    {
                        type: "text",
                        text: node.description
                    }
                ]
            }
        })
    }
 

    return { 
        nodes,
        edges,
        addNewNode
    };
});
