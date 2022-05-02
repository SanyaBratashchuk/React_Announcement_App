import { Announcement } from "../../Announcement";

export interface DefaultAnnouncementsState {
  announcements: Announcement[],
  selected: Announcement | null,
}