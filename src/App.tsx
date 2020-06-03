import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import RouterComponent from './router';

const App = () => {
  console.disableYellowBox = true;
  //persistor.purge();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
