import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session'
import crossBrowserListener from './utils/redux-persist-listener';
import auth from './slice/auth-slice';
import user from './slice/user-slice';
import message from './slice/message-slice';

const authPersistConfig = {
    key: 'auth',
    storage: storageSession
};

const persistConfig = {
    key: 'root',
    blacklist: ['auth'],
    storage: storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    user,
    message,
});

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

window.addEventListener('storage', crossBrowserListener(store, persistConfig));

export default store;