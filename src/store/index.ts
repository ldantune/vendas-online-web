import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './reducers/globalReducer';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import categoryReducer from './reducers/categoryReducer';

export const store = configureStore({
  reducer: {
    categoryReducer,
    globalReducer,
    productReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
