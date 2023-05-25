import yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { UseFormProps, UseFormReturn, useForm } from 'react-hook-form'

export const useFormWithSchema = <T extends yup.AnyObjectSchema>(
  schema: T,
  useFormProps?: UseFormProps<yup.Asserts<T>>,
): UseFormReturn<yup.Asserts<T>> => {
  return useForm({ ...useFormProps, resolver: yupResolver(schema) })
}
