import { Announcement } from "../../types/Announcement";
import { AnnouncemenstActionsTypes, ADD_ANNOUNCEMENT_ACTION, DELETE_ANNOUNCEMENT_ACTION } from "../../types/reduxTypes/Announcements/Actions";

export const addAnnouncementActionCreator = (announcement:Announcement):ADD_ANNOUNCEMENT_ACTION => ({
  type: AnnouncemenstActionsTypes.ADD_ANNOUNCEMENT,
  payload: announcement,
});

export const deleteAnnouncementActionCreator = (id:number):DELETE_ANNOUNCEMENT_ACTION => ({
  type: AnnouncemenstActionsTypes.DELETE_ANNOUNCEMENT,
  payload:id,
});