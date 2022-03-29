import { Action, createReducer, on } from '@ngrx/store';
import { State, initialState } from 'src/app/app-store/state/todo.state';
import * as TodoAction from 'src/app/app-store/actions/index';


export const reducer = createReducer(initialState, on(TodoAction.loadAll, state => {
    return {...state, loading: true};
}))