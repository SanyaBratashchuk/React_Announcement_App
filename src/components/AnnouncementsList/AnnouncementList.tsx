import { memo, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { getAnnouncements } from "../../store/Announcements/selectors"
import { Announcement } from "../Announcement/Announcement"
import './AnnouncementsList.scss'
export const AnnouncementsList = memo(() => {
  const [query, setQuery] = useState('');
  const announcements = useSelector(getAnnouncements);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const visibleAnnouncements = useMemo(() => announcements.filter(announcement => announcement
    .title
    .toLowerCase()
    .startsWith(query.toLowerCase())), [query, announcements]);

  return (
    announcements.length ? (
      
      <div className="AnnouncementsList">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="search"
            className="input AnnouncementsList__input"
          />
          <ul className="AnnouncementsList__list">
            {visibleAnnouncements.map(({ id, title }) => (
              <Announcement
                key={id}
                id={id} title={title} />
            ))}</ul>
        </div>
      
    ) : (
      <h1 className="AnnouncementsList__message">No Announcements added</h1>
    )
  )
})

