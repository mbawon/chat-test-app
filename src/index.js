import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css'
import './index.css';
import { Provider } from "react-redux";
import store from './store.js';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from './App';

let persistore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
      <App />
    </PersistGate>
  </Provider>
);

