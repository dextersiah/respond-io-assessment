<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(100),
    type: z.enum(['sendMessage', 'addComment', 'businessHours']),
}))

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
    console.log(values);
    
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
                    <Input type="text" placeholder="Add your description" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button type="submit">
            Submit
        </Button>
    </form>
</template>