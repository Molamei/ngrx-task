import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProtocolsState } from './protocols.reducer';

export const selectChildBState = createFeatureSelector<ProtocolsState>('protocols');
export const selectChildBData = createSelector(selectChildBState, (state) => state.data);
export const selectChildBLoading = createSelector(selectChildBState, (state) => state.loading);
export const selectChildBResource = createSelector(
    selectChildBState,
    (state) => state.data?.resource // ✅ only get the nested resource object
  );
  
  export const selectChildBStatus = createSelector(
    selectChildBState,
    (state) => state.data?.status
  );
  
  export const selectChildBMessages = createSelector(
    selectChildBState,
    (state) => state.data?.messages
  );
  