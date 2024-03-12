import React from 'react'
import { ButtonContainer, Container, Image, Title } from './styles'
import SuccessPng from '../../assets/success_purchased.png'
import CustomButton from '../CustomButton'
import { Link } from 'react-router-dom'

export default function SuccessPurchased() {
  return (
    <Container>
      <Title>Compra realizada com sucesso!</Title>
      <Image src={SuccessPng} alt='Success' />
      <ButtonContainer>
        <Link to='/'>
          <CustomButton title='VOLTAR' />
        </Link>
      </ButtonContainer>
    </Container>
  )
}
