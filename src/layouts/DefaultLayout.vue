<script setup lang="ts">
import Header from '@/components/Elements/Header.vue'
import Footer from '@/components/Elements/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#f5f5f5]">
    <Header></Header>
    <main class="grow w-full">
      <div class="max-w-7xl mx-auto p-4">
        <router-view />
      </div>
    </main>
    <!-- <Footer></Footer> -->
  </div>
</template>
