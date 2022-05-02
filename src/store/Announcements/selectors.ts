import { RootState } from "..";

export const getAnnouncements = (state:RootState) => state.announcements.announcements;
export const getSelected = (state: RootState) => state.announcements.selected;