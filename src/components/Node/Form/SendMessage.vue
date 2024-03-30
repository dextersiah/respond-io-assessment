<template>
    <form class="space-y-5" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="message">
            <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Add your message" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>


        <FormField name="attachments">
            <FormItem>
                <FormLabel>Attachments</FormLabel>
                <FormControl>
                    <GlobalUploadFile @on-uploaded="onFileUploadedHandler" />
                    <GlobalImageGallery :images="values.attachments ?? []" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>


      
        
        <Button type="submit">
            Save Changes
        </Button>
    </form>
</template>

<script setup lang="ts">
import GlobalImageGallery from '@/components/Global/ImageGallery.vue'
import GlobalUploadFile from '@/components/Global/UploadFile.vue'
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { NODES_INJECTION_KEY, SHEET_INJECTION_KEY, type NODES_INJECT_PARAMS, type SHEET_INJECT_PARAMS } from '@/lib/injectionSymbols'
import { useFlowChart } from '@/stores/flowchart'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import * as z from 'zod'

/**
 * Composables / Store
 */
const injectedNodeDetails = inject<NODES_INJECT_PARAMS>(NODES_INJECTION_KEY)
const injectSheet = inject<SHEET_INJECT_PARAMS>(SHEET_INJECTION_KEY)

const route = useRoute()

const { updateSpecificNodeData } = useFlowChart()

/**
 * Schema
 */
const Form = z.object({
    message: z.string().min(2).max(100),
    attachments: z.array(z.string()),
})

type FormType = z.infer<typeof Form>
const formSchema = toTypedSchema(Form)

const { handleSubmit, values, setValues } = useForm({
    validationSchema: formSchema,
    initialValues: {
        message: injectedNodeDetails?.nodeData?.payload?.find((item) => item.type === 'text')?.text || '',
        attachments: injectedNodeDetails?.nodeData?.payload?.filter((item) => item.type === 'attachment').map((item) => item.attachment ?? '') || [],
    }
})

const parseValues = (values: FormType) => {
    return {
        payload: [
            {
                type: 'text',
                text: values.message
            },
            ...values.attachments.map((attachment) => ({
                type: 'attachment',
                attachment
            }))
        ]
    }
}

const onSubmit = handleSubmit((values) => {
    updateSpecificNodeData(route.params.id as string, parseValues(values))
    injectSheet?.hideSheet()
})

const onFileUploadedHandler = (value: string) => {
    setValues({
        attachments: [...values.attachments ?? '', value]
    })
}
</script>
