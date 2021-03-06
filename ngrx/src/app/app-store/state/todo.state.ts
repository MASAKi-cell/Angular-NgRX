import { Todo } from 'src/app/app-store/models/todo';

export const featureName = 'todo';


// State
export interface State {
  loading: boolean;
  todos: Todo[];
  error?: any;
}

// εζηΆζ
export const initialState: State = {
  loading: false,
  todos: [],
};
