<script setup lang="ts">
import Header from '@/components/Elements/Header.vue'
import Footer from '@/components/Elements/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header></Header>
    <main class="grow w-full">
      <div class="max-w-7xl mx-auto">
        <router-view />
      </div>
    </main>
    <!-- <Footer></Footer> -->
  </div>
</template>
