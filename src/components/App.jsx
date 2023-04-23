import Form from './Form/Form';
import ContactList from './ContactList/ContactsList';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export default function App() {
	const dispatch = useDispatch();
	// const contacts = useSelector(getContacts);
	const showModal = useSelector(state => state.showModal);
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);
 
	useEffect(() => {
	  dispatch(fetchContacts());
	}, [dispatch]);
 
  return (
    <>
      <Layout />
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}
		{isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
}
