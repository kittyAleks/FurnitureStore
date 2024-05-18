import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

export type LikedProductT = {
  _id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};
export type LikedProductsState = {
  likedProducts: LikedProductT[] | null;
  loading: boolean;
};

// Contracts
export type BaseContact<T = any> = CaseReducer<
  LikedProductsState,
  PayloadAction<T>
>;
