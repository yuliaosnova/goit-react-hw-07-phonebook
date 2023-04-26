import { useState } from 'react';
import css from './FormEdit.module.css';
import { useDispatch } from 'react-redux';
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/contactsSlice';
import toast from 'react-hot-toast';
import { setShowEditModal } from 'redux/showEditModalSlice';

export default function FormEdit({ contactId }) {
  const { data } = useGetContactByIdQuery(contactId);
  console.log('contactId', contactId);
  console.log('editingContact', data);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [updateContact] = useUpdateContactMutation();

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await updateContact({ name: name, phone: number, id: contactId });
      toast.success('Contact updated!');
      dispatch(setShowEditModal());
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      {data && (
        <form onSubmit={handleSubmit} className={css.FeedbackForm}>
          <label htmlFor={name}>Name</label>
          <input
            type="text"
            name="name"
            //   value={data.name}
            defaultValue={data.name}
            id={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.InputForm}
          />

          <label htmlFor={number}>Number</label>
          <input
            type="tel"
            name="number"
            //   value={number}
            defaultValue={data.phone}
            id={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.InputForm}
          />
          <button type="submit" className={css.ButtonSubmit}>
            Save changes
          </button>
        </form>
      )}
    </>
  );
}
