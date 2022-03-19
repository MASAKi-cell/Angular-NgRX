import { createAction, props } from '@ngrx/store';

export const ySessions = createAction(
  '[Session] Y Sessions'
);

export const ySessionsSuccess = createAction(
  '[Session] Y Sessions Success',
  props<{ data: any }>()
);

export const ySessionsFailure = createAction(
  '[Session] Y Sessions Failure',
  props<{ error: any }>()
);
