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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { nodeOptions } from '@/lib/constants'
import { useFlowChart } from '@/stores/flowchart'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

/**
 * Composables / Store
 */
const { addNewNode } = useFlowChart()


/**
 * Schema
 */
const Form = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(100),
    nodeType: z.enum(['sendMessage', 'addComment', 'businessHours']),
})

const formSchema = toTypedSchema(Form)

export type NewNode = z.infer<typeof Form>

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit(addNewNode)
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
                    <Input type="text" placeholder="Add your description" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="nodeType">
            <FormItem>
                <FormLabel>Node Type</FormLabel>

                <Select v-bind="componentField">
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a node type" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem 
                                v-for="option in nodeOptions"
                                :key="option.value"
                                :value="option.value"
                            >
                                {{option.label}}
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
        </FormField>

        <Button type="submit">
            Submit
        </Button>
    </form>
</template>