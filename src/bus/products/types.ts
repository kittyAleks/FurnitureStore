import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

export type Products = {
  _id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};
export type ProductsState = {
  products: Products[] | null;
  loading: boolean;
};

// Contracts
export type BaseContact<T = any> = CaseReducer<ProductsState, PayloadAction<T>>;
