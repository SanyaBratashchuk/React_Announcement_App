import { FC } from "react";
import { Announcement as AnnouncementType} from "../../types/Announcement";
import './Announcement.scss';

export const Announcement:FC<Props> = ({ title, id }) => {
  return (
    <li className="Announcement AnnouncementsList__item" key={id}>
      <p className="Announcement__title">
        {title}
      </p>
    </li>
  )
}

type Props = Pick<AnnouncementType, 'title' | 'id'>;