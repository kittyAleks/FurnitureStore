import {useDispatch as useReduxDispatch} from 'react-redux';
import {ThunkDispatch, AnyAction} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../../init';

export const useDispatch: () => AppDispatch &
  ThunkDispatch<RootState, void, AnyAction> = useReduxDispatch;
