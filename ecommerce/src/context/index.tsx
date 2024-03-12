import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ProductsDTO } from '../dtos/Products';

type ProviderProps = {
  children: ReactNode
}

type ContextProps = {
  selectedProducts: ProductsDTO[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<ProductsDTO[]>>;
}
// Crie o contexto com um valor inicial
const MyContext = createContext({} as ContextProps);

// Crie um provedor para envolver sua aplicação
const MyContextProvider = ({ children }: ProviderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<ProductsDTO[]>([]);

  return (
    <MyContext.Provider value={
      {
        selectedProducts,
        setSelectedProducts,
      }
    }>
      {children}
    </MyContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
const useMyContext = () => useContext(MyContext);

export { MyContextProvider, useMyContext };