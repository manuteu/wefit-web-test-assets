import React, { useEffect, useState } from 'react'
import PageContainer from '../components/PageContainer'
import ProductCard from '../components/ProductCard'
import { ProductsDTO } from '../dtos/Products';
import GridColumn from '../components/GridColumn';
import Empty from '../components/Empty';
import Loading from '../components/Loading';

export default function Home() {
  const [productsData, setProductsData] = useState<ProductsDTO[]>([])
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/products')

      const data: ProductsDTO[] = await response.json()
      setProductsData(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    setLoading(true)
    setTimeout(getProducts, 2000);
  }, [])


  return (
    <PageContainer>
      {loading && (
        <Loading />
      )}
      {productsData && !loading && (
        <GridColumn>
          {productsData.map((item, index) => (
            <ProductCard key={index} products={item} />
          ))}
        </GridColumn>
      )}
      {!productsData && !loading && (
        <Empty buttonText='Recarregar página' handleReload={getProducts} />
      )}
    </PageContainer>
  )
}
