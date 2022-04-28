import { AppActions, AppActionTypes } from "../../types/reduxTypes/App/Actions"
import { DefaultAppState } from "../../types/reduxTypes/App/State"

const defaultState: DefaultAppState = {
  appIsOpen: false,
  addFormIsOpen: false,
}

export const appReducer = (state = defaultState, action: AppActions): DefaultAppState => {
  switch (action.type) {
    case AppActionTypes.OPEN_APP:
      return { ...state, appIsOpen: true };
    case AppActionTypes.OPEN_ADD_FORM:
      return { ...state, addFormIsOpen: true };
    case AppActionTypes.CLOSE_ADD_FORM:
      return { ...state, addFormIsOpen: false };
    default: 
      return state
    
  }
}