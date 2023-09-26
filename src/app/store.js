import { configureStore } from '@reduxjs/toolkit';
import AppState from '../features/AppState/AppState';
import { chatGptApi } from '../features/Api/Api';
import Company from '../features/Company/Company';

export const store = configureStore({
  reducer: {
    application: AppState,
    companyform: Company,
    [chatGptApi.reducerPath]: chatGptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatGptApi.middleware),
});
