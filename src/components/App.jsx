import Form from './Form/Form';
import { ContactList } from './ContactList/ContactsList';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';
import AddBtn from './AddBtn/AddBtn';

export default function App() {
  const showModal = useSelector(state => state.showModal);

  return (
    <>
      <Layout />
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}
      <ContactList />
    </>
  );
}
