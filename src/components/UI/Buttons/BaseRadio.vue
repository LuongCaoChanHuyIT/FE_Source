<template>
  <label
    class="inline-flex items-center cursor-pointer select-none"
    :class="{
      'opacity-60 cursor-not-allowed': disabled,
    }"
  >
    <input
      type="radio"
      class="hidden"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="onChange"
    />

    <span
      class="w-5 h-5 flex items-center justify-center border-2 rounded-full transition-all duration-150"
      :class="[
        modelValue === value ? 'border-blue-600 bg-blue-600' : 'border-gray-400 bg-white',
        disabled ? 'bg-gray-100 border-gray-300' : '',
      ]"
    >
      <span v-if="modelValue === value" class="w-2.5 h-2.5 bg-white rounded-full"></span>
    </span>

    <span class="ml-2 text-gray-800 text-sm">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number | boolean
  value: string | number | boolean
  label?: string
  name?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  name: '',
  disabled: false,
})

const emit = defineEmits(['update:modelValue'])

const onChange = () => {
  emit('update:modelValue', props.value)
}
</script>
