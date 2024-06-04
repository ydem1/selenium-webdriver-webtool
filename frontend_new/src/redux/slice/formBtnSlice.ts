import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InputElement } from 'src/@types/inputElement';
import { getSubmitBtnFromServer, postSubmitBtnToServer } from 'src/api/client';

interface submitBtnState {
  submitBtn: InputElement;
  loading: boolean;
  error: string;
}

const initialState: submitBtnState = {
  submitBtn: {
    id: 0,
    name: '',
    selector: '',
  },
  loading: false,
  error: '',
};

export const submitBtnSlice = createSlice({
  name: 'submitBtn',
  initialState,
  reducers: {
    addSubmitBtn: (state, action) => {
      state.submitBtn = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSubmitBtn.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getSubmitBtn.fulfilled, (state, action) => {
      state.submitBtn = action.payload;
      state.loading = false;
    });

    builder.addCase(getSubmitBtn.rejected, (state) => {
      state.error = 'Something went wrong, try again later';
      state.loading = false;
    });

    builder.addCase(postSubmitBtn.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(postSubmitBtn.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(postSubmitBtn.rejected, (state) => {
      state.error = 'Something went wrong, try again later';
      state.loading = false;
    });
  },
});

export const { addSubmitBtn } = submitBtnSlice.actions;

export const getSubmitBtn = createAsyncThunk('submitBtn/getSubmitBtn', () => getSubmitBtnFromServer());
export const postSubmitBtn = createAsyncThunk('submitBtn/postSubmitBtn', (submitBtn: InputElement) => postSubmitBtnToServer(submitBtn));

export default submitBtnSlice.reducer;
