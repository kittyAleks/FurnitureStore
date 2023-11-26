import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

export type Products = {
  _id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};
export type ProductsState = Array<Products> | null;

// Contracts
export type BaseContact<T = any> = CaseReducer<ProductsState, PayloadAction<T>>;
