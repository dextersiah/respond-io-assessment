<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useFlowChart } from '@/stores/flowchart'
import type { NodeData } from '@/types/NodeData'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import * as z from 'zod'

/**
 * Composables / Store
 */
const { updateNode } = useFlowChart()
const route = useRoute()

const injectedNodeDetails = inject<{
    nodeData: NodeData | undefined,
    formCallback: () => void
        }>('nodeData')


/**
 * Schema
 */
const Form = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(100),
})

const formSchema = toTypedSchema(Form)

const { handleSubmit } = useForm({
    validationSchema: formSchema,
    initialValues: {
        title: injectedNodeDetails?.nodeData?.label || '',
        description: injectedNodeDetails?.nodeData?.payload?.find((item) => item.type === 'text')?.text || '',
    }
})

const onSubmit = handleSubmit((values) => {
    updateNode(values, route.params.id as string, () => {
        injectedNodeDetails?.formCallback()
    })
}) 
</script>

<template>
    <form class="space-y-5" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="title">
            <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Add your title" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
            <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Textarea
                        placeholder="Add your description"
                        v-bind="componentField"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button type="submit">
            Submit
        </Button>
    </form>
</template>