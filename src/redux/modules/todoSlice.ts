import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  deadline: string;
}

type TodoState = {
  value: Todo[];
};

const initialState: TodoState = {
  value: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
