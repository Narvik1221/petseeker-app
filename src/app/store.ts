import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import petsReducer from "../entities/pet/model/petsSlice";
import { PetState } from "../entities/pet/index";
import userReducer from "../entities/user/model/userSlice";
import { UserState } from "../entities/user/index";
import { baseApi } from "../shared/api";
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    pets: petsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = {
  pets: PetState;
  user: UserState;
};

export type AppDispatch = typeof store.dispatch;
