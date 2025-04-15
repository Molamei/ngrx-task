import { createFeatureSelector, createSelector } from '@ngrx/store';
import { orderState } from './order-info.reducer';

export const selectChildAState = createFeatureSelector<orderState>('order-info');
export const selectChildAData = createSelector(selectChildAState, (state) => state.data);
export const selectChildALoading = createSelector(selectChildAState, (state) => state.loading);
export const selectChildAResource = createSelector(
    selectChildAState,
    (state) => state.data?.resource // ✅ only get the nested resource object
  );
  
  export const selectChildAStatus = createSelector(
    selectChildAState,
    (state) => state.data?.status
  );
  
  export const selectChildAMessages = createSelector(
    selectChildAState,
    (state) => state.data?.messages
  );
  