import React, {  memo, SetStateAction, useState } from "react";
import classNames from "classnames";
import { InputErrors } from "../../types/InputErrors"
import './Form.scss'
import { Announcement } from "../../types/Announcement";



export const Form = memo<Props>(({
  onSubmit,
  hideForm,
  formType,
  announcement,
}) => {

  const [title, setTitle] = useState<string>(formType === 'edit' ? announcement.title : '');
  const [description, setDescription] = useState<string>(formType === 'edit' ? announcement.description : '');
  const [errors, setErrors] = useState<InputErrors>({
    title: false,
    description: false,
  });

  
  const closeForm = () => hideForm(false);

  const clear = () => {
    setTitle('');
    setDescription('');
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'title':
        setTitle(value);
        setErrors(err => ({
          ...err,
          title: false,
        }))
        break;
      case 'description':
        setDescription(value);
        setErrors(err => ({
          ...err,
          description: false,
        }))
    }
  };

  const handleSubmitWithValidation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isValid = true;

    if (!title) {
      setErrors(err => ({
        ...err,
        title: true,
      }));

      isValid = false;
    }

    if (!description) {
      setErrors(err => ({
        ...err,
        description: true,
      }))

      isValid = false;
    }

    if (!isValid) {
      return;
    }
    clear();
    onSubmit(title, description);
  }


  return (
      <form className="form" onSubmit={handleSubmitWithValidation}>
        <button
          className="button button--close form__button--close"
          type="button"
          onClick={closeForm}
        >
          X
        </button>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          className={classNames('input', 'form__input', {
            'input--invalid': errors.title,
          })}
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="#title" className="form__error">
          {errors.title ? (
            'Invalid title'
          ) : (
            ''
          )}
        </label>
        <textarea
          id="description"
          name="description"
          maxLength={280}
          placeholder="description"
          className={classNames('input', 'form__input', 'form__input--textarea', {
            'input--invalid': errors.description,
          })}
          value={description}
          onChange={handleChange}
        />
        <label htmlFor="#description" className="form__error">
          {errors.description ? (
            'Invalid description'
          ) : (
            ''
          )}
        </label>
        <button
          type="submit"
          className="button form__button"
        >
          {formType === 'add' ? 'Add' : 'Edit'}
        </button>
      </form>
  );
})

interface Props {
  onSubmit: (title: string, description: string) => void,
  formType: 'add' | 'edit',
  announcement:Announcement,
  hideForm: React.Dispatch<SetStateAction<boolean>>,
}

