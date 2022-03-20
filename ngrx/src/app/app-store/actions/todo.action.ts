import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/app-store/models/todo';


/**
 * Todoデータを全て取得する。
 */
export const loadAll = createAction(
  '[Todo Page] Load All',
  props<{ offset?: number; limit?: number }>()
);


/**
 * Todoが成功した場合
 */
export const loadAllSuccess = createAction(
    '[Todo API] Load All Success',
    props<{ todos: Todo[] }>()
);


/**
 * Todoが失敗した場合
 */
export const loadAllFailure = createAction(
    '[Todo API] Load All Failure',
    props<{ error: any[] }>()
);

