import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export interface LoginState {
  user: any | null;
  loading: boolean;
  error: string | null;
}
export const loginFeatureName = 'otherOrders';
 
const loginState = createFeatureSelector<LoginState>(
  loginFeatureName
);
 
export const initialState: LoginState = {
  user: null,
  loading: false,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => ({ ...state, loading: true })),
  on(LoginActions.loginSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(LoginActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
