import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import { store, persistor } from './store';

import GlobalStyled from './styles/global';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyled />
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
