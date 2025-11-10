<template>
  <div class="w-full p-8">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-4">
      <BaseInput
        v-for="(item, index) in fields"
        :key="index"
        :model-value="values[item.key]"
        @update:model-value="(val) => updateValue(item.key, val)"
        :placeholder="item.placeholder"
        :type="item.type"
        :error="formErrors[item.key]"
        :autocomplete="item.autocomplete"
        custom-class="text-md px-6 font-medium italic"
        background="bg-[#eee]"
      >
        <template #suffix><div class="py-6"></div></template>
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
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/UI/Inputs/BaseInput.vue'
import BaseButton from '@/components/UI/Buttons/BaseButton.vue'
import { useFormComposable } from '@/composables/useFormComposable.ts'
import * as yup from 'yup'

interface FormData {
  email: string
  password: string
}
interface Field {
  key: keyof FormData
  placeholder: string
  type: string
  autocomplete: string
}

const fields: Field[] = [
  {
    key: 'email',
    placeholder: 'Vui lòng nhập email của bạn',
    type: 'email',
    autocomplete: 'email',
  },
  {
    key: 'password',
    placeholder: 'Vui lòng nhập mật khẩu',
    type: 'password',
    autocomplete: 'current-password',
  },
]
interface FormData {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
})

const initialValues: FormData = {
  email: '',
  password: '',
}

const { values, formErrors, updateValue, handleSubmit } = useFormComposable<FormData>(
  initialValues,
  schema
)

const onSubmit = handleSubmit((vals) => {
  console.log(' Form hợp lệ:', vals.email)
})
</script>

<style scoped></style>
