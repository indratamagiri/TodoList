/* eslint-disable no-console */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';
import RootContainer from './src/RootContainer';
import configStore from './src/redux/store';

const { store } = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

// export default App
export default App;
