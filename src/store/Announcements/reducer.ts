import { Actions, AnnouncemenstActionsTypes } from "../../types/reduxTypes/Announcements/Actions";
import { DefaultAnnouncementsState } from "../../types/reduxTypes/Announcements/State";

const defaultState:DefaultAnnouncementsState = {
  announcements: [],
  selectedId: 0,
}




export const announcementsReducer = (state = defaultState, action:Actions):DefaultAnnouncementsState => {
  switch (action.type) {
    case AnnouncemenstActionsTypes.ADD_ANNOUNCEMENT:
      return {
        ...state, 
        announcements: [...state.announcements, action.payload],
      };
      case AnnouncemenstActionsTypes.DELETE_ANNOUNCEMENT:
        return {
          ...state, 
          announcements: state.announcements.filter(announcement => announcement.id !== action.payload),
        };
      default:
        return state;
  }
}