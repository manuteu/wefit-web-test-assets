import React from 'react'
import { Amount, ButtonContainer, Container, MovieImage, Title } from './styles'
import CustomButton from '../CustomButton'
import { ProductsDTO } from '../../dtos/Products'
import { useMyContext } from '../../context'
import { countProducts, formatMoney } from '../../utils'

interface Props {
  products: ProductsDTO
}

export default function ProductCard({ products }: Props) {
  const { id, image, price, title } = products

  const { setSelectedProducts, selectedProducts } = useMyContext()

  const addProduct = (product: ProductsDTO) => {
    setSelectedProducts(prev => [...prev, product])
  }

  return (
    <Container>
      <MovieImage src={image} loading="lazy" alt='Movie Image' />
      <Title>{title}</Title>
      <Amount>{formatMoney(price)}</Amount>
      <ButtonContainer>
        <CustomButton counter={countProducts(selectedProducts, id)} onClick={() => addProduct(products)} isAddButton title='Adicionar ao carrinho' />
      </ButtonContainer>
    </Container>
  )
}
