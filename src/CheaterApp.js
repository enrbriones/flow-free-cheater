import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { Main } from './pages/Main';
import {Header} from './components/common/Header'
import { Footer } from './components/common/Footer';

export const CheaterApp = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer/>
    </Provider>
  );
};
