import { Announcement } from "../../Announcement";

export interface DefaultAnnouncementsState {
  announcements: Announcement[],
  selectedId: number,
}