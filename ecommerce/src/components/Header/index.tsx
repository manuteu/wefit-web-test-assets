import React from 'react'
import { CartContainer, CartIcon, CartInfo, CartSubtitle, CartTitle, Container, Content, Logo } from './styles'
import CartSvg from '../../assets/cart_icon.svg'
import { useMyContext } from '../../context'
import { Link } from "react-router-dom";

export default function Header() {
  const { selectedProducts } = useMyContext()

  return (
    <Container>
      <Content>
        <Logo>WeMovies</Logo>
        <CartContainer>
          <CartInfo>
            <CartTitle>
              Meu Carrinho
            </CartTitle>
            <CartSubtitle>
              {selectedProducts.length} itens
            </CartSubtitle>
          </CartInfo>
          <Link to='/cart'>
            <CartIcon src={CartSvg} alt='Icon' />
          </Link>
        </CartContainer>
      </Content>
    </Container>
  )
}
