import Form from './Form/Form';
import ContactList from './ContactList/ContactsList';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const showModal = useSelector(state => state.showModal);

  return (
    <>
      <Layout />
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}

      {contacts.length > 0 && <ContactList />}
    </>
  );
}
