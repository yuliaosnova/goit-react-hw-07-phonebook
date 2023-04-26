import Form from './Form/Form';
import { ContactList } from './ContactList/ContactsList';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import FormEdit from './FormEdit/FormEdit';
import ModalEdit from './FormEdit/ModalEdit';

export default function App() {
  const showModal = useSelector(state => state.showModal);
  const showEditModal = useSelector(state => state.showEditModal);
  const [editingContactId, setEditContactId] = useState('');

  const getContactId = contactid => {
    setEditContactId(contactid);
  };

  return (
    <>
      <Layout />
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}
      {showEditModal && (
        <ModalEdit>
          <FormEdit contactId={editingContactId} />
        </ModalEdit>
      )}
      <ContactList getContactId={getContactId} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
