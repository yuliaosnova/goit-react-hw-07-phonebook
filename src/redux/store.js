import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { modalReducer } from './showModalSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   whitelist: ['contacts'],
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  showModal: modalReducer,
});

// const persistedReduser = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
});

// export const persistor = persistStore(store);
