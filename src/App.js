import React, { useState } from 'react';
import './App.css';
import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { pages } from './assets/pages/pages';
import {  setPages } from './store/slices/pagesSlice';

function App() {
  store.dispatch(setPages(pages));

  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter/>
      </div>
     </Provider>
  );
}

export default App;
