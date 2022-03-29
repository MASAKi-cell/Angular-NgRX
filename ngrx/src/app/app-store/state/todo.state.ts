import { Todo } from 'src/app/app-store/models/todo';

export const featureName = 'todo';


// State
export interface State {
  loading: boolean;
  todos: Todo[];
  error?: any;
}

// 初期状態
export const initialState: State = {
  loading: false,
  todos: [],
};
