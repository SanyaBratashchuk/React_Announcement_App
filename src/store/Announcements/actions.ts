import { Announcement } from "../../types/Announcement";
import { AnnouncemenstActionsTypes, ADD_ANNOUNCEMENT_ACTION, DELETE_ANNOUNCEMENT_ACTION, SELECT_ANNOUNCEMENT_ACTION, EDIT_ANNOUNCEMENT_ACTION, } from "../../types/reduxTypes/Announcements/Actions";

export const addAnnouncementActionCreator = (announcement:Announcement):ADD_ANNOUNCEMENT_ACTION => ({
  type: AnnouncemenstActionsTypes.ADD_ANNOUNCEMENT,
  payload: announcement,
});

export const deleteAnnouncementActionCreator = (id:number):DELETE_ANNOUNCEMENT_ACTION => ({
  type: AnnouncemenstActionsTypes.DELETE_ANNOUNCEMENT,
  payload:id,
});

export const selectAnnouncementActionCreator = (id:number):SELECT_ANNOUNCEMENT_ACTION => ({
  type: AnnouncemenstActionsTypes.SELECT_ANNOUNCEMENT,
  payload:id,
})

export const editAnnouncementActionCretor = (data:Announcement): EDIT_ANNOUNCEMENT_ACTION => ({
  type: AnnouncemenstActionsTypes.EDIT_ANNOUNCEMENT,
  payload:data,
})