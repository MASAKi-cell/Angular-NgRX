import { createAction, props, union } from '@ngrx/store';

export const loadSessions = createAction(
  '[Session] Load Sessions'
);

export const loadSessionsSuccess = createAction(
  '[Session] Load Sessions Success',
  props<{ data: any }>()
);

export const ySessionsFailure = createAction(
  '[Session] Y Sessions Failure',
  props<{ error: any }>()
);
