import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './UserSlice/UserSlice'; // Assuming the correct path to your user reducer

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const Store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});

const persistor = persistStore(Store);

export { Store, persistor };
