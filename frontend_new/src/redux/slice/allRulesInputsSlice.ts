import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AllRules } from 'src/@types/rule';
import { getAllRulesFromServer } from 'src/api/client';

interface AllRulesElementState {
  allRules: AllRules[];
  loading: boolean;
  error: string;
}

const initialState: AllRulesElementState = {
  allRules: [],
  loading: false,
  error: '',
};

export const AllRulesSlice = createSlice({
  name: 'allRules',
  initialState,
  reducers: {
    addAllRules: (state, action) => {
      state.allRules.push(action.payload);
    },
    removeRule: (state, action) => {
      state.allRules = state.allRules.filter(rule => rule.id !== action.payload);
    },
    updateRule: (state, action) => {
      const index = state.allRules.findIndex(input => input.id === action.payload.id);
      if (index !== -1) {
        state.allRules[index] = action.payload.updatedInputElement;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllRulesElements.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllRulesElements.fulfilled, (state, action) => {
      state.allRules = action.payload;
      state.loading = false;
    });

    builder.addCase(getAllRulesElements.rejected, (state) => {
      state.error = 'Something went wrong, try again later';
      state.loading = false;
    });
  },
});

export const getAllRulesElements = createAsyncThunk('allRules/getAllRulesElements', () => getAllRulesFromServer());

export const { addAllRules, removeRule, updateRule } = AllRulesSlice.actions;

export default AllRulesSlice.reducer;
