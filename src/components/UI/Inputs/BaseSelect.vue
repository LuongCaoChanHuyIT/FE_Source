<template>
  <div class="flex flex-col space-y-1">
    <!-- Label -->
    <label v-if="label" :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <!-- Select -->
    <div
      class="relative"
      :class="[
        error ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-500',
        'border rounded-lg transition duration-150',
      ]"
    >
      <select
        :id="id"
        :disabled="disabled"
        :value="modelValue"
        @change="onChange"
        class="w-full appearance-none bg-transparent px-3 py-2 text-sm text-gray-900 focus:outline-none rounded-lg"
      >
        <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
        <option
          v-for="(opt, index) in normalizedOptions"
          :key="index"
          :value="opt.value"
          :disabled="opt.disabled"
        >
          {{ opt.label }}
        </option>
      </select>

      <!-- Dropdown icon -->
      <span class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
        <i class="bx bx-chevron-down"></i>
      </span>
    </div>

    <!-- Error -->
    <p v-if="error" class="text-sm text-red-500">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface OptionItem {
  label: string
  value: string | number | boolean
  disabled?: boolean
}

interface Props {
  modelValue: string | number | boolean | null
  options: (string | OptionItem)[]
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  error?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  required: false,
  error: '',
  placeholder: '',
})

const emit = defineEmits(['update:modelValue'])

const normalizedOptions = computed<OptionItem[]>(() =>
  props.options.map((opt) => (typeof opt === 'string' ? { label: opt, value: opt } : opt))
)

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>
