<template>
  <div class="flex flex-col space-y-1">
    <label v-if="label" :for="id" class="text-sm font-medium">
      {{ label }}
      <span v-if="required" class="text-(--color-red)">*</span>
    </label>

    <div
      class="relative flex items-center bg-white"
      :class="[
        error
          ? 'border-(--color-red)'
          : 'border-(--color-very-light-muted-blue) focus-within:border-(--color-vibrant-orange)',
        'border rounded-sm transition duration-150',
      ]"
    >
      <span v-if="$slots.prefix" class="p-1 opacity-75">
        <slot name="prefix" />
      </span>

      <component
        :is="isTextarea ? 'textarea' : 'input'"
        :value="modelValue"
        v-bind="inputAttrs"
        class="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-700 bg-transparent focus:outline-none"
        :rows="isTextarea ? rows : undefined"
        @input="onInput"
      />

      <span v-if="$slots.suffix" class="p-1 opacity-75">
        <slot name="suffix" />
      </span>
    </div>

    <p v-if="error" class="text-sm text-(--color-red)">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: string | number | null
  type?: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  id?: string
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  required: false,
  disabled: false,
  error: '',
  rows: 3,
})

const emit = defineEmits(['update:modelValue'])

const isTextarea = computed(() => props.type === 'textarea')

const inputAttrs = computed(() => ({
  id: props.id,
  type: isTextarea.value ? undefined : props.type,
  placeholder: props.placeholder,
  disabled: props.disabled,
}))

function onInput(e: Event) {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>
