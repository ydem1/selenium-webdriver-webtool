import { createSlice } from '@reduxjs/toolkit';
import { Rule } from 'src/@types/rule';

interface RuleElementState {
  rule: Rule;
  loading: boolean;
  error: string;
}

const initialState: RuleElementState = {
  rule: [],
  loading: false,
  error: '',
};

export const ruleSlice = createSlice({
  name: 'rule',
  initialState,
  reducers: {
    initRule: (state, action) => {
      state.rule = action.payload;
    },
    addRule: (state, action) => {
      state.rule.push(action.payload);
    },
    removeInputRule: (state, action) => {
      state.rule = state.rule.filter(rule => rule.id !== action.payload);
    },
    updateInputRule: (state, action) => {
      const index = state.rule.findIndex(input => input.id === action.payload.id);

      if (index !== -1) {
        state.rule.splice(index, 1, action.payload);
      }
    },
    clearRule: (state) => {
      state.rule = [];
    },
  },
});

export const { initRule, addRule, removeInputRule, updateInputRule, clearRule } = ruleSlice.actions;

export default ruleSlice.reducer;
