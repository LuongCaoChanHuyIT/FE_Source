import type { AnyObjectSchema } from 'yup'
import type { Path } from 'vee-validate'

/**
 * Generic composable for any form with Yup schema
 */
export function useFormComposable<T extends Record<string, any>>(
  initialValues: Partial<T>,
  schema: AnyObjectSchema
) {
  const { handleSubmit, errors, values, setFieldValue, validateField } = useForm<T>({
    validationSchema: schema,
    initialValues: initialValues as any,
  })

  const updateValue = (key: keyof T, newValue: T[keyof T]) => {
    setFieldValue(key as Path<T>, newValue)
    validateField(key as Path<T>)
  }

  const formErrors = computed(() => errors.value as Partial<Record<keyof T, string>>)

  return {
    values,
    formErrors,
    updateValue,
    handleSubmit,
  }
}
