<template>
  <div class="w-full flex flex-col gap-4 p-8">
    <BaseInput
      v-for="(item, index) in fields"
      :key="index"
      v-model="formData[item.key]"
      :placeholder="item.placeholder"
      custom-class="text-md px-6 font-medium italic"
      class=""
      :type="item.type"
      background="bg-[#eee]"
    >
      <template #suffix>
        <div class="py-6"></div>
      </template>
    </BaseInput>
    <div class="flex flex-col items-start space-y-4 mt-4">
      <p class="text-sm text-gray-400 w-full leading-snug">
        This site is protected by reCAPTCHA and the Google
        <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>
        and
        <a href="#" class="text-blue-500 hover:underline">Terms of Service</a>
        apply.
      </p>
      <div class="flex gap-6">
        <BaseButton class="px-6 transition duration-200">
          <p class="p-0 font-bold">Đăng nhập</p>
        </BaseButton>

        <div class="text-sm text-gray-600 space-y-1">
          <p>
            Bạn chưa có tài khoản?
            <a href="#" class="text-blue-500 hover:underline">Quên mật khẩu?</a>
          </p>
          <p>
            Bạn quên mật khẩu?
            <a href="#" class="text-blue-500 hover:underline">Đăng ký</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/UI/Inputs/BaseInput.vue'
import BaseButton from '@/components/UI/Buttons/BaseButton.vue'

interface FormData {
  email: string
  password: string
}
interface Field {
  key: keyof FormData
  placeholder: string
  type: string
}
const formData = ref<FormData>({
  email: '',
  password: '',
})

const fields: Field[] = [
  {
    key: 'email',
    placeholder: 'Vui lòng nhập email của bạn',
    type: 'email',
  },
  {
    key: 'password',
    placeholder: 'Vui lòng nhập mật khẩu',
    type: 'password',
  },
]
</script>

<style scoped></style>
