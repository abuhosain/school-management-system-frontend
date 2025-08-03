import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice"
import { baseApi } from "./api/baseApi"
export const  store = () => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: authReducer
    },
    middleware : getDefaultMiddlewares => getDefaultMiddlewares().concat(baseApi.middleware)
  })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']