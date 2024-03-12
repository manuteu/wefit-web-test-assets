import React from 'react'
import { ButtonContainer, CartItem, ColumnTitle, Container, CounterBox, CounterIcon, CounterText, DeleteBox, DeleteIcon, Divider, Footer, ProductAmount, ProductContainer, ProductCounter, ProductCounterMobile, ProductDetails, ProductImage, ProductSubTotal, ProductTitle, SubTotalMobile, SubTotalMobileTitle, SubTotalText, SubTotalTextMobile, TotalAmount, TotalBox, TotalText } from './styles'
import CounterMinusSvg from '../../assets/minus_icon.svg'
import CounterMoreSvg from '../../assets/more_icon.svg'
import TrashSvg from '../../assets/trash_icon.svg'
import CustomButton from '../CustomButton'
import { useMyContext } from '../../context'
import { ProductsDTO } from '../../dtos/Products'
import { Link, useNavigate } from 'react-router-dom'
import Empty from '../Empty'
import { formatMoney } from '../../utils'

export default function CartCard() {
  const { selectedProducts, setSelectedProducts } = useMyContext()
  const navigate = useNavigate();

  const getUniqueItems = (items: ProductsDTO[]) => {
    const uniqueItems: ProductsDTO[] = [];
    const map = new Map();

    items.forEach((item) => {
      if (!map.has(item.id)) {
        map.set(item.id, true);
        uniqueItems.push(item);
      }
    });

    return uniqueItems;
  }

  const countDuplicates = (items: ProductsDTO[]) => {
    const counts: { [id: number]: number } = {};
    items.forEach(item => counts[item.id] = (counts[item.id] || 0) + 1);
    return counts;
  }

  const duplicateCount = countDuplicates(selectedProducts)

  const handleIncreaseProuductQuantity = (product: ProductsDTO) => {
    setSelectedProducts(prev => [...prev, product])
  }

  const handleDecreaseProuductQuantity = (id: number) => {
    const filteredById = selectedProducts.filter(p => p.id === id)
    const removedById = selectedProducts.filter(p => p.id !== id)
    if (filteredById.length > 0) {
      filteredById.pop();
      removedById.push(...filteredById)
      setSelectedProducts(removedById)
    }
  }

  const handleRemoveProduct = (id: number) => {
    const filteredById = selectedProducts.filter(p => p.id !== id)
    setSelectedProducts(filteredById)
  }

  const handleGoBack = () => {
    navigate('/')
  }

  const sumTotalPrice = () => {
    return selectedProducts.reduce((total, item) => total + item.price, 0);
};

  return (
    <>
      {selectedProducts.length === 0 ? (
        <Empty buttonText='Voltar' handleReload={handleGoBack} />
      ) : (
        <Container>
          <CartItem>
            <ColumnTitle>PRODUTO</ColumnTitle>
            <ColumnTitle>QTD</ColumnTitle>
            <ColumnTitle>SUBTOTAL</ColumnTitle>
          </CartItem>
          {getUniqueItems(selectedProducts).map((product, index) => (
            <CartItem key={index}>
              <ProductContainer>
                <ProductImage src={product.image} alt='Imagem do filme' />
                <ProductDetails>
                  <ProductTitle>
                    {product.title}
                  </ProductTitle>
                  <ProductAmount>
                    {formatMoney(product.price)}
                  </ProductAmount>

                  <ProductCounterMobile>
                    <CounterIcon src={CounterMinusSvg} onClick={() => handleDecreaseProuductQuantity(product.id)} alt='Icon' />
                    <CounterBox>
                      <CounterText>{duplicateCount[product.id]}</CounterText>
                    </CounterBox>
                    <CounterIcon src={CounterMoreSvg} onClick={() => handleIncreaseProuductQuantity(product)} alt='Icon' />
                  </ProductCounterMobile>
                </ProductDetails>
              </ProductContainer>

              <ProductCounter>
                <CounterIcon src={CounterMinusSvg} onClick={() => handleDecreaseProuductQuantity(product.id)} alt='Icon' />
                <CounterBox>
                  <CounterText>{duplicateCount[product.id]}</CounterText>
                </CounterBox>
                <CounterIcon src={CounterMoreSvg} onClick={() => handleIncreaseProuductQuantity(product)} alt='Icon' />
              </ProductCounter>

              <ProductSubTotal>
                <SubTotalText>{formatMoney(product.price * duplicateCount[product.id])}</SubTotalText>
                <SubTotalTextMobile>{formatMoney(product.price)}</SubTotalTextMobile>

                <SubTotalMobile>
                  <SubTotalMobileTitle>SUBTOTAL</SubTotalMobileTitle>
                  <SubTotalTextMobile>{formatMoney(product.price * duplicateCount[product.id])}</SubTotalTextMobile>
                </SubTotalMobile>
              </ProductSubTotal>
              <DeleteBox>
                <DeleteIcon src={TrashSvg} onClick={() => handleRemoveProduct(product.id)} alt='Icon' />
              </DeleteBox>
            </CartItem>
          ))}

          <Divider />
          <Footer>
            <ButtonContainer>
              <Link to='/purchased'>
                <CustomButton title='FINALIZAR PEDIDO' />
              </Link>
            </ButtonContainer>

            <TotalBox>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{formatMoney(sumTotalPrice())}</TotalAmount>
            </TotalBox>
          </Footer>
        </Container>
      )}
    </>
  )
}
