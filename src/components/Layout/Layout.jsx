import Filter from 'components/Filter/Filter';
import css from './Layout.module.css';
import { useDispatch } from 'react-redux';
import { setShowModal } from 'redux/showModalSlice';

export const Layout = () => {
	const dispatch = useDispatch();

	const toggleModal = () => {
		dispatch(setShowModal());
	 };

  return (
    <div className={css.Layout}>
      <header className={css.Header}>
        <h1 className={css.Title}>Phonebook</h1>
        <Filter />
        <button className={css.AddBtn} onClick={toggleModal}>ADD CONTACT</button>
        {/* <div className={css.Enter}>
          <button className={css.EnterBtn}>Log in</button>
          <button className={css.EnterBtn}>Sign up</button>
        </div> */}
      </header>
      <main>
      </main>
    </div>
  );
};
