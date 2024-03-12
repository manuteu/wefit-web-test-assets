import React from 'react'
import { ButtonText, CartIcon, Container, Counter } from './styles'
import ShoppingCartSvg from '../../assets/shopping_cart.svg'

type Props = React.ComponentProps<'button'> & {
  title: string;
  counter?: number;
  isAddButton?: boolean;
}

export default function CustomButton({ title, counter, isAddButton, ...props }: Props) {
  return (
    <Container hasCounter={counter ? true : false} {...props}>
      {isAddButton && (
        <>
          <CartIcon src={ShoppingCartSvg} alt='Icon' />
          <Counter>{counter}</Counter>
        </>
      )}
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}
