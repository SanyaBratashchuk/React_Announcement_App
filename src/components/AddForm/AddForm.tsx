import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnnouncementActionCreator } from "../../store/Announcements/actions";
import { getSelected } from "../../store/Announcements/selectors";
import { Announcement } from "../../types/Announcement";
import { Form } from "../Form/Form";
import './AddForm.scss'

export const AddForm = memo(() => {
  const selected = useSelector(getSelected) as Announcement;
  const dispatch = useDispatch();
  const addAnnouncement = (announcement: Announcement) => dispatch(addAnnouncementActionCreator(announcement));
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addNewAnnouncement = (title:string, description:string) => {
    const newAnnouncement: Announcement = {
      id: Math.random(),
      title,
      description,
      dateAdded: new Date().toLocaleString(),
    }
    addAnnouncement(newAnnouncement);
  }

  return (
    <div className="AddForm">
      {isFormOpen ? (
        <Form 
          onSubmit={addNewAnnouncement} 
          formType="add" 
          announcement={selected}
          hideForm={setIsFormOpen} 
        />
      ) : (
      <button
        type="button"
        className="button form__button--showForm"
        onClick={() => setIsFormOpen(true)}
      >
        Add new Announcement
      </button>
      )}
    </div>
  )
})