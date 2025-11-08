<template>
  <button
    :class="buttonClasses"
    class="cursor-pointer"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  rounded: false,
})

const buttonClasses = computed(() => {
  const base =
    'inline-flex items-center justify-center font-medium focus:outline-none transition-all duration-200'

  const variants: Record<string, string> = {
    primary: 'bg-(--color-vibrant-orange) hover:opacity-75 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
  }

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const round = props.rounded ? 'rounded-full' : 'rounded-sm'
  const disabledClass = props.disabled ? 'opacity-60 cursor-not-allowed' : ''

  return [base, variants[props.variant], sizes[props.size], round, disabledClass].join(' ')
})
</script>
