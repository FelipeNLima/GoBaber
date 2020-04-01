import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import '~/config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';

import App from './App';

YellowBox.ignoreWarnings(['componentWillReceiveProps', 'Failed prop type']);

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}
