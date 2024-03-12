import React from 'react'
import { ButtonContainer, Container, Divider, Image, Title } from './styles'
import EmptyPng from '../../assets/empty.png'
import CustomButton from '../CustomButton'

type Props = {
  handleReload: () => void;
  buttonText: string;
}

export default function Empty({ handleReload, buttonText }: Props) {
  return (
    <Container>
      <Title>Parece que não há nada por aqui :(</Title>
      <Image src={EmptyPng}  alt='Icon' />
      <Divider />
      <ButtonContainer>
        <CustomButton onClick={handleReload} title={buttonText} />
      </ButtonContainer>
    </Container>
  )
}
