
import { computed } from "vue"
import { useRoute } from "vue-router"

export const useNode = () => {
    const route = useRoute()


    const currentNodeId = computed(() => {
        return route.params.id as string
    })

    return {
        currentNodeId
    }
}