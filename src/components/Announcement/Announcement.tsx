import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteAnnouncementActionCreator } from "../../store/Announcements/actions";
import { Announcement as AnnouncementType} from "../../types/Announcement";
import './Announcement.scss';

export const Announcement:FC<Props> = ({ title, id }) => {
  const dispatch = useDispatch();
  const deleteAnnouncement = (id:number) => dispatch(deleteAnnouncementActionCreator(id));
  

  return (
    <li className="Announcement AnnouncementsList__item">
      <div className="Announcement__buttons-container">
        <button 
        className="button Announcement__button Announcement__button--details">Show details</button>
        <button 
          className=" button Announcement__button Announcement__button--delete"
          onClick={() => deleteAnnouncement(id)}
        >
          X
        </button>
      </div>
      <p className="Announcement__title">
        {title}
      </p>
    </li>
  )
}

type Props = Pick<AnnouncementType, 'title' | 'id'>;