import { createReducer, on } from '@ngrx/store';
import * as protocols from './protocols.actions';

export interface ProtocolsState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: ProtocolsState = {
  data: null,
  loading: false,
  error: null,
};

export const childBReducer = createReducer(
  initialState,
  on(protocols.load, (state) => ({ ...state, loading: true })),
  on(protocols.loadSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(protocols.loadFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
