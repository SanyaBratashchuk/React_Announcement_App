import { FC } from "react";
import { Announcement as AnnouncementType} from "../../types/Announcement";
import './Announcement.scss';

export const Announcement:FC<Props> = ({ title, id }) => {
  return (
    <li className="Announcement AnnouncementsList__item" key={id}>
      <div className="Announcement__buttons-container">
        <button 
        className="button Announcement__button Announcement__button--details">Show details</button>
        <button className=" button Announcement__button Announcement__button--delete">X</button>
      </div>
      <p className="Announcement__title">
        {title}
      </p>
    </li>
  )
}

type Props = Pick<AnnouncementType, 'title' | 'id'>;