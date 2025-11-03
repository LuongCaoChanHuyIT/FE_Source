<template>
  <label
    class="inline-flex items-center cursor-pointer select-none"
    :class="{
      'opacity-60 cursor-not-allowed': disabled,
    }"
  >
    <input
      type="checkbox"
      class="hidden"
      :checked="modelValue"
      :disabled="disabled"
      @change="toggle"
      ref="checkboxRef"
    />

    <span
      class="w-5 h-5 flex items-center justify-center border-2 rounded transition-all duration-150"
      :class="[
        modelValue ? 'border-blue-600 bg-blue-600' : 'border-gray-400 bg-white',
        disabled ? 'bg-gray-100 border-gray-300' : '',
      ]"
    >
      <svg
        v-if="modelValue"
        xmlns="http://www.w3.org/2000/svg"
        class="w-3 h-3 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="3"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>

      <span v-else-if="indeterminate" class="w-2.5 h-0.5 bg-blue-600 rounded"></span>
    </span>

    <span class="ml-2 text-gray-800 text-sm">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

interface Props {
  modelValue: boolean
  label?: string
  disabled?: boolean
  indeterminate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false,
  indeterminate: false,
})

const emit = defineEmits(['update:modelValue'])

const checkboxRef = ref<HTMLInputElement | null>(null)

const toggle = () => {
  if (!props.disabled) emit('update:modelValue', !props.modelValue)
}

onMounted(() => {
  if (checkboxRef.value) {
    checkboxRef.value.indeterminate = props.indeterminate
  }
})
watch(
  () => props.indeterminate,
  (val) => {
    if (checkboxRef.value) checkboxRef.value.indeterminate = val
  }
)
</script>
