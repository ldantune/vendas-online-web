import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

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
