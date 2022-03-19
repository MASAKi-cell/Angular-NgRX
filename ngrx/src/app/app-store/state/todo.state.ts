import { Todo } from 'src/app/app-store/models/todo';
import { state } from "./app.state";

export const featureName = 'todo';

export interface State {
  loading: boolean;
  todos: Todo[];
  error?: any;
}

export const initialState: state = {
  loading: false,
  todos: [],
};
