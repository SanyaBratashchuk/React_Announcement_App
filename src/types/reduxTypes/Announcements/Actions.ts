import { Announcement } from "../../Announcement";

export enum AnnouncemenstActionsTypes{
  ADD_ANNOUNCEMENT = 'ADD_ANNOUNCEMENT',
  DELETE_ANNOUNCEMENT = 'DELETE_ANNOUNCEMENT',
}

export interface ADD_ANNOUNCEMENT_ACTION  {
  type: AnnouncemenstActionsTypes.ADD_ANNOUNCEMENT,
  payload: Announcement,
}

export interface DELETE_ANNOUNCEMENT_ACTION {
  type: AnnouncemenstActionsTypes.DELETE_ANNOUNCEMENT,
  payload: number,
}




export type Actions = DELETE_ANNOUNCEMENT_ACTION | ADD_ANNOUNCEMENT_ACTION;