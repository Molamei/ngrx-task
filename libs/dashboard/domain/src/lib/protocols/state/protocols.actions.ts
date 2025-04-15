import { createAction, props } from '@ngrx/store';

export const load = createAction('[ChildB] Load');
export const loadSuccess = createAction('[ChildB] Load Success', props<{ data: any[] }>());
export const loadFailure = createAction('[ChildB] Load Failure', props<{ error: string }>());
