import React, { useEffect } from 'react';
import css from './ContactList.module.css';
// import { remove } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsFillPersonLinesFill,
  BsFillTelephoneFill,
  BsPersonDashFill,
} from 'react-icons/bs';
import { getContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
	 console.log('useEffect')
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  console.log('contacts', contacts);
  const filter = useSelector(state => state.filter);

  function getFilteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
  const filteredContacts = getFilteredContacts();
  //   console.log('filtereD', filteredContacts);

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <ul className={css.list}>
        {filteredContacts.map(item => (
          <li key={item.id} className={css.item}>
            <span className="name">
              <BsFillPersonLinesFill
                style={{ fill: '#00D4E0', marginRight: '5px' }}
              />
              {item.name}{' '}
            </span>
            <span className="number">
              <BsFillTelephoneFill
                style={{ fill: '#00D4E0', marginRight: '5px' }}
              />
              {item.phone}
            </span>
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(item.id))}
            >
              <BsPersonDashFill
                style={{ fill: '#00D4E0', marginRight: '5px' }}
              />{' '}
              DELETE CONTACT
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
