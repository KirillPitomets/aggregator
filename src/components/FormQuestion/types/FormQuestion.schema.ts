import { object, string, InferType } from 'yup'

export const formQuestionSchema = object({
  email: string().required('Напишите ваш E-mail что бы мы могли дать вам ответ').email(),
  username: string().required('Напишите имя по которому мы будем обращаться').min(2),
  question: string().required('Напишите вопрос').max(500, "").min(10),
})

export type TypeFormQuestion = InferType<typeof formQuestionSchema>
