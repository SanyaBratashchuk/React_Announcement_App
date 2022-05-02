import { Announcement } from "../../Announcement";

export enum AnnouncemenstActionsTypes{
  ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT',
  DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT',
  SELECT_ANNOUNCEMENT = 'SELECT_ANNOUNCEMENT',
  EDIT_ANNOUNCEMENT = 'EDIT_ANNOUNCEMENT',
}

export interface ADD_ANNOUNCEMENT_ACTION  {
  type: AnnouncemenstActionsTypes.ADD_ANNOUNCEMENT,
  payload: Announcement,
}

export interface DELETE_ANNOUNCEMENT_ACTION {
  type: AnnouncemenstActionsTypes.DELETE_ANNOUNCEMENT,
  payload: number,
}

export interface SELECT_ANNOUNCEMENT_ACTION {
  type: AnnouncemenstActionsTypes.SELECT_ANNOUNCEMENT,
  payload: number,
}

export interface EDIT_ANNOUNCEMENT_ACTION {
  type: AnnouncemenstActionsTypes.EDIT_ANNOUNCEMENT,
  payload: Announcement
}

export type Actions = DELETE_ANNOUNCEMENT_ACTION |
 ADD_ANNOUNCEMENT_ACTION | 
 SELECT_ANNOUNCEMENT_ACTION | 
 EDIT_ANNOUNCEMENT_ACTION;