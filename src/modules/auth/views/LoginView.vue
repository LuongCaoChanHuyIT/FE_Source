<template>
  <div class="flex justify-center items-center p-20">
    <div class="bg-white w-xl rounded-sm">
      <div class="p-6 flex justify-center items-center">
        <div
          class="text-2xl font-bold cursor-pointer"
          :class="toggleForm === 'SignUp' ? 'opacity-25' : ''"
          @click="handleToggleForm('SignIn')"
        >
          Đăng nhập
        </div>
        <div class="h-8 border border-b-gray-400 opacity-25 mx-8"></div>
        <div
          class="text-2xl font-bold cursor-pointer"
          :class="toggleForm === 'SignIn' ? 'opacity-25' : ''"
          @click="handleToggleForm('SignUp')"
        >
          Đăng ký
        </div>
      </div>
      <div class="flex justify-center">
        <component :is="returnForm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormSignIn from '@/components/Elements/AuthComponents/FormSignIn.vue'
import FormSignUp from '@/components/Elements/AuthComponents/FormSignUp.vue'

const toggleForm = ref<'SignIn' | 'SignUp'>('SignIn')

const handleToggleForm = (type: 'SignIn' | 'SignUp') => {
  toggleForm.value = type
}

const returnForm = computed(() => {
  return toggleForm.value === 'SignIn' ? FormSignIn : FormSignUp
})
</script>
