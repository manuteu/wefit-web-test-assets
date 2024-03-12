import { ProductsDTO } from '../dtos/Products';

export const countProducts = (products: ProductsDTO[], targetId: number) => {
  let count = 0;
  products.forEach((item) => {
    if (item.id === targetId) {
      count++;
    }
  });
  return count;
};

export const formatMoney = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};