import type { NewNode } from "@/components/Home/Form/NewNode.vue";
import initialData from "@/lib/initialData.json";
import type { NodeData, NodeTypes, NodeWithData } from "@/types/NodeData";
import { Position, useVueFlow, type Connection, type DefaultEdge } from "@vue-flow/core";
import { defineStore } from "pinia";
import { nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";


let id = 0

const getId = () => {
    return `node_${id++}`
}

//@ts-ignore vueflow type imports causing error
export const useFlowChart = defineStore("flowchart", () => {

    const CLICKABLE_NODES: NodeTypes[] = ['sendMessage', 'addComment', 'dateTime', 'trigger'];

    const nodes = ref<NodeWithData[]>([]);
    const edges = ref<DefaultEdge[]>([]);

    const { addNodes, fitView, onNodesInitialized, onNodeClick, updateNodeData, removeNodes, onConnect, addEdges } = useVueFlow();
    const router = useRouter();

    /**
     * Events / Lifecycles
     */
    onMounted(() => {
        nodes.value = initialData.map((node) => {
            return {
                id: node.id.toString(),
                type: node.type as NodeTypes,
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

    onNodeClick((nodeMouseEvent) => {
        if(CLICKABLE_NODES.includes(nodeMouseEvent.node.type as NodeTypes)) {
            router.push(`/node/${nodeMouseEvent.node.id}`)
        }
    })

    onConnect((connection) => {
        addNewEdge(connection)
    })

    const addNewEdge = (connection: Connection) => {
        const edge = {
            id: connection.source + connection.target,
            source: connection.source,
            target: connection.target,
            type: "smoothstep",
            sourcePosition: Position.Bottom,
            targetPosition: Position.Top,
        }

        edges.value.push(edge)
        addEdges(connection)
    }
 

    const addNewNode = (node: NewNode) => {
        const nodeId = getId()

        const nodeData: NodeWithData = {
            id: nodeId,
            position: { x: 0, y: 0 },
            type: node.nodeType as NodeTypes,
            data: {
                label: node.title,
                payload: [
                    {
                        type: "text",
                        text: node.description
                    }
                ]
            }
        }


        nodes.value.push(nodeData)
        addNodes(nodeData)
    }

    const getNodeById = (id: string) => {
        return nodes.value.find((node) => node.id === id)
    }

    const updateNode = (node: Partial<NewNode>, nodeId: string, callback: Function) => {
        const index = nodes.value.findIndex((n) => n.id === nodeId)

        if (index !== -1) {
            const newNodeData = {
                ...nodes.value[index].data,
                label: node.title,
                payload: [
                    {
                        type: "text",
                        text: node.description
                    }
                ]
            }

            nodes.value[index] = {
                ...nodes.value[index],
                data: newNodeData
            }

            updateNodeData(nodes.value[index].id, newNodeData)

            callback()
        }

    }

    const deleteNode = (nodeId: string) => {
        const index = nodes.value.findIndex((n) => n.id === nodeId)

        if (index !== -1) {
            removeNodes([nodes.value[index]], true)
            deleteEdge(nodeId);

            nodes.value.splice(index, 1)
        }
    }

    const deleteEdge = (nodeId: string) => {
        const index = edges.value.findIndex((e) => e.id === nodeId)

        if (index !== -1) {
            edges.value.splice(index, 1)
        }
    }

    const updateSpecificNodeData = (nodeId: string, data: Partial<NodeData>) => {
        const index = nodes.value.findIndex((n) => n.id === nodeId)

        if (index !== -1) {

            const nodeData = {
                ...nodes.value[index].data,
                ...data
            }

            nodes.value[index] = {
                ...nodes.value[index],
                data: nodeData
            }

            updateNodeData(nodes.value[index].id, nodeData)
        }
    }
 

    return { 
        nodes,
        edges,
        addNewNode,
        getNodeById,
        updateNode,
        deleteNode,
        updateSpecificNodeData
    };
});
