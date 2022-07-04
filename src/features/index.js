import { combineReducers } from "redux";

import EntriesReducer from "./Entries/entriesSlice";
import usersReducer from "./users/usersSlice";
import projectsReducer from "./projects/projectSlice";
import imageReducer from "./images/imageSlice";
import enrollmentReducer from "./enrollment/enrollmentSlice";

const rootReducer = combineReducers({
  Entries: EntriesReducer,
  users: usersReducer,
  projects: projectsReducer,
  imageUrl: imageReducer,
  enrollment: enrollmentReducer,
});

export default rootReducer;
