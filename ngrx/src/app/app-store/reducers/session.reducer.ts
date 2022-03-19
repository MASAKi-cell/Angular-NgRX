import { Action, createReducer, on } from '@ngrx/store';


export const sessionFeatureKey = 'session';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

);
