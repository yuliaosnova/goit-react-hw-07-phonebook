import React from 'react';
import css from './ContactList.module.css';
import { useGetContactsQuery } from 'redux/contactsSlice';
import ContactListItem from 'components/ContactListtem/ContactListItem';
import AddBtn from 'components/AddBtn/AddBtn';
import { useSelector } from 'react-redux';

export const ContactList = ({getContactId}) => {
  const { data, error, isLoading } = useGetContactsQuery();
  console.log('ConTaCts', data)
  const filter = useSelector(state => state.filter);
  //   console.log('filter', filter)
  
  function getFilteredContacts() {
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    } else {
      return data;
    }
  }

  const filteredContacts = getFilteredContacts();
  console.log('filtereD', filteredContacts);

  return (
    <>
      {error && 'ERROR(('}
      {isLoading ? (
        <div className={css.Spinner}>Loading...</div>
      ) : (
        <div className={css.Container}>
          {/* <h2 className={css.Title}>Contacts</h2> */}
          <ul className={css.List}>
            {filteredContacts.map(item => (
              <li key={item.id} className={css.Item}>
                <ContactListItem item={item} getContactId={getContactId} />
              </li>
            ))}
          </ul>
          <AddBtn />
        </div>
      )}
    </>
  );
};
