import { useDeleteContactMutation } from 'redux/contactsSlice';
import { BsTrash3 } from 'react-icons/bs';
import css from './ContactListItem.module.css';
import toast, { Toaster } from 'react-hot-toast';

export const ContactListItem = ({ item }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const clickHandler = event => {
	deleteContact(item.id);
	toast.success('Contact deleted!');
  }
  return (
    <div className={css.Wrapper}>
      <button
        className={css.DeleteBtn}
        onClick={() => clickHandler(item.id)}
        disabled={isLoading}
      >
        <BsTrash3 />
      </button>
		{/* <button
        className={css.EditBtn}
        onClick={() => deleteContact(item.id)}
        disabled={isLoading}
      >
        <AiFillEdit />
      </button> */}
      <div className={css.Contacts}>
        <p className={css.Info}>
          <span className={css.Label}>Name:</span>{' '}
          <span className={css.Data}>{item.name}</span>
        </p>
        <p className={css.Info}>
          <span className={css.Label}>Phone:</span>
          <span className={css.Data}>{item.phone}</span>
        </p>
      </div>
		<Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactListItem;
