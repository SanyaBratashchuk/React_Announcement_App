import classNames from "classnames";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnnouncementActionCreator, selectAnnouncementActionCreator } from "../../store/Announcements/actions";
import { getSelected } from "../../store/Announcements/selectors";
import { Announcement as AnnouncementType } from "../../types/Announcement";
import './Announcement.scss';

export const Announcement = memo<Props>(({ title, id }) => {
  const dispatch = useDispatch();
  const deleteAnnouncement = (id: number) => dispatch(deleteAnnouncementActionCreator(id));
  const selectAnnouncement = (id: number) => dispatch(selectAnnouncementActionCreator(id));
  const selected = useSelector(getSelected);
  return (
    <li className={classNames('Announcement', 'AnnouncementsList__item', {
      'Announcement--selected': id === selected?.id,
    })}>
      <div className="Announcement__buttons-container">
        <button
          className="button Announcement__button Announcement__button--details"
          onClick={() => selectAnnouncement(id)}
        >
          Show details
        </button>
        <button
          className=" button button--close Announcement__button Announcement__button--delete"
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
)
type Props = Pick<AnnouncementType, 'title' | 'id'>;