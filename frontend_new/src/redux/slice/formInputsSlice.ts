import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Rule } from 'src/@types/rule';
import { getInputElementsFromServer } from 'src/api/client';

interface InputElementState {
  inputs: Rule;
  loading: boolean;
  error: string;
}

const initialState: InputElementState = {
  inputs: [],
  loading: false,
  error: '',
};

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    addInputElement: (state, action) => {
      state.inputs.push(action.payload);
    },
    removeInputElement: (state, action) => {
      state.inputs = state.inputs.filter(input => input.id !== action.payload);
    },
    updateInputElement: (state, action) => {
      const index = state.inputs.findIndex(input => input.id === action.payload.id);

      if (index !== -1) {
        state.inputs.splice(index, 1, action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getInputElements.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getInputElements.fulfilled, (state, action) => {
      state.inputs = action.payload;
      state.loading = false;
    });

    builder.addCase(getInputElements.rejected, (state) => {
      state.error = 'Something went wrong, try again later';
      state.loading = false;
    });
  },
});

export const { addInputElement, removeInputElement, updateInputElement } = inputsSlice.actions;

export const getInputElements = createAsyncThunk('inputs/getInputElements', () => getInputElementsFromServer());

export default inputsSlice.reducer;
