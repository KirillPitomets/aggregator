import React, { ChangeEvent, FC, useState } from 'react'
// ==== Styles ====
import cl from './Home.module.scss'
// ==== Types ====
import Container from '@/components/Container/Container'
import Layout from '@/components/Layout/Layout'
import Title from '@/components/UI/Title/Title'
import Text from '@/components/UI/Text/Text'
import Button from '@/components/UI/Button/Button'
import Rating from '@/components/UI/Rating/Rating'
import { PhoneInput, Textarea, Input } from '@/components/UI/Fields'
import PopUpQuestion from '@/components/PopUpQuestion/PopUpQuestion'

const Home: FC = () => {
  const [value, setValue] = useState('Some vluae')
  const [tel, setTel] = useState('')
  const [text, setText] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  const handleModal = () => {
    console.log(isOpen)
    setIsOpen((prev) => !prev)
  }

  const handleValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const handleTel = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value)
  }

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <Layout title="Home" description="Home page :)">
      <PopUpQuestion isOpen={isOpen} handleOpen={handleModal} />

      <Container>
        <Button text="Handle modal" btnStyleType="link" onClick={handleModal} />

        <Title level={1}> Title h1</Title>
        <Title level={2}> Title h2</Title>
        <hr />
        {/* Under title */}
        <Title subTitleVariant={2} isSubtitle>
          Title h3
        </Title>
        <Title isSubtitle subTitleVariant={1}>
          Title h3 variant 2
        </Title>
        <hr />

        <Text>Some text</Text>
        <Text isAdditionalText>Some additional text</Text>
        <hr />
        <Button text="Читать все отзывы" btnStyleType="link" />
        <Button text="Показать еще" btnStyleType="outline" disabled />
        <Button text="Показать еще" btnStyleType="outline" />
        <hr />
        <Rating stars={5} maxRating={5} />
        <hr />
        <PhoneInput value={tel} onChange={handleTel} errorMessage="Some wrong" name="wtf" id="222" />
        <Input value={text} onChange={handleText} placeholder="Имя" />
        <Textarea value={value} maxSymbols={1000} onChange={handleValue} />
      </Container>
    </Layout>
  )
}

export default Home
