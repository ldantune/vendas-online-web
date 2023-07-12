import { RouteObject } from 'react-router-dom';

import Product from './screens/Product';

export enum ProductRoutesEnum {
  PRODUCT = '/product',
  PRODUCT_INSERT = '/product/insert',
  PRODUCT_EDIT = '/product/:productId',
}

export const productScreens: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
  },
];

