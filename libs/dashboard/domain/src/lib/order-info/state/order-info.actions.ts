import { createAction, props } from '@ngrx/store';

export const load = createAction('[ChildA] Load');
export const loadSuccess = createAction('[ChildA] Load Success', props<{ data: any[] }>());
export const loadFailure = createAction('[ChildA] Load Failure', props<{ error: string }>());
