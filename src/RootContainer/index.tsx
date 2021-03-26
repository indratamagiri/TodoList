import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './Routes';
import configStore from '../redux/store';

const { persistor } = configStore();

const RootContainer = () => {

  return (
    <PersistGate persistor={persistor}>
      <Routes onNavigationStateChange={null} />
    </PersistGate>
  );
};

export default RootContainer;
