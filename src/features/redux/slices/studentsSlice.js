import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const studentsAdapter = createEntityAdapter({
  selectId: (student) => student.id,
  sortComparer: (pre, next) => pre.id.localeCompare(next.id),
});

const studentsSlice = createSlice({
  name: "students",
  initialState: studentsAdapter.getInitialState({
    status: "idle",
    error: null,
  }),
  reducers: {
    addStudent: studentsAdapter.addOne,
    updateStudent: studentsAdapter.updateOne,
    deleteStudent: studentsAdapter.removeOne,
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentsSlice.actions;

export default studentsSlice.reducer;
