import { FC } from "react"
import { useSelector } from "react-redux"
import { getAnnouncements } from "../../store/Announcements/selectors"
import { Announcement } from "../Announcement/Announcement"
import './AnnouncementsList.scss'
export const AnnouncementsList:FC = () => {
  const announcements = useSelector(getAnnouncements);
  
  return (
    <div className="AnnouncementsList">
      <ul className="AnnouncementsList__list">
        {announcements.map(({ id, title}) => (
      <Announcement 
      key={id}
      id={id} title={title} />
    ))}</ul>
    </div>
  )
}

