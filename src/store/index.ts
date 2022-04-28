import { combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { announcementsReducer } from "./Announcements/reducer";
import { appReducer } from "./App/reducer";

const rootReducer = combineReducers({
  'announcements': announcementsReducer,
  'app': appReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools());

