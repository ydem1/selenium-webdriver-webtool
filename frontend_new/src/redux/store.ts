import { configureStore } from '@reduxjs/toolkit';
import inputsSlice from './slice/formInputsSlice';
import urlSlice from './slice/urlSlice';
import submitBtnSlice from './slice/formBtnSlice';
import rulesSlice from './slice/ruleInputsSlice';
import allRulesSlice from './slice/allRulesInputsSlice';

export const store = configureStore({
  reducer: {
    inputs: inputsSlice,
    url: urlSlice,
    submitBtn: submitBtnSlice,
    rule: rulesSlice,
    allRules: allRulesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
