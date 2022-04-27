import { FC } from "react"
import { Announcement as AnnouncementType } from "../../types/Announcement"
import { Announcement } from "../Announcement/Announcement"
import './AnnouncementsList.scss'
export const AnnouncementsList:FC<Props> = ({ announcements }) => {
  return (
    <div className="AnnouncementsList">
      <ul className="AnnouncementsList__list">
        {announcements.map(({ id, title}) => (
      <Announcement id={id} title={title} />
    ))}</ul>
    </div>
  )
}

interface Props {
  announcements: AnnouncementType[],
}

