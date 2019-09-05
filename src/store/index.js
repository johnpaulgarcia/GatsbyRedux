
import React from 'react'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,reducer);

const configureStore = () => {
    let store = createStore(persistedReducer,applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {store,persistor}
}

const {store,persistor} = configureStore();

export default ({element})=>(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
);


