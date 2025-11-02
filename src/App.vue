<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-4">
    <h1 class="text-3xl font-bold">Count: {{ counter.count }}</h1>
    <h2 class="text-lg text-gray-600">Double: {{ counter.doubleCount }}</h2>
    <button
      @click="counter.increment"
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      +1
    </button>
    <router-view></router-view>
  </div>
</template>
