import { createReducer, on } from '@ngrx/store';
import * as orderInfo from './order-info.actions';

export interface orderState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: orderState = {
  data: null,
  loading: false,
  error: null,
};

export const childAReducer = createReducer(
  initialState,
  on(orderInfo.load, (state) => ({ ...state, loading: true })),
  on(orderInfo.loadSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(orderInfo.loadFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
