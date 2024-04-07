import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers.js'; // Assuming you have a root reducer

import App from './App.jsx';

const store = createStore(rootReducer); // Creating Redux store with rootReducer

createRoot(document.getElementById('root')).render( // Use createRoot from "react-dom/client"
  <React.StrictMode>
    <Provider store={store}> {/* Wrap the App component with Provider and pass the Redux store */}
      <App />
    </Provider>
  </React.StrictMode>,
);
