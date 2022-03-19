import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';


export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

/**
 * ログ出力の設定を行う。 
 * @param reducer 
 * @returns newState
 */
export function logger(reducer: ActionReducer<State>) {
  return (state: State | undefined, action: Action) => {
    const newState = reducer(state, action);
    console.log('action', state);
    console.log('state', newState);
    return newState;
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
