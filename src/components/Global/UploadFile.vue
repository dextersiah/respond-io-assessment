<template>
    <div>
        <Button as-child variant="secondary">
            <label for="file" class="pointer">
                Upload New Attachment
            </label>
        </Button>
        <input type="file" hidden id="file" @change="onFileChanged" accept="image/*"/>
    </div>
</template>
  
<script setup lang="ts">
import { Button } from '@/components/ui/button';

// A ref to manage the displayed image URL
const emit = defineEmits<{
    (e: 'on-uploaded', value: string): void
}>()
  
// Function to handle file input change
function onFileChanged(event: Event) {
    const target = event.target as HTMLInputElement; // Type assertion here
    if (target && target.files) {
        const file = target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                // Ensure `e.target` is not null and has `result` property
                if (e.target && typeof e.target.result === 'string') {
                    emit('on-uploaded', e.target.result);
                }
            };
            reader.readAsDataURL(file);
        }
    }
}

</script>
  
  <style>
  .uploaded-image {
    width: 100%; /* Set as required */
    height: auto; /* Adjust based on your layout */
    border-radius: 5px; /* Optional: for rounded corners */
  }
  </style>
  