import { Actions, AnnouncemenstActionsTypes } from "../../types/reduxTypes/Announcements/Actions";
import { DefaultAnnouncementsState } from "../../types/reduxTypes/Announcements/State";


const defaultState: DefaultAnnouncementsState = {
  announcements: [],
  selected: null,
}




export const announcementsReducer = (state = defaultState, action: Actions): DefaultAnnouncementsState => {
  switch (action.type) {
    case AnnouncemenstActionsTypes.ADD_ANNOUNCEMENT:
      return {
        ...state,
        announcements: [...state.announcements, action.payload],
      };

    case AnnouncemenstActionsTypes.DELETE_ANNOUNCEMENT:
      return {
        ...state,
        selected: action.payload === state.selected?.id ? null : state.selected, 
        announcements: state.announcements.filter(announcement => announcement.id !== action.payload),
      };

    case AnnouncemenstActionsTypes.SELECT_ANNOUNCEMENT:
      return {
        ...state,
        selected: state.announcements.find(announcement => announcement.id === action.payload) || null,
      }

    case AnnouncemenstActionsTypes.EDIT_ANNOUNCEMENT:
      return {
        ...state,
        announcements: state.announcements.map(announcement => {
          if (announcement.id === action.payload.id) {
            return {
              ...announcement,
              title: action.payload.title,
              description: action.payload.description,
            }
          }
          return announcement;
        }),
        selected: {
          ...action.payload
        }
      }

    default:
      return state;
  }
}