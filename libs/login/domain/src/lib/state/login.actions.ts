import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[Login] Login Success', props<{ user: any }>());
export const loginFailure = createAction('[Login] Login Failure', props<{ error: string }>());
