/* eslint-disable react/style-prop-object */
import React from 'react';
import { registerRootComponent } from 'expo';
import { RootSiblingParent } from 'react-native-root-siblings';
import { StatusBar } from 'expo-status-bar';
import Routes from './presentation/routes/Routes';

const App: React.FC = () => {
  return (
    <RootSiblingParent>
      <StatusBar />
      <Routes />
    </RootSiblingParent>
  );
};

export default registerRootComponent(App);
