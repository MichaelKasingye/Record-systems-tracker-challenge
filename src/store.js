import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./features";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["Entries/fetchEntriesSuccess"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["Entries.Entries.config.transformRequest.0"],
      },
    }),
});
