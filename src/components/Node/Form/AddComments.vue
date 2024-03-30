<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { SHEET_INJECTION_KEY } from '@/pages/Node/index.vue'
import { useFlowChart } from '@/stores/flowchart'
import type { NODES_INJECT_PARAMS, SHEET_INJECT_PARAMS } from '@/types/InjectionParams'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import * as z from 'zod'
import { NODES_INJECTION_KEY } from '../Details.vue'

/**
 * Composables / Store
 */
const { updateSpecificNodeData } = useFlowChart()
const route = useRoute()


/**
 * State
 */
const injectedNodeDetails = inject<NODES_INJECT_PARAMS>(NODES_INJECTION_KEY)
const injectSheet = inject<SHEET_INJECT_PARAMS>(SHEET_INJECTION_KEY)

/**
 * Schema
 */
const Form = z.object({
    comment: z.string().min(2).max(100)
})

const formSchema = toTypedSchema(Form)

export type NewNode = z.infer<typeof Form>

const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        comment: injectedNodeDetails?.nodeData?.comment || '',
    }
})

const onSubmit = handleSubmit((values) => {
    updateSpecificNodeData(route.params.id as string, values)
    injectSheet?.hideSheet()
})
</script>

<template>
    <form class="space-y-5" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="comment">
            <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                    <Textarea type="text" placeholder="Add your comment" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button type="submit">
            Save Changes
        </Button>
    </form>
</template>