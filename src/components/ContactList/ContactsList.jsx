import React from 'react';
import css from './ContactList.module.css';
import { remove } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsFillPersonLinesFill,
  BsFillTelephoneFill,
  BsPersonDashFill,
} from 'react-icons/bs';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function getFilteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
  const filteredContacts = getFilteredContacts();
  //   console.log ('filtereD', filteredContacts);

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
              {item.number}
            </span>
            <button
              className={css.btn}
              onClick={() => dispatch(remove(item.id))}
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
