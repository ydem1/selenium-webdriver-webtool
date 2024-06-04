import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Url, UrlObj } from 'src/@types/url';
import { getUrlFromServer, postUrlToServer } from 'src/api/client';

interface UrlState {
  url: Url;
  loading: boolean;
  error: string;
}

const initialState: UrlState = {
  url: "",
  loading: false,
  error: '',
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    addUrl: (state, action: PayloadAction<Url>) => {
      state.url = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUrl.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUrl.fulfilled, (state, action) => {
      state.url = action.payload;
      state.loading = false;
    });

    builder.addCase(getUrl.rejected, (state) => {
      state.error = 'Something went wrong, try again later';
      state.loading = false;
    });

    builder.addCase(postUrl.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(postUrl.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(postUrl.rejected, (state) => {
      state.error = 'Something went wrong, try again later';
      state.loading = false;
    });
  },
});

export const { addUrl } = urlSlice.actions;

export const getUrl = createAsyncThunk('url/getUrl', () => getUrlFromServer());
export const postUrl = createAsyncThunk('url/postUrl', (url: UrlObj) => postUrlToServer(url));

export default urlSlice.reducer;
