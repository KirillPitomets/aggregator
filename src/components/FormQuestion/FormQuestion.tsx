import React, { FC } from 'react'
// ==== Form ====
import { IFormQuestionProps } from './types/FormQuestion.props'
import { SubmitHandler, Controller } from 'react-hook-form'
import { formQuestionSchema, TypeFormQuestion } from './types/FormQuestion.schema'
// ==== Hooks ====
import { useFormWithSchema } from '@/hook/useFormWithSchema'
// ==== Styles ====
import cl from './FormQuestion.module.scss'
// ==== Components ====
import { Input, Textarea } from '../UI/Fields'
import Button from '../UI/Button/Button'
import InfoText from '../UI/InfoText/InfoText'

const FormQuestion: FC<IFormQuestionProps<TypeFormQuestion>> = ({ submit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormWithSchema(formQuestionSchema)

  const onSubmit: SubmitHandler<TypeFormQuestion> = (data) => {
    submit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <Controller
        name="question"
        control={control}
        render={({ field }) => (
          <Textarea
            {...field}
            errorMessage={errors.question?.message}
            maxSymbols={500}
            placeholder="Напишите Ваш вопрос"
          />
        )}
      />

      <div className={cl.fields}>
        <Input
          reactHookRegister={register('username')}
          errorMessage={errors.username?.message}
          placeholder="Ваше имя"
        />
        <Input
          reactHookRegister={register('email')}
          errorMessage={errors.email?.message}
          placeholder="Электронная почта"
        />
      </div>

      <Button
        text="ЗАДАТЬ ВОПРОС"
        btnStyleType="outline"
        type="submit"
        className={cl.btn}
        disabled={errors.email?.message || errors.username?.message || errors.question?.message ? true : false}
      />

      <InfoText className={cl.info}>Вы получите ответ на свой вопрос на электронную почту</InfoText>
    </form>
  )
}

export default FormQuestion
