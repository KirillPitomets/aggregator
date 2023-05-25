import React, { FC } from 'react'
// ==== Types ====
import { IPopUpQuestionProps } from './PopUpQuestion.props'
import { IPopUpProps } from '../UI/PopUp/PopUp.props'
import { TypeFormQuestion } from '../FormQuestion/types/FormQuestion.schema'
// ==== Styles ====
import cl from './PopUpQuestion.module.scss'
// ==== Components ====
import PopUp from '../UI/PopUp/PopUp'
import Title from '../UI/Title/Title'
import FormQuestion from '../FormQuestion/FormQuestion'

const PopUpQuestion: FC<IPopUpQuestionProps & IPopUpProps> = ({ isOpen, handleOpen }) => {
  return (
    <PopUp isOpen={isOpen} handleOpen={handleOpen}>
      <Title level={2} className={cl.title}>
        Задать вопрос
      </Title>

      <FormQuestion submit={(data: TypeFormQuestion) => console.log(data)} />
    </PopUp>
  )
}

export default PopUpQuestion
