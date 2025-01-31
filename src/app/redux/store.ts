import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import toggleSlice from "./slices/toggle.slice";
// ...

export const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer, // Add the API slice reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware), // Ensure API middleware is included
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
