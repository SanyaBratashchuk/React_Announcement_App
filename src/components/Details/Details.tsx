import { useDispatch, useSelector } from "react-redux"
import { getAnnouncements, getSelected } from "../../store/Announcements/selectors"
import { Announcement } from "../../types/Announcement";
import { SimiliarList } from "../SimiliarList/SimiliarList";
import './Details.scss';
import '../Form/Form.scss';
import { memo, useEffect, useState } from "react";
import { Form } from "../Form/Form";
import { editAnnouncementActionCretor } from "../../store/Announcements/actions";

export const Details = memo(() => {
  const selectedAnnouncement = useSelector(getSelected) as Announcement;
  const announcements = useSelector(getAnnouncements);
  const [isFormOpen, setIsFormOpen] = useState(false)
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    setIsFormOpen(false);
  }, [selectedAnnouncement])
  
  const getMostSimiliar = () => {
    const similiar: Announcement[] = [];
    const { id, title, description } = selectedAnnouncement;
    const titleWords = title.toLowerCase().split(' ');
    const descriptionWords = description.toLowerCase().split(' ');

    announcements.forEach(announcement => {

      if (announcement.id === id) {
        return;
      }

      const wordsInTitle = announcement.title.toLowerCase().split(' ');
      const wordsInDescription = announcement.description.toLowerCase().split(' ');
      let sameWordsInTitle = 0;
      let sameWordsInDescription = 0;

      wordsInTitle.forEach(word => {
        if (titleWords.includes(word)) sameWordsInTitle++;
      })

      wordsInDescription.forEach(word => {
        if (descriptionWords.includes(word)) sameWordsInDescription++;
      })

      if (sameWordsInTitle && sameWordsInDescription) {
        similiar.push(announcement);
      }
    });

    return similiar.length > 3 ? similiar.slice(0, 3) : similiar;
  }

  const editAnnouncement = (title:string, description:string) => {
    const updated = {
      ...selectedAnnouncement,
      title:title,
      description:description,
    }
    setIsFormOpen(false);
    dispatch(editAnnouncementActionCretor(updated))
  }

  return (
    <div className="details">
      {selectedAnnouncement ? (
        <>
          <div className="details__info">
            <p className="details__title">{`Title: ${selectedAnnouncement.title}`}</p>
            <p className="details__description">{`Description: ${selectedAnnouncement.description}`}</p>
            <p className="details__date">{selectedAnnouncement.dateAdded}</p>
          </div>
          {isFormOpen ? (
            <Form 
              formType="edit" 
              announcement={selectedAnnouncement} 
              onSubmit={editAnnouncement}
              hideForm={setIsFormOpen}
              />
          )
            : (
              <button 
                className="button form__button--showForm"
                onClick={() => setIsFormOpen(true)}>
                  Edit
              </button>
         )}
          <SimiliarList announcements={getMostSimiliar()} />
        </>
      ) : (
        <p className="details__message">
          No announcements selected
        </p>
      )}
    </div>
  );
})