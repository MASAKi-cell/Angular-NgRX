import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureName } from '../state/todo.state';

const getState = createFeatureSelector<State>(featureName); // featureName

export const getLoading = createSelector(getState, state => state.loading); // loading

export const getTodos = createSelector(getState, state => state.todos); // todos