import { FC } from "react";
import { useDispatch } from "react-redux";
import { selectAnnouncementActionCreator } from "../../store/Announcements/actions";
import { Announcement } from "../../types/Announcement";
import './SimiliarList.scss';
export const SimiliarList: FC<Props> = ({ announcements }) => {
 
  const dispatch = useDispatch();
 
 return ( <ul className="SimiliarList">
    {announcements.map(announcement => (
      <li 
        key={announcement.id}
        className="SimiliarList__item"
        onClick={() => dispatch(selectAnnouncementActionCreator(announcement.id))}
      >
        {announcement.title}
      </li>
    ))}
  </ul>
 );
}


interface Props {
  announcements: Announcement[],
}