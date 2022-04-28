import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnnouncementActionCreator } from "../../store/Announcements/actions";
import { Announcement } from "../../types/Announcement";
import './AddForm.scss'
export const AddForm = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();

  const addAnnouncement = (announcement:Announcement) => dispatch(addAnnouncementActionCreator(announcement));
  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    switch(name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
    }
  };

  const handlesubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newAnnouncement:Announcement = {
      id: Math.random(),
      title,
      description,
      dateAdded: new Date().toLocaleDateString(),
    }
    addAnnouncement(newAnnouncement);
  }

  return (
    <form className="AddForm" onSubmit={handlesubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        className="input AddForm__input"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        className="input AddForm__input"
        onChange={handleChange}
      />
      <button 
        type="submit"
        className="button AddForm__button"
      >
        Add
      </button>
    </form>
  )
}