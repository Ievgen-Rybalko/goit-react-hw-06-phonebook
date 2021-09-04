//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
//import { composeWithDevTools } from 'redux-devtools-extension';   ---у тулкита под капотом

import contactsReducer from './contacts/contact-reducer';
import { logger } from 'redux-logger';
import {
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const store = configureStore({
    reducer: {
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
    },
    midleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',   //devTools: true -- it goes by default
    
});

const persistor = persistStore(store);

const persStore = { store, persistor };

export default persStore;


//const reducer = (state = {}, action) => state;
//const rootReducer = combineReducers({
//})
// const store = createStore(reducer,
//   composeWithDevTools()
//     // other store enhancers if any
// );
//console.log(process.env.NODE_ENV);
//const middleware = [...getDefaultMiddleware(), logger];