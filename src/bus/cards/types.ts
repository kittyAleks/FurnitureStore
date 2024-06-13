import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

export type Card = {
  token: string;
  last4: string;
  expMonth: number;
  expYear: number;
  brand: string;
};
// export type Cards = Array<Card>;
export type CardsState = {
  cards: Card[] | null;
  loading: boolean;
};

// Contracts
export type BaseContact<T = any> = CaseReducer<CardsState, PayloadAction<T>>;
