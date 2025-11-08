<template>
  <header class="bg-(--color-dark-blue) text-white">
    <div class="max-w-7xl mx-auto flex items-center justify-between py-4">
      <div class="text-2xl font-bold tracking-wide">TECHGO</div>
      <div class="flex items-center w-1/2">
        <BaseInput class="w-full" :model-value="search" placeholder="Tìm kiếm sản phẩm...">
          <template #suffix>
            <BaseButton class="px-6" size="md">
              <i class="fa-solid fa-magnifying-glass"></i>
            </BaseButton>
          </template>
        </BaseInput>
      </div>
      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-2 cursor-pointer hover:opacity-75">
          <div class="w-px h-10 bg-gray-300 opacity-25"></div>
          <i class="fa-regular fa-user text-xl"></i>
          <div class="text-sm">
            <p>Đăng nhập / Đăng ký</p>
            <p class="text-xs text-(--color-very-light-muted-blue)">Tài khoản của tôi</p>
          </div>
        </div>

        <div class="relative flex items-center space-x-2 cursor-pointer hover:opacity-75">
          <div class="w-px h-10 bg-gray-300 opacity-25"></div>
          <i class="fa-solid fa-cart-shopping text-xl"></i>
          <span class="text-sm">Giỏ hàng</span>
          <span
            class="absolute -top-1 -right-2 bg-(--color-red) text-xs text-white font-bold rounded-full px-1.5 py-px"
          >
            0
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseInput from '@/components/UI/Inputs/BaseInput.vue'
import BaseButton from '@/components/UI/Buttons/BaseButton.vue'
const search = ref<string>('')
</script>
