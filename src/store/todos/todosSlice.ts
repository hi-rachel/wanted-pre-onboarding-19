import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodosState {
  input: string;
  todos: Todo[];
}

const initialState: TodosState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '오늘 할일',
      done: false,
    },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    insert(state, action: PayloadAction<string>) {
      const newTodo: Todo = {
        id: Date.now(), // 간단한 예제로 id 생성
        text: action.payload,
        done: false,
      };
      state.todos.push(newTodo);
    },
    toggle(state, action: PayloadAction<number>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    remove(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { changeInput, insert, toggle, remove } = todosSlice.actions;

export default todosSlice.reducer;
