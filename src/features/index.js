import { combineReducers } from "redux";

import EntriesReducer from "./Entries/entriesSlice";
import usersReducer from "./users/usersSlice";
import projectsReducer from "./contact/contactSlice";

const rootReducer = combineReducers({
  Entries: EntriesReducer,
  users: usersReducer,
  projects: projectsReducer,
});

export default rootReducer;
