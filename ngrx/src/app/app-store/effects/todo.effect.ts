import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, act } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, tap, concatMap, switchMap, catchError } from 'rxjs/operators';
import { TodoService } from 'src/app/app-store/serevice/todo.service';
import * as TodoActions from 'src/app/app-store/actions/index';

@Injectable()
export class TodoEffects {

  constructor(private todoService: TodoService, private actions$: Actions) {}

  /**
   * Actionを受け取り副作用を処理する。
   */
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadAll),
      switchMap(({ offset, limit }) =>
        this.todoService.findAll(offset, limit).pipe(
          // 成功の場合はloadSuccess
          map((result) => TodoActions.loadAllSuccess({ todos: result })),

          // エラーの場合はloadFailure
          catchError(async (error) => TodoActions.loadAllFailure({ error }))
        )
      )
    )
  );

  /**
   * Todoが成功した場合
   */
  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadAllSuccess),
      tap(() => {
        console.log('Success!');
      })
    ),
    { dispatch: false }
  );
}
